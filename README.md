<div align="center">

# @tailwindash

[![MIT][license.badge]][license]

Collection of plugins and utilities for [TailwindCSS][tailwind]

</div>

## Table of Contents

<details open>
  <summary>Show / hide</summary>

- [@tailwindash](#tailwindash)
  - [Table of Contents](#table-of-contents)
  - [Packages](#packages)
  - [Contributing](#contributing)

</details>

## Packages

`@tailwindash` includes several packages that have self-managed release cycles, listed below. Check out their corresponding README for more details.

| Package | Short Description | Version | Changelog |
| --- | --- | --- | --- |
| [@tailwindash/triangle][github.triangle] | build triangle with border | [![npm.triangle.badge]][npm.triangle] | [Changelog][github.triangle.changelog]

## Contributing

[Read Contribution Guide][github.contributing]

This project is a monorepo using [turborepo] under the hood. Familiarity with [turborepo] is not required but encouraged.

For a quick start, run the script below at project root to see what commands are available.

```bash
pnpm turbo
```

<br />

<p align="center">
  <a href="https://www.buymeacoffee.com/vnphanquang" target="_blank">
    <img
      src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png"
      height="60"
      width="217"
      alt="buy vnphanquang a coffee"
    />
  </a>
</p>

<!-- github specifics -->
[github.contributing]: ./CONTRIBUTING.md
[github.issues]: https://github.com/vnphanquang/tailwindash/issues?q=

[github.triangle]: https://github.com/vnphanquang/tailwindash/tree/main/packages/plugins/triangle
[github.triangle.changelog]: https://github.com/vnphanquang/tailwindash/blob/main/packages/plugins/triangle/CHANGELOG.md

<!-- heading badge -->
[license.badge]: https://img.shields.io/badge/license-MIT-blue.svg
[license]: ./LICENSE

<!-- npm -->
[npm.triangle.badge]: https://img.shields.io/npm/v/@tailwindash/triangle
[npm.triangle]: https://www.npmjs.com/package/@tailwindash/triangle

[turborepo]: https://turborepo.org/
[tailwind]: https://tailwindcss.com/
