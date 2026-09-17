# data-testid & Playwright conventions

## Format

`data-testid="<name>"`

Two tiers, by what the id identifies:

- **Container/root ids are unique and descriptive**: `hero-section`, `hero-container`,
  `navbar-container`, `about-job-experience`, `contact-name-input`. These don't repeat anywhere
  else on the page, so they carry their full context in the name.
- **Leaf/repeated-element ids are short and reused**: `heading`, `subheading`, `title`,
  `description`, `name`, `icon`, `grade`, `link`, `read-more`. The same id appears under many
  different parents (e.g. `heading` exists inside `hero-container`, `about-container`, and every
  skill/project/education card) — see [Scoping](#scoping-lexical-scoping) for how that's made
  safe.
- **Variant ids** for repeated siblings (skill cards, project cards, education entries) are
  stable, content-based slugs — `react`, `node`, `todo`, `ecom`, `btech`, `inter`, `matric` —
  never a numeric index. Indices break silently when markup order changes; a content-based slug
  documents what's being tested and survives reordering.

All values: kebab-case, all lowercase.

## Scoping ("lexical scoping")

Two separate things are going on here — worth keeping apart:

- **A naming precondition**: a container needs its own id *before* its children can reuse short
  generic names, because the children will only ever be found relative to that container. 
- **The actual scoping mechanism**: every leaf id is looked up through a locator chained off its
  parent, never off `page` directly. This is the part that earns the name "lexical scoping" — the
  same string (`heading`) resolves to a different element depending on which scope you searched
  it in, exactly like a variable named `x` inside two different functions resolves to two
  different values depending on which function's body you're reading it from. The name doesn't
  make it unique; the enclosing scope does.

Concretely, in this repo that means: **never call `page.getByTestId(...)` for a leaf id — chain
it off the already-scoped parent locator.**

```html
<section data-testid="hero-section">
  <div data-testid="hero-container">
    <h1 data-testid="heading">...</h1>
  </div>
</section>
```

```js
// pages/homepage.js
this.heroSection = page.getByTestId("hero-section");
this.heroContainer = this.heroSection.getByTestId("hero-container");
this.heroHeading = this.heroContainer.getByTestId("heading");   // chained, not page.getByTestId("heading")
```

Each `pages/*.js` file is a plain class whose constructor builds every locator once, each one
chained off the previously-built property for its parent — never off `page` directly past the
section root. That chain is what lets `heading` mean "this section's heading" instead of
colliding with the four other `heading`s on the page.

### Repeated siblings: build the scope dynamically

Where a section repeats the same shape multiple times (skill cards, project cards), the variant
id from the section above is used to build a keyed object of locators per card, each one scoped
to that card:

```js
// pages/skillspage.js
const skills = ["html", "css", "js", "react", "node", "bootstrap"];

this.skills = {};
for (const skill of skills) {
  const card = this.skillsSection.getByTestId(skill);
  this.skills[skill] = {
    card,
    icon: card.getByTestId("icon"),
    name: card.getByTestId("name"),
    description: card.getByTestId("description"),
    readMore: card.getByTestId("read-more"),
  };
}
```

`this.skills.react.name` and `this.skills.node.name` both resolve `name`, but each only ever
searches inside its own card — same principle as the static chains above, applied per loop
iteration. `pages/projectspage.js` follows the identical shape for `todo`/`ecom`.

## Known exception: not every page object is migrated yet

`pages/contactpage.js` and `pages/footerpage.js` still use the older, pre-scoping model: every
locator is built with fully-qualified unique ids (`contact-name-input`, `footer-social-github`)
called directly off `page`, with no chaining and no id reuse. This isn't an inconsistency to
work around — the ids there don't collide with anything else on the page, so there's nothing
currently broken. It's flagged here so it's clear the two-tier format above is the target for
new/rewritten sections, not a claim that the whole codebase already follows it.
