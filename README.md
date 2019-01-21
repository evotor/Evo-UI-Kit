# EvoUI

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.0.3.

## Installation

To install this package run following command:

```
yarn add evo-ui-kit
```

Add to styles in angular.json

```
"styles": [
    ...
    "node_modules/evo-ui-kit/styles/main.scss",
    ...
],
```

Add fonts from Google Fonts

```
<link href="https://fonts.googleapis.com/css?family=Open+Sans:400,400i,600,600i,700&amp;subset=cyrillic-ext" rel="stylesheet">
<link href="https://fonts.googleapis.com/css?family=Ubuntu:400,400i,500,500i,700&amp;subset=cyrillic,cyrillic-ext" rel="stylesheet">
```

### Troubleshooting

If you have password on your ssh key, [add it to ssh-agent](https://help.github.com/articles/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent/#adding-your-ssh-key-to-the-ssh-agent).

If you have renamed your ssh key, add it to ssh-config.

```
Host github.com
    IdentityFile ~/.ssh/{yourKey}
```

## Storybook

Run server

```
yarn run build:evo-ui-kit
yarn run storybook
```

Build

```
yarn run build:evo-ui-kit
yarn run build:storybook
```

## Development

### Build library

Run `yarn run build:evo-ui-kit` to build the ui kit. The build artifacts will be stored in the `dist/` directory.

### Add dependencies

1. Install package as devDependency at root project folder
1. Add package to projects/evo-ui-kit/package.json to peerDependencies
1. Add package to projects/evo-ui-kit/package.json to dependencies
1. Add package to projects/evo-ui-kit/ng-package.json to whitelistedNonPeerDependencies
1. Add package to projects/evo-ui-kit/ng-package.prod.json to whitelistedNonPeerDependencies

### Publish changes

```
git add -f dist
git commit -m 'commit message'
git push
git subtree push --prefix dist/evo-ui-kit origin deploy
```

### Build sample web app

Build ui kit library and install styles. Run `yarn build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

### Development server

Build ui kit library and install styles. Run `yarn start` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

### Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

### Code scaffolding for library

Run `ng generate component --project evo-ui-kit component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module --project evo-ui-kit`.

### Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

### Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

To get more help on the libraries go check out the [Angular CLI WIKI](https://github.com/angular/angular-cli/wiki/stories-create-library).
