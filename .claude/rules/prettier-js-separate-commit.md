---
paths:
  - "**/*.js"
---
Прогон prettier по `.js` выноси отдельным коммитом: pre-commit хук репозитория переформатирует staged `.js` целиком и топит содержательный дифф в смене отступов.

Источник: требование ревьюера.
Причина: `.lintstagedrc.js` и `.husky/pre-commit`.

<!-- agent-rule id=bdddfcc059a4 origin=review -->
