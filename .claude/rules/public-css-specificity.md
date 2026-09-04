---
paths:
  - "projects/evo-ui-kit/src/lib/**/*.scss"
  - "**/MIGRATION.md"
---
Меняя специфичность публичных правил кита, проверяй, не сравнялись ли они по весу с типовым `::ng-deep`-обходом приложений, и пиши в `MIGRATION.md` не "обход по-прежнему выигрывает", а требование его снять.

Источник: требование ревьюера.
Причина: docs/decisions/architecture/portal-styles-via-marker-class.md

<!-- agent-rule id=b24918885823 origin=review -->
