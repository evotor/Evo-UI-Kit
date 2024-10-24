# @evotor-dev/ui-kit

## Storybook

https://evotor.github.io/Evo-UI-Kit/

## Installation

To install this package run following command:

```
npm i @evotor-dev/ui-kit
```

Add ui-kit styles to angular.json

```json
"styles": [
    ...
    "node_modules/@evotor-dev/ui-kit/styles/main.scss",
    ...
],
```

Add ui-kit assets to angular.json

```json
"assets": [
    ...
    {
        "glob": "**/*",
        "input": "./node_modules/@evotor-dev/ui-kit/assets/",
        "output": "assets/ui-kit/" // if you use a different output path, register it using evoAssetsPathProvider
    }
    ...
]
```

### Troubleshooting

If you have password on your ssh key, [add it to ssh-agent](https://help.github.com/articles/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent/#adding-your-ssh-key-to-the-ssh-agent).

If you have renamed your ssh key, add it to ssh-config.

```
Host github.com
    IdentityFile ~/.ssh/{yourKey}
```

## Development

### Install dependencies

`npm ci`

### Development server

`npm run storybook`

### Build library

Run `npm run build` to build the ui kit. The build artifacts will be stored in the `dist/` directory.

### Build Storybook

`npm run build:storybook`

### Add dependencies

1. Install package as devDependency at root project folder
1. Add package to projects/evo-ui-kit/package.json to peerDependencies
1. Add package to projects/evo-ui-kit/package.json to dependencies
1. Add package to projects/evo-ui-kit/ng-package.json to allowedNonPeerDependencies
1. Add package to projects/evo-ui-kit/ng-package.prod.json to allowedNonPeerDependencies

### Running unit tests

Run `npm run test:local`.
