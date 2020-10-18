# Monorepos

This is a multi-package repository (monorepo) containing two packages:

* @geersch/calculator
* @geersch/logging

The code in the packages is for demonstration purposes only.

The following branches contain different variants of configuring a monoreo.

* the `master` branch uses [Lerna][1] with [NPM][2]
* the `lerna-with-yarn` branch uses [Lerna][1] with [Yarn][3]
* the `yarn-workspaces` branch uses [Yarn Workspaces][4]
* the `lerna-with-yarn-workspaces` branch uses [Lerna][1] with [Yarn Workspaces][4]

Feel free to check them out and explore them.

```shell
# Lerna with NPM
$ git checkout master

# Lerna with Yarn
$ git checkout lerna-with-yarn

# Yarn Workspaces
$ git checkout yarn-workspaces

# Lerna with Yarn Workspaces
$ git checkout lerna-with-yarn-workspaces
```

The `lerna-with-yarn`, `yarn-workspaces` and `lerna-with-workspaces` branches were created from the `master` branch. Starting out with Lerna with NPM the necessary changes were introduced to configure the monorepo differently. These changes are described in a [Marpit][5] [slide deck](./docs/slides.md) which be found in the docs folder.

[1]: https://github.com/lerna/lerna
[2]: https://www.npmjs.com/
[3]: https://yarnpkg.com/
[4]: https://classic.yarnpkg.com/en/docs/workspaces/
[5]: https://marpit.marp.app
