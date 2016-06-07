# aurelia-skeleton
[![Join the chat at https://gitter.im/spoonx/dev](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/spoonx/dev)

Opinionated Aurelia skeleton for the [Swan](https://github.com/SpoonX/swan-cli) stack.

## Installing

#### Using [Swan](https://github.com/SpoonX/swan-cli)
Run `swan new <project name>` (also provides a auth server)

#### Using npm and jspm
1. Run `npm install`
2. Run `jspm install`

## What
The Aurelia-skeleton features:

- [Aurelia-authentication](https://github.com/SpoonX/aurelia-authentication)
- [Aurelia-api](https://github.com/SpoonX/aurelia-api)
- [Aurelia-orm](https://github.com/SpoonX/aurelia-orm)
- [Aurelia-notification](https://github.com/SpoonX/aurelia-notification)
- An organized directory structure (rather then flat like [skeleton-navigation](https://github.com/aurelia/skeleton-navigation/tree/master/skeleton-es2016/src))
- Navigation

## Build tasks

### Bundle
Creates a production-ready build in the `dist/` directory.
The contents of this directory can be uploaded and served to visitors.

### Watch
Transpiles to `.dev` (the new "`dist`"). This has been optimized in performance (no unneeded copying of files).
