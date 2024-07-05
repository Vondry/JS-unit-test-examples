# Educational repo of unit test samples

> - This **1. part** is intended to explain test assertions, show examples of unit tests and also how to automate tests.
> - [2. part shows how to test different FE libraries](https://github.com/Vondry/JS-app-tests-examples)

- Tests are written using [vitest](https://vitest.dev) using [Jest](https://jestjs.io/) like assertions.

## Implemented features

- Tests are executed automatically on GitHub using [checks.yml](.github/workflows/checks.yml) workflow
- Tests are executed automatically before every `git push` to the remote repository
  via [pre-push](.husky/pre-push) [Git Hook](https://git-scm.com/book/en/v2/Customizing-Git-Git-Hooks)
  using [Husky](https://github.com/typicode/husky)
- For every `git commit` there is automatically being run (via [pre-commit](.husky/pre-commit))
  [ESLint](https://eslint.org/) that might do some more code improvements and also
  format code using [Prettier](https://prettier.io)

- All git message are validated by [commitlint](https://github.com/conventional-changelog/commitlint)
  via [commit-msg](.husky/commit-msg)
    - If your `git commit -m "..."` fails with `husky - commit-msg script failed (code 1)`, please refer
      to [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) and read how professionals write commit
      messages

## Getting started

- Run `npm i` in the project root to install vitest

### Directories

- [playground](./playground) - Explains and gives examples of how basic assertions works
- [utils](./utils) - Includes code samples with test coverage and some practical exercises

## Best practices

Please check out **[list of examples here](./BestPractices.md)**.
