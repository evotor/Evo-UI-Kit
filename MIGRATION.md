# Миграция

- [Медиа-брейкпоинты сведены к 4 тирам (20.0.0)](#media-breakpoints-4-tiers)
- [Подписи строк evo-table гейтятся по вьюпорту (20.0.0)](#evo-table-viewport-gate)
- [Мобильная подпись строки evo-table (20.0.0)](#evo-table-mobile-label)
- [Ячейка evo-table обновляется только по смене ссылок (20.0.0)](#evo-table-cell-reactivity)
- [Рефакторинг evo-table (8.25+)](#evo-table-refactor)
- [С версии 7.x до 8.0.0](#from-7x-to-800)

## <a name="media-breakpoints-4-tiers"></a> Медиа-брейкпоинты сведены к 4 тирам (20.0.0)

**BREAKING CHANGE.**
Набор медиа-брейкпоинтов сокращён с 6 тиров до 4, а значения приведены к эталону evo-market.

Было (6 тиров): `mobile 500 / tablet 768 / desktop-s 992 / desktop-m 1200 / desktop-l 1680 / desktop-xl 2500`.
Стало (4 тира): `mobile 360 / tablet 768 / desktop-s 1280 / desktop-m 1536`.

Изменения затрагивают оба публичных контракта пакета - SCSS (`@evotor-dev/ui-kit/styles/...`) и TS (`CSS_BREAKPOINTS`):

- Удалены SCSS-миксины `media-desktop-l`, `media-desktop-xl` и переменные `$media-desktop-l`, `$media-desktop-xl`.
- Удалены ключи `desktopL`, `desktopXL` из `CSS_BREAKPOINTS`.
- Сдвинуты значения: `$media-mobile` 500→360, `$media-desktop-s` 992→1280, `$media-desktop-m` 1200→1536. `$media-tablet` не изменился (768).

Внутри самого ui-kit `$media-mobile` раньше служил границей схлопывания форм (`evo-form`, `evo-note`).
Теперь эти компоненты используют миксин `@include media-mobile` (граница `< 768`), а не сырой `$media-mobile`, - вёрстка форм на узких экранах схлопывается по единой мобильной границе.

Что делать при миграции:

- Если вы использовали миксины `media-desktop-l` / `media-desktop-xl` или ключи `CSS_BREAKPOINTS.desktopL` / `desktopXL` - перенесите логику на `media-desktop-m` (1536) или соберите собственный медиазапрос.
- Если вы завязаны на конкретные px значений `desktop-s` / `desktop-m` / `mobile` - перепроверьте вёрстку: пороги сдвинулись (см. выше).
- `tablet` (768) стабилен - код, завязанный только на него, менять не нужно.

## <a name="evo-table-viewport-gate"></a> Подписи строк evo-table гейтятся по вьюпорту (20.0.0)

**BREAKING CHANGE.**
Подписи строк в мобильной раскладке (`.evo-table__label`) больше не скрываются стилями - на десктопе они не рендерятся вовсе.
На десктопе (вьюпорт от `768px`) в DOM нет ни одной подписи строки `.evo-table__label`.

Раньше подписи всегда были в DOM, а на десктопе прятались через `display: none` утилитой `.mobile-show`.
Скрытый узел стоит столько же, сколько видимый: он живёт в DOM и проверяется на каждом проходе change detection.
На таблице в 100 строк это тысячи узлов, которые на десктопе никто не видит, - основной источник фризов больших таблиц.

Шапка таблицы (`.evo-table__row_head`) не изменилась: она по-прежнему остаётся в DOM на обеих раскладках и на мобильном прячется утилитой `.mobile-hide`.
Это сознательно: узлов у шапки немного, а её присутствие в DOM держит стабильными зебру (`nth-child`) и печать (см. ниже).

Порог раскладки - `CSS_BREAKPOINTS.tablet` (`768px`), тот же, что у `@include media-tablet` в стилях.
Таблица отслеживает его сама (`MOBILE_VIEW` поверх `BreakpointObserver`), подключать провайдер в приложении не нужно.

Что делать при миграции:

- Если вы не переопределяли видимость подписей строк - в своём коде менять ничего не нужно.
- Печать таблицы опирается на фактически отрисованную раскладку, а не на ширину листа.
  Браузер считает медиазапросы при печати по размеру страницы (A4 и Letter с полями - меньше порога `768px`), а раскладку выбирает JS по ширине экрана.
  Поскольку подписей строк на десктопе больше нет в DOM, без этого печать с десктопа ушла бы на бумагу мобильным столбиком без названий колонок.
  Чтобы этого не было, компонент помечает хост классом `.evo-table_desktop-view` и в `@media print` возвращает табличную раскладку с видимой шапкой.
  Печать с мобильного устройства не изменилась: там в DOM подписи строк, и на бумагу идёт мобильная раскладка.
  Если у вас есть собственные стили печати для таблицы, сверьтесь с ними - раскладка на бумаге теперь совпадает с экранной.
- Если ваши стили показывали `.evo-table__label` на десктопе (переопределяя `.mobile-show`), эти правила перестанут работать: узла больше нет.
  Кастомная разметка подписи задаётся шаблоном `#mobileLabel` (см. ниже), а не CSS.
- Тесты, которые ищут подписи строк, теперь зависят от вьюпорта.
  В юнит-тестах подменяйте стрим раскладки, чтобы не зависеть от размера окна раннера:

```ts
import {MOBILE_VIEW} from '@evotor-dev/ui-kit';

TestBed.overrideComponent(EvoTableComponent, {
    set: {providers: [{provide: MOBILE_VIEW, useValue: of(true)}]},
});
```

- При server-side rendering раскладка на сервере считается десктопной (вьюпорт неизвестен): на мобильном устройстве подписи строк появятся после гидрации.

## <a name="evo-table-mobile-label"></a> Мобильная подпись строки evo-table (20.0.0)

**BREAKING CHANGE.**
Подпись строки в мобильной раскладке (`.evo-table__label`) больше не проецирует шаблон колонки `#header`.
По умолчанию подпись теперь рендерит только текст `label`.

Раньше в каждую data-ячейку для мобильной подписи инстанцировался тот же `#header`-шаблон, что и в шапке, со всеми контролами внутри.
Гейт по вьюпорту (см. раздел выше) убрал эти узлы с десктопа целиком, но в мобильной раскладке подписи живые: на 100 строк это сотни контролов в DOM и в change detection, причём на слабом мобильном устройстве они стоят дороже, чем тот же объём на десктопе.
Отдельно от перфа: контрол сортировки из шапки в подписи каждой строки бессмыслен - подпись называет колонку, а не сортирует таблицу.

Что делать при миграции:

- Если вам достаточно текста `label` в мобильной подписи - ничего делать не нужно, это новое поведение по умолчанию.
- Если в мобильной подписи нужна кастомная разметка - задайте отдельный шаблон `#mobileLabel` в колонке.
  Он получает тот же контекст `{ label }`, что и `#header`:

```html
<evo-table-column prop="bank" label="Банк">
    <ng-template #mobileLabel let-label="label">
        <b>{{ label }}:</b>
    </ng-template>
</evo-table-column>
```

## <a name="evo-table-cell-reactivity"></a> Ячейка evo-table обновляется только по смене ссылок (20.0.0)

**BREAKING CHANGE.**
Ячейка данных стала отдельным `OnPush`-подкомпонентом и считает своё значение только при смене ссылки одного из входов (`item`, `column`, `row`, `col`).
Раньше значение вычислялось в биндинге вью самой таблицы и переоценивалось на каждом проходе change detection.

Ради этого всё и делалось: именно здесь лежит выигрыш `O(строк × столбцов)` - неизменившиеся ячейки больше не переоцениваются при каждом клике внутри таблицы.
Плата - таблица теперь трактует строки строго иммутабельно.

Что перестало работать (ячейка молча покажет старое значение):

- **Мутация элемента `data` на месте.**
  Новый массив с теми же ссылками элементов (`[...data]`) ячейку не обновит: при трекинге по индексу (по умолчанию) вход `item` получит ту же ссылку.
  Нужна новая ссылка самого элемента: `data.map((item) => ({...item}))` для изменившихся строк.
- **Подмена `[formatter]` или `[prop]` на живом инстансе `evo-table-column`.**
  `column` - стабильная ссылка на компонент колонки, мутация его полей change detection не запускает.
  Меняйте набор данных новыми ссылками элементов либо пересоздавайте колонку (например, гейтом `@if` вокруг `<evo-table-column>`).
- **Чтение внешнего состояния прямо в шаблоне `#content`, мимо контекста.**
  `<ng-template #content let-item="item">{{ item.name }}{{ someExternalFlag }}</ng-template>` не переоценится, пока не сменится ссылка входа ячейки.
  Всё, что должно попадать в ячейку, прогоняйте через `formatter` и читайте из контекста `value`.

Реактивными остались входы строки `rowClasses` и `rowTitle` в функциональной форме: они вычисляются на каждом проходе (стоимость `O(строк)`), поэтому подсветка выбранной строки по клику работает без смены ссылок.

```ts
// было: достаточно новой ссылки массива
this.data = [...this.data];

// стало: нужны новые ссылки изменившихся строк
this.data = this.data.map((item) => (item.id === changedId ? {...item, name: newName} : item));
```

## <a name="evo-table-refactor"></a> Рефакторинг evo-table (8.25+)

### EvoTableComponent

- Компонент переведён на `ChangeDetection.OnPush`. Если вы мутируете элементы `data` на месте и дёргаете
  `detectChanges()` родителя — таблица больше не перерисуется сама: передавайте новые ссылки изменившихся
  элементов в `[data]` (см. [раздел про реактивность ячейки](#evo-table-cell-reactivity) — с 20.0.0 нового
  массива с прежними ссылками элементов недостаточно).
- Удалён вход `stripe` — он ничего не делал с 2018 года (чётные строки и так подкрашиваются стилями).
  Статическая запись `stripe="true"` в шаблонах продолжит компилироваться (станет обычным html-атрибутом),
  биндинг `[stripe]="..."` перестанет.
- Удалены публичные `states` и `getRowClasses()`; признак кликабельности строк — геттер `isRowClickable`.
- `EvoTableRowClickEvent` стал интерфейсом (нельзя `new`) с дженериком `EvoTableRowClickEvent<T>`;
  поле `event` теперь `MouseEvent | KeyboardEvent` (строки активируются с клавиатуры Enter/Space).
- Клик по интерактивным элементам внутри ячейки (`a, button, input, select, textarea, label`)
  больше не эмитит `rowClick` — ручные `$event.stopPropagation()` в ячейках можно убирать.
- Контент-шаблон ячейки получает в контексте готовое `value` (результат `formatter`) —
  дублировать вызов форматтера в шаблоне приложения больше не нужно:
  `<ng-template #content let-value="value">`.

### EvoTableColumnComponent

- `header`/`content` типизированы как `TemplateRef<EvoTableColumnHeaderContext>` /
  `TemplateRef<EvoTableColumnCellContext>` (новые экспортируемые интерфейсы).

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
