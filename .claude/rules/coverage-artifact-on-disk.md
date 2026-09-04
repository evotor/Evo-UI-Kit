---
paths:
  - "**/karma.conf.js"
  - "**/angular.json"
---
Изменив конфигурацию покрытия или тестового прогона, подтверждай результат наличием артефакта на диске по фиксированному пути, а не зелёным логом прогона.

Источник: требование ревьюера.
Причина: `coverageReporter` в `projects/evo-ui-kit/karma.conf.js`.

<!-- agent-rule id=9ebaf1381762 origin=review -->
