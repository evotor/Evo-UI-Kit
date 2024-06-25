# Миграция

- [С версии 7.x до 8.0.0](#from-7x-to-800)

## <a name="from-7x-to-800"></a> С версии 7.x до 8.0.0

Добавлена поддержка `Angular` v17.

### Стили

Удалены scss переменные:

```scss
// Удалено → Замена
$color-dark → $color-text
$color-background-dark → $color-secondary
$color-secondary-2 → $color-icon-dark
$color-text-subscription → $color-caption-text
$color-background-50 → $color-background-grey-light
$color-grey → $color-background-grey
```

Удалены миксины:

```scss
// Удалено
evo-input-valid
title

// Удалено → Замена
h1 → evo-text-header(h1)
h2 → evo-text-header(h2)
h3 → evo-text-header(h3)
h4 → evo-text-header(h4)
input → evo-input(normal, default)
evo-control-states → evo-input-states()
```

### Компоненты

Все компоненты стали standalone.

Удалены:

`evo-plus-minus`
`evo-loader`
`evo-alert`
`evo-banner`
`evo-select`
`evo-switcher`
`evo-radio-group`

`evo-segmented-bar` → `evo-chip`

`evo-button` → `evoButton`

`evo-submenu` → `evo-tabs`

Удален параметр `EvoIconButtonComponent.theme` вместе с темой rectangle, замена: `EvoNavigationButtonComponent`

Изменен параметр `EvoIconButtonComponent.color`

### Модули

#### EvoIconModule

- Удален модуль `EvoIconModule`, теперь компонент `EvoIconComponent` - `standalone`
- Изменено хранение иконок. Теперь иконки хранятся в `.svg` файлах, где часть до `.svg` равна значению в `shape`. Пр. `law.svg` → `<evo-icon shape="law" />`
- Изменена регистрация локальных иконок (тех, которых нет в ui-kit):
  1. Теперь они **_должны_** храниться в папке `assets/icons` в формате _shape-name_.svg (Пр. `/assets/icons/closed-eye.svg`)
  2. Чтобы добавить возможность использования иконок, которых нет в ui-kit, нужно в провайдеры `AppModule` (или в `bootstrapApplication`) добавить `evoLocalAssetsPathProvider('/assets')`
  3. После этого все иконки в `/assets/icons` будут доступны так, будто они есть в ui-kit:`<evo-icon shape="closed-eye" />`

Доступ к иконкам ui-kit:

По умолчанию ожидается, что `assets` ui-kit-а будут подключены в angular.json так:

```json
"assets": [
  ...
  {
    "glob": "**/*",
    "input": "./node_modules/@evotor-dev/ui-kit/assets/",
    "output": "./assets/ui-kit/"
  }
  ...
]

```

Если в `angular.json` вашего проекта значение `output` отличается, например:

```json
"assets": [
  ...
  {
    "glob": "**/*",
    "input": "node_modules/@evotor-dev/ui-kit/assets/",
    "output": "/assets/foo/bar/ui-kit/"
  }
  ...
],
```

то нужно в провайдеры `AppModule` (или в `bootstrapApplication`) добавить `evoAssetsPathProvider('/assets/foo/bar/ui-kit')`
