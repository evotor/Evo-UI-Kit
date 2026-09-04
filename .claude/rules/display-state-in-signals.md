---
paths:
  - "projects/evo-ui-kit/src/lib/**/*.ts"
---
Отображаемое состояние держи в сигнале компонента: не выводи разметку по значению, прочитанному из DOM (ссылка на элемент и его `value`), и не рассчитывай на пометку вью грязным из хука жизненного цикла. Поддерево со стратегией OnPush не увидит первый рендер такого значения, а состояние, которое меняют колбэки сторонней библиотеки вне зоны Angular, не вызовет перерисовки вовсе.

Источник: требования ревьюеров.
Причина: `displayValue` в `projects/evo-ui-kit/src/lib/components/evo-datepicker/evo-datepicker.component.ts`.

<!-- agent-rule id=01d0041acae7 origin=review -->
<!-- agent-rule id=4367fe5be145 origin=review -->
