# data-testid & Playwright conventions

## Format

`data-testid="<section>-<component>[-<element>][-<variant>]"`

- kebab-case only, all lowercase.
- `<section>`: the page section (`navbar`, `hero`, `about`, `skills`, `projects`, `contact`, `footer`).
- `<component>`: the widget within that section (`form`, `menu`, `list`, `card`).
- `<element>`: a specific field/control inside the component (`input-email`, `submit`, `title`).
- `<variant>`: a stable, content-based suffix for repeated siblings (`todo`, `html`, `github`) —
  never a numeric index. Indices break silently when markup order changes; a content-based
  suffix documents what's being tested.

## Scoping ("lexical scoping")

A container gets its test id before its children get theirs, and every child test id is only
ever resolved through a locator scoped to its parent — the same way a nested DOM subtree only
makes sense inside its containing element:

```html
<nav data-testid="navbar">
  <ul data-testid="navbar-menu">
    <li><a data-testid="navbar-link-projects">Projects</a></li>
  </ul>
</nav>
