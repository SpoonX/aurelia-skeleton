# aurelia-skeleton
Opinionated Aurelia skeleton.

Features an organized directory structure rather then a flat structure like [aurelia-skeleton-navigation](https://github.com/aurelia/skeleton-navigation).

Also used for generating new projects with [Spoonx/Swan](https://github.com/SpoonX/swan-cli).

## Installing
1. Run `npm install`
2. Run `jspm install`

## What
The default [aurelia-skeleton-navigation](https://github.com/aurelia/skeleton-navigation) has a flat structure which can grow very large and easily becomes a mess.

Our Aurelia-skeleton has a directory structure that is very organized and simple to use. When bundling your application the structure will also be organized.

## Build tasks

### Bundle
Creates a production-ready build in the `dist/` directory.
The contents of this directory can be uploaded and served to visitors.

### Watch
Transpiles to `.dev` (the new "`dist`"). This has been optimized in performance (no unneeded copying of files).
