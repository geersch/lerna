---
marp: true
theme: gaia
size: 16:9
auto-scaling: code
title: Monorepos
---

<style>
section {
  font-size: large;
}
footer {
  text-align: right;
}
</style>

<!-- _class: lead invert -->

# Monorepos

---

<!-- _class: invert -->

![bg 50%](lernaean-hydra.png)

---

<!-- footer: 'Monorepos - Christophe Geers' -->

# Agenda

* Lerna
* What does a monorepo look like?
* Lerna Commands
* Lerna with NPM
* Lerna with Yarn
* Yarn Workspaces
* Lerna with Yarn Workspaces
* GitHub Packages
* Continuous Deployment

---

## Lerna

* Splitting up large codebases into separate independently versioned packages is useful for code sharing.

* Tracking changes and testing accross repositories becomes difficult very quickly.

* Organize your codebases into multi-package repositories also known as monorepos.

* Examples: [Angular][1], [Jest][2], [React][3]...

* Lerna helps you optimize to manage multi-package repositories !

---

## What does a monorepo look like?

```plaintext
./my-monorepo
│
│  README.md
│  package.json
│
-───packages
    │
    -────package-1
    │   │  README.md
    │   │  package.json
    │   │   ...
    -────package-2
    │   │  README.md
    │   │  package.json
    │   │   ...
    -────package-3
        │  README.md
        │  package.json
        │   ...
```

---

## Lerna Commands

* lerna init
* lerna bootstrap 
* lerna run
* lerna exec
* lerna add
* lerna version
* lerna publish
* lerna clean
* lerna info

--- 

### Lerna init

Install Lerna for access to the CLI. Creates a new Lerna repo or upgrades an existing repo to the current version of Lerna

```shell
$ lerna init
```

* Lerna will be added as a `devDependency` in `package.json`.
* Creates a `lerna.json` config file to store the version number.
* By default Lerna projects operate on a single line version. The version is kept in the `lerna.json` file at the root of your project under the `version` key.
* Independent mode allows you to increment package versions independently of each other. Each time you publish, you will get a prompt for each package that has changed to specify if it's a patch, minor or major change.

  ```shell
  # Independent mode
  $ lerna init --independent
  ```

---

### Lerna bootstrap

Bootstraps the packages in the current repo.

```shell
$ lerna bootstrap
```

* Installs all of the dependencies and links any cross-dependencies. It will symlink together all packages that are dependencies of each other.

* Runs the `prepublish` and `prepare` scripts in all bootstrapped packages.

* The `prepublish` script is [deprecated][6] and has been replaced with the `prepare` script. The NPM CLI runs the `prepublish` script for both `npm publish` and `npm install`.

* Use `prepublishOnly` script to only run a script before `npm publish`.

* Use the `--hoist` flag to install dependencies at the repo root. Binaries from these dependencies are linked into the dependent package `node_modules/.bin` directory.

  ```shell
  $ lerna bootstrap [glob]
  ```

---

### Lerna run

Run a script in each package that contains that script.

```shell
$ lerna run <script> -- [..args]
```

* For example, running the unit tests for each package.

  ```shell
  $ lerna run test
  ```

* Stream the output from the child processes immediately, prefixed with the package name.

  ```shell
  $ lerna run test --stream
  ```

* Can also be run in parallel.

  ```shell
  $ lerna run test --stream --parallel
  ```

---

### Lerna exec

Run a command in each package.

```shell
$ lerna exec -- <command> [...args]
```

* For example, for cleaning each package folder.

  ```shell
  $ lerna exec -- rm -rf ./coverage ./dist ./node_modules junit.xml 
  ```

* Scoped packages are supported.

  ```shell
  $ lerna exec --scope @geersch/logging -- rm -rf  ./node_modules
  ```

* Can also be run in parallel.

  ```shell
  $ lerna exec --parallel -- rm -rf  ./node_modules
  ```

---

### Lerna add

Add a package as a dependency to packages in the current repo.

```shell
$ lerna add <package>[@version] [--dev] [--exact] [--peer]
```

For example:

```shell
$ lerna add lodash
$ lerna add lodash --scope @geersch/logging
```

* Adding a development dependency.

  ```shell
  $ lerna add debug --dev
  $ lerna add debug --dev --scope @geersch/logging
  ```

* Adding a peer dependency.

  ```shell
  $ lerna add lodash --peer
  $ lerna add lodash --peer --scope @geersch/logging
  ``` 

---

### Lerna version

Identifies the packages that have been updated and will prompt for a new version.

```shell
$ lerna version
```

By default it commits the changes, tags the commit and pushes to the remote. 

* Use `--no-git-tag-version` if you don't want it to create a commit.

  ```shell
  $ lerna version --no-git-tag-version
  ```

* You can also pass a semver level and the `--yes` flag to skip the selection prompt

  ```shell
  $ lerna version [major | minor | patch | premajor | preminor | prepatch | ...] --yes
  ```

* If you use the `--conventional-commits` flag, then it will use the [Conventional Commits specification][5] to determine the version bump and generate `CHANGELOG.md` files.

  ```shell
  $ lerna version --conventional-commits
  ```

---

### Lerna publish

Identifies the packages have been updated and publishes them.

```shell
$ lerna publish
```

Calls `lerna version` and publishes the packages updated since the last release.

* Use `from-git` to publish packages tagged in the current commit.

  ```shell
  $ lerna publish from-git
  ```

* Use `from-package` to inspect each `package.json` file and publish if the package version is not present in the registry. Handy if a previous `lerna publish` failed to publish all the packages.

  ```shell
  $ lerna publish from-package
  ```
---

### Lerna clean

Remove the `node_modules` directory from all packages.

```shell
$ lerna clean
```

* I prefer `lerna exec` to clean each package folder.

  Just put the following `purge` script in the `package.json` file at the root of your project.

  ```json
  {
    "purge": "lerna exec --parallel -- rm -rf ./node_modules ./coverage ./dist junit.xml"
  }
  ```

* Or use `lerna run` and provide a script per package.

  ```shell
  $ lerna run clean
  $ lerna run --scope @geersch/logging clean
  ```

---

### Lerna info

Prints local environment information that can be useful for submitting bug reports.

```shell
$ lerna info
```

```shell
Environment info:

System:
  OS: macOS 10.15.6
  CPU: (12) x64 Intel(R) Core(TM) i7-8750H CPU @ 2.20GHz
Binaries:
  Node: 12.16.1 - ~/.nvm/versions/node/v12.16.1/bin/node
  Yarn: 1.22.5 - ~/.nvm/versions/node/v12.16.1/bin/yarn
  npm: 6.14.8 - ~/.nvm/versions/node/v12.16.1/bin/npm
Utilities:
  Git: 2.24.3 - /usr/bin/git
npmPackages:
  lerna: ^3.22.1 => 3.22.1
```

---

<!-- _class: lead invert -->

## Lerna with NPM

## git clone https://github.com/geersch/lerna.git
git checkout master

---


## Lerna with NPM

### Installation

By default Lerna uses [NPM][4] as the client to run commands with.

```shell
$ mkdir lerna
$ cd lerna
$ npx lerna init
$ npm install
```

### lerna.json

```json
{
  "packages": [
    "packages/*"
  ],
  "version": "independent",
  "command": {
    "publish": {
      "registry": "https://npm.pkg.github.com"
    }
  }
}
```

---

### package.json

```json
{
  "name": "root",
  "version": "1.0.0",
  "description": "A monorepo example using Lerna.",
  "private": true,
  "scripts": {
    "postinstall": "lerna bootstrap",
  },
  "devDependencies": { ... }
}
```

After installing the packages (`npm install`) the `postinstall` script will run `lerna bootstrap` which bootstraps the packages in the current Lerna repo. It will symlink together all Lerna `packages` that are dependencies of each other

--- 

### Hoisting

```json
{
  "name": "root",
  "version": "1.0.0",
  "description": "A monorepo example using Lerna.",
  "private": true,
  "scripts": {
    "postinstall": "lerna bootstrap --hoist",
  },
  "devDependencies": { ... }
}
```

* Multiple packages often have duplicate dependencies in their `package.json`files. 
* Lerna can reduce duplicate packages by hoisting the dependencies up to the root (topmost Lerna-project level `node_modules` directory).
* Use `lerna bootstrap --hoist` in the `postinstall` script to bootstrap the package after installing them via `npm install`.

---

<!-- _class: lead invert -->

## Lerna with Yarn

## git clone https://github.com/geersch/lerna.git
git checkout lerna-with-yarn

---

## Lerna with Yarn

Use Yarn as the NPM client.

* Install [Yarn][7].

  ```shell
  $ npm install -g yarn
  ```

* Specify Yarn as the NPM client in `lerna.json`.

  ```json
  {
    "npmClient": "yarn",
    "packages": ["packages/*"],
    "version": "independent",
  }
  ```

* Run `yarn import` to generate a `yarn.lock` from an NPM `package-lock.json` file.

* Remove the `node_modules` folder and `package-lock.json` files in the root and package folders.

* Run `lerna bootstrap` in the `postinstall` script to bootstrap the packages.

  ```json
  {
    "postinstall": "lerna bootstrap"
  }
  ```

* Run `yarn` from the root to install the packages and bootstrap the packages.

---

<!-- _class: lead invert -->

## Yarn Workspaces

## git clone https://github.com/geersch/lerna.git
git checkout yarn-workspaces

---

## Yarn Workspaces

Use Yarn Workspaces for handling the dependencies.

* Install [Yarn][7].

  ```shell
  $ npm install -g yarn
  ```

* Run `yarn import` to generate a `yarn.lock` from an NPM `package-lock.json` file.

* Remove the `node_modules` folder and `package-lock.json` files in the root and package folders.

* Yarn Workspaces needs to be defined in the root `package.json`.

  ```json
  {
    "workspaces": ["packages/*"]
  }
  ```

* Remove the `Lerna` package and the `lerna.json` configuration.

  ```shell
  $ yarn remove lerna
  $ rm -rf lerna.json
  ```

* Remove the scripts that use Lerna in the root `package.json` file.

* Run `yarn` from the root to install the packages.

---

<!-- _class: lead invert -->

## Lerna with Yarn Workspaces

## git clone https://github.com/geersch/lerna.git
git checkout lerna-with-yarn-workspaces

---

## Lerna with Yarn Workspaces

Use Yarn Workspaces for handling the dependencies and use Lerna to run commands for the packages and to publish them.

* Install [Yarn][7].

  ```shell
  $ npm install -g yarn
  ```

* Specify Yarn as the NPM client in `lerna.json` and set `useWorkspaces` to `true` to let Yarn manage the dependencies.

  ```json
  {
    "npmClient": "yarn",
    "useWorkspaces": true,
    "packages": ["packages/*"],
    "version": "independent",
  }
  ```

* Yarn Workspaces needs to be defined in the root `package.json`.

  ```json
  {
    "workspaces": ["packages/*"]
  }
  ```

* Run `yarn import` to generate a `yarn.lock` from an NPM `package-lock.json` file.

* Remove the `node_modules` folder and `package-lock.json` files in the root and package folders.

* Don't run `lerna bootstrap`. Remove the `postinstall` script.

* Run `yarn` from the root to install the packages.

---

<!-- _class: lead invert -->

## GitHub Packages

---

## GitHub Packages

Let's publish the packages.

* Step 1: Set the `name` and `publishConfig` options in your package's `package.json`.

  ```json
  {
    "name": "@geersch/calculator",
    "publishConfig": { 
      "registry": "https://npm.pkg.github.com/" 
    }
  }
  ```


* Step 2: Authenticate

  ```shell
  $ yarn login --registry=https://npm.pkg.github.com/
  ```

* Step 3: Publish

  ```shell
  $ yarn publish
  ```

  ---

  <!-- _class: lead invert -->

## Continuous Deployment

---

  ## Pipeline

  An Azure DevOps pipeline.

```yaml
trigger:
- master
pr: none

pool:
  vmImage: ubuntu-18.04

steps:
- script: git checkout $(Build.SourceBranchName)
  displayName: 'Checkout $(Build.SourceBranchName)'
- script: |
    git remote set-url origin git@github.com:geersch/lerna.git
    git config user.name "$(GIT_USERNAME)"
    git config user.email "$(GIT_USER_EMAIL)"
  displayName: 'Configure GIT'
- task: npmAuthenticate@0
  inputs:
    workingFile: ./.npmrc
    customEndpoint: 'GitHub Packages'
- script: yarn
  displayName: 'Install the dependencies'
- script: yarn run publish:ci
```

[1]: https://github.com/angular/angular
[2]: https://github.com/facebook/jest
[3]: https://github.com/facebook/react
[4]: https://www.npmjs.com/
[5]: https://www.conventionalcommits.org/en/v1.0.0/
[6]: https://docs.npmjs.com/misc/scripts
[7]: https://yarnpkg.com