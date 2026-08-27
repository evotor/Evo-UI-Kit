# Миграция

- [Стили панели evo-autocomplete доезжают при appendTo (8.28+)](#evo-autocomplete-append-to-panel)
- [С версии 7.x до 8.0.0](#from-7x-to-800)

## <a name="evo-autocomplete-append-to-panel"></a> Стили панели evo-autocomplete доезжают при appendTo (8.28+)

У `<evo-autocomplete>` с заданным `appendTo` выпадающий список больше не остаётся без стилей кита.
Раньше `ng-select` физически переносил панель в контейнер `appendTo`, она переставала быть потомком `<evo-autocomplete>`, и ни одно правило кита на неё не попадало: опции, группы, скроллбар, отступы и типографика оставались дефолтными от `ng-select`, а шапка и подвал теряли внутренние отступы и скругления.

Теперь панель адресуется публичным классом `evo-autocomplete-panel`.
`ng-select` сам копирует его на вынесенную панель; когда `appendTo` не задан, класс стоит на внутреннем `<ng-select>` и работает как класс предка.
Оба режима покрыты одним набором правил, поэтому панель выглядит одинаково с `appendTo` и без него.

Что делать при миграции:

- Удалите локальные обходы вида `::ng-deep .ng-dropdown-panel { ... }`, которыми вы дотягивались до вынесенной панели.
  Кит их не отменяет: они по-прежнему накладываются поверх его правил и теперь конфликтуют с ними, а не дополняют.
- Переменные вынесенной панели задаются на ней самой, а не на `<evo-autocomplete>`.
  Наследование через DOM после переноса не работает: панель лежит в контейнере `appendTo`, а не внутри компонента.
  Вынесенная панель объявляет `--evo-*` сама, поэтому переопределение должно быть не слабее её собственного селектора `.evo-autocomplete-panel.ng-dropdown-panel` - например, отобрано контейнером:

```scss
.drawer .evo-autocomplete-panel.ng-dropdown-panel {
    --evo-dropdown-max-height: 480px;
}
```

- Требования к контейнеру `appendTo`:
  - он должен быть позиционированным (`position: relative` или другое значение, кроме `static`) - `ng-select` ставит панели координаты относительно ближайшего позиционированного предка;
  - он не должен обрезать содержимое (`overflow: hidden` спрячет панель);
  - `transform`, `filter`, `opacity` и `will-change` на контейнере создают отдельный контекст наложения, и `z-index: 3001` у панели (на единицу выше `evo-sidebar`) перестаёт что-либо значить относительно остальной страницы.
- `document.querySelector` берёт **первое** совпадение селектора: если подходящих контейнеров на странице несколько, панель уедет не в тот.
  Селектор `appendTo` должен указывать ровно на один элемент.
- Класс `evo-autocomplete-panel` попадает и на сам `<ng-select>` - это часть механизма.
  Если вы пишете свои правила по этому классу, парьте его с `.ng-dropdown-panel` или используйте как класс предка, иначе заденете и контрол.
- `[ngClass]` на внутреннем `<ng-select>` вытеснил бы этот класс целиком, поэтому кит его не использует.

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

#### EvoModalModule

Для использования `EvoModalService` нужно в провайдеры `AppModule` (или в `bootstrapApplication`) добавить `provideModal()`

#### EvoSidebarModule

Модуль удален, ceрвис стал singleton, провайдинг переписан так, что теперь вместо импорта `EvoSidebarModule` в standalone компоненты / фича модули нужно один раз,
глобально в провайдеры `AppModule` (или в `bootstrapApplication`) добавить `provideSidebar()`. Эта функция принимает конфиг, с тем же интерфейсом
что был у `forRoot` модуля.
