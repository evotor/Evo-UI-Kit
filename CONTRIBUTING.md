# How to contribute

- [Правила написания кода](#coc)
- [Правила именования коммитов](#commit)
- [Процесс релизов](#release)
- [- Каналы поставки](#release-channels)
- [- Публикация в основную версию](#release-latest)
- [- Публикация изменений старых версий](#release-maintain)
- [- Публикация в beta](#release-beta)

## <a name="coc"></a> Правила написания кода

_Используем `elsint` + `prettier`_.

Необходимо добавить необходимые плагины и применить конфигурацию проекта.

## <a name="commit"></a> Правила именования коммитов

_Используем [формат предлагаемый Angular][commit-message-format]._

## <a name="release"></a> Процесс релизов

### <a name="release-channels"></a> Каналы поставки

Используем несколько каналов поставки, например:

- `@latest` - основная, на текущий момент, версия ui-kit. `npm i @evotor-dev/ui-kit`
- `@beta` - следующая, мажорная версия ui-kit. `npm i @evotor-dev/ui-kit@beta`
- `[0-9].([0-9].)?x` - поддержка старых версий ui-kit. Для 6.7.1: `npm i @evotor-dev/ui-kit@release-6.x`

### <a name="release-latest"></a> Публикация в основную версию

1. От ветки `master` создается новая ветка `fix/*` или `feature/*`;
2. После реализации создается `Pull request` в `master`;
3. После мержа PR запускается [Release action][release-action] на ветке `master`.

### <a name="release-maintain"></a> Публикация изменений старых версий

Если какой-то проект пока не может обновиться до `@latest` версии, но ему нужны изменения - можно создать версию для поддержки неактуальной версии `ui-kit`.

Представим, что основная версия `7.0.0`, а мы используем `6.7.1` и пока не можем обновиться до `7.0.0`.

Чтобы добавить необходимые изменения, нужно:

1. От тега `6.7.1` создать новую ветку с именем `6.x`;
1. Запушить `6.x`;
1. От ветки `6.x` создается новая ветка `fix/*` или `feature/*`;
1. После реализации создается `Pull request` в `6.x`;
1. После мержа PR запускается [Release action][release-action] на ветке `6.x`.

Если изменения, сделанные в ветке поддержки старой версии, нужны в `master`, то нужно:

1. Смержить `6.x` в `master`.

Если изменения, сделанные в `master`, нужны в ветке поддержки старой версии, то нужно:

1. Сделать **_cherry-pick_** из `master` в `6.x`.

#### [Узнать больше][maintain-releases]

### <a name="release-beta"></a> Публикация в beta

1. От ветки `master` создается и пушится новая ветка `beta`;
1. От ветки `beta` создается новая ветка `fix/*` или `feature/*`;
1. Первый коммит **ДОЛЖЕН** иметь описание изменений, ломающих совместимость:

```
feat: update Angular version to 14

BREAKING CHANGE: <---- !!!
```

Так semantic-release поймет, что нужно поднять мажорную версию.

**ВАЖНО:** после `BREAKING CHANGE` **ОБЯЗАТЕЛЬНО** должно быть двоеточие`:`, после которого желательно описывать, что за изменение ломает совместимость.

4. После реализации создается `Pull request` в `beta`;
5. После мержа PR запускается [Release action][release-action] на ветке `beta`.

#### Публикация beta в основной канал

После того, как решили опубликовать `beta` в основной канал, нужно:

1. Выполнить merge ветки `beta` в `master`;
2. Запушить `master`;
3. Убедиться, что [CI workflow][ci-action] на ветке `master` успешно завершено;
4. Запустить [Release action][release-action] на ветке `master`.

#### [Узнать больше][pre-releases]

[commit-message-format]: https://github.com/angular/angular/blob/master/CONTRIBUTING.md#commit
[release-action]: https://github.com/evotor/Evo-UI-Kit/actions/workflows/release.yml
[ci-action]: https://github.com/evotor/Evo-UI-Kit/actions/workflows/ci.yml
[pre-releases]: https://semantic-release.gitbook.io/semantic-release/recipes/release-workflow/pre-releases
[maintain-releases]: https://semantic-release.gitbook.io/semantic-release/recipes/release-workflow/maintenance-releases
