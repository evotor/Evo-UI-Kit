# @evotor-dev/ui-kit

## Storybook

https://evotor.github.io/Evo-UI-Kit/

## Installation

To install this package run following command:

```
npm i @evotor-dev/ui-kit
```

Add to styles in angular.json

```
"styles": [
    ...
    "node_modules/@evotor-dev/ui-kit/styles/main.scss",
    ...
],
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
npm run build:evo-ui-kit
npm run storybook
```

Build

```
npm run build:evo-ui-kit
npm run build:storybook
```

## Development

### Build library

Run `npm run build:evo-ui-kit` to build the ui kit. The build artifacts will be stored in the `dist/` directory.

### Add dependencies

1. Install package as devDependency at root project folder
1. Add package to projects/evo-ui-kit/package.json to peerDependencies
1. Add package to projects/evo-ui-kit/package.json to dependencies
1. Add package to projects/evo-ui-kit/ng-package.json to allowedNonPeerDependencies
1. Add package to projects/evo-ui-kit/ng-package.prod.json to allowedNonPeerDependencies

### Development server

Build ui kit library and install styles. Run `npm start` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

### Running unit tests

Run `npm run test:local`.
