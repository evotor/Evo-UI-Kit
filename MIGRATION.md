# Миграция

- [Раскладка evo-table гейтится по вьюпорту (20.0.0)](#evo-table-viewport-gate)
- [Мобильная подпись строки evo-table (20.0.0)](#evo-table-mobile-label)
- [Рефакторинг evo-table (8.25+)](#evo-table-refactor)
- [С версии 7.x до 8.0.0](#from-7x-to-800)

## <a name="evo-table-viewport-gate"></a> Раскладка evo-table гейтится по вьюпорту (20.0.0)

**BREAKING CHANGE.**
Шапка таблицы и подписи строк больше не скрываются стилями - они не рендерятся в неподходящей раскладке.
На десктопе (вьюпорт от `768px`) в DOM нет ни одной подписи строки `.evo-table__label`, в мобильной раскладке нет строки шапки `.evo-table__row_head`.

Раньше обе части всегда были в DOM, а лишняя пряталась через `display: none` утилитами `.mobile-show` / `.mobile-hide`.
Скрытый узел стоит столько же, сколько видимый: он живёт в DOM и проверяется на каждом проходе change detection.
На таблице в 100 строк это тысячи узлов, которые никто никогда не видит, - основной источник фризов больших таблиц.

Порог раскладки - `CSS_BREAKPOINTS.tablet` (`768px`), тот же, что у `@include media-tablet` в стилях.
Таблица отслеживает его сама (`MOBILE_VIEW` поверх `BreakpointObserver`), подключать провайдер в приложении не нужно.

Что делать при миграции:

- Если вы не переопределяли видимость этих частей и не полагались на порядок подсветки строк - менять в своём коде ничего не нужно, но сама таблица в двух местах ведёт себя иначе (оба пункта ниже - про поведение по умолчанию, а не про ваши правки).
- Чередующаяся подсветка строк (зебра) теперь считается от строк данных, а не от позиции элемента в контейнере.
  Раньше подсветку давало правило `nth-child(2n)`, которое считало и строку шапки, поэтому серыми выходили строки данных 0, 2, 4 - но только пока шапка была в DOM.
  После гейта по вьюпорту шапки нет в мобильной раскладке, а при `showHeader="false"` её нет вообще, и чередование сдвинулось бы на строку.
  Теперь строка данных получает класс `.evo-table__row_stripe` по своему индексу: серыми всегда идут строки 0, 2, 4 - одинаково на десктопе, на мобильном и при выключенной шапке.
  Если вы стилизовали зебру через `.evo-table__row:nth-child(2n)`, переезжайте на `.evo-table__row_stripe`.
  Заметное отличие ровно одно: при `showHeader="false"` подсветка раньше начиналась со второй строки данных, теперь - с первой.
- Печать таблицы опирается на фактически отрисованную раскладку, а не на ширину листа.
  Браузер считает медиазапросы при печати по размеру страницы (A4 и Letter с полями - меньше порога `768px`), а раскладку выбирает JS по ширине экрана.
  Чтобы печать с десктопа не уходила на бумагу мобильным столбиком без названий колонок, компонент помечает хост классом `.evo-table_desktop-view` и в `@media print` возвращает табличную раскладку с видимой шапкой.
  Печать с мобильного устройства не изменилась: там в DOM подписи строк, и на бумагу идёт мобильная раскладка.
  Если у вас есть собственные стили печати для таблицы, сверьтесь с ними - раскладка на бумаге теперь совпадает с экранной.
- Если ваши стили показывали `.evo-table__label` на десктопе или `.evo-table__row_head` на мобильном (переопределяя `.mobile-show` / `.mobile-hide`), эти правила перестанут работать: узла больше нет.
  Кастомная разметка подписи задаётся шаблоном `#mobileLabel` (см. ниже), а не CSS.
- Тесты, которые ищут подписи строк или шапку, теперь зависят от вьюпорта.
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

## <a name="evo-table-refactor"></a> Рефакторинг evo-table (8.25+)

### EvoTableComponent

- Компонент переведён на `ChangeDetection.OnPush`. Если вы мутируете элементы `data` на месте и дёргаете
  `detectChanges()` родителя — таблица больше не перерисуется сама: передавайте новый массив в `[data]`
  (или новые ссылки элементов + `rowTrackBy`).
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
