# @evotor-dev/ui-kit

## Storybook

https://evotor.github.io/Evo-UI-Kit/

## Installation

To install this package run following command:

```
npm i @evotor-dev/ui-kit
```

Add ui-kit styles to angular.json

```jsonc
"styles": [
    //...
    "node_modules/@evotor-dev/ui-kit/styles/main.scss",
    //...
],
```

Add ui-kit assets to angular.json

```jsonc
"assets": [
    //...
    {
        "glob": "**/*",
        "input": "./node_modules/@evotor-dev/ui-kit/assets/",
        "output": "/assets/ui-kit/" // if you use a different output path, register it using evoAssetsPathProvider
    },
    // The ui kit uses icons from https://github.com/evotor/evo-icons, so you need to register the icons in angular.json of your project:
    {
        "glob": "**/*",
        "input": "./node_modules/@evotor-dev/evo-icons/dist/monochrome",
        "output": "/assets/ui-kit/icons"
    },
    {
        "glob": "**/*",
        "input": "./node_modules/@evotor-dev/evo-icons/dist/color",
        "output": "/assets/ui-kit/color-icons"
    }
    //...
]
```

### Icons

The icons live in a separate repository [evo-icons](https://github.com/evotor/evo-icons) and the ui-kit refers to them as peer dependencies, so you need to install the icon library in your project: `npm i @evotor-dev/evo-icons`

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

**Note**: evo-icons must be devDependency in order not to be included in the build output. Also, do not include them as assets in the angular.json for build.

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

```

```
