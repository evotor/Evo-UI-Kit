---
paths:
  - "**/Makefile"
---
Цель `Makefile`, на которую пайплайн вешает ногу гейта, проверяй автономным запуском в свежем worktree - без `dist` и без `node_modules` основного чекаута: нога зовёт цель в одиночку, а не через `check`.

Источник: требование ревьюера.
Причина: комментарий про симлинк `node_modules` в `Makefile`; CI собирает перед тестами (`npm run build && npm run test:ci`).

<!-- agent-rule id=2055f48c7fea origin=review -->
