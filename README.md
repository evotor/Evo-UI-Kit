# @evo/ui-kit

## Installation

To install this package run following command:

```
npm i @evo/ui-kit
```

Add to styles in angular.json

```
"styles": [
    ...
    "node_modules/@evo/ui-kit/styles/main.scss",
    ...
],
```

Add fonts from Google Fonts

```
<link href="https://fonts.googleapis.com/css?family=Open+Sans:400,400i,600,600i,700&amp;subset=cyrillic-ext" rel="stylesheet">
<link href="https://fonts.googleapis.com/css?family=Ubuntu:400,400i,500,500i,700&amp;subset=cyrillic,cyrillic-ext" rel="stylesheet">
```

### Package publishing

1. Merge PR to `master`
1. `git checkout master && git pull`
1. `GH_TOKEN=<your_github_token> yarn release`
1. update package version in `./projects/evo-ui-kit/package.json`
1. `git add -p && git commit -m 'chore(evo-ui-kit): version up'`
1. `git push origin`

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
