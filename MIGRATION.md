# Миграция

- [С версии 7.x до 8.0.0](#from-7x-to-800)

## <a name="from-7x-to-800"></a> С версии 7.x до 8.0.0

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

Удалены:

`evo-plus-minus`
`evo-loader`
`evo-alert`
`evo-banner`
`evo-select`

`evo-button` → `evoButton`

`evo-submenu` → `evo-tabs`

Удален параметр `EvoIconButtonComponent.theme` вместе с темой rectangle, замена `EvoNavigationButtonComponent`

Изменен параметр `EvoIconButtonComponent.color`
