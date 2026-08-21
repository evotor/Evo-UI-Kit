.PHONY: setup lint build test check dev

# Голый `make` не должен переустанавливать зависимости: в worktree node_modules
# обычно симлинк на основной чекаут.
.DEFAULT_GOAL := check

# Тестовая цель поднимает браузер и пишет в общие временные каталоги;
# параллельный make перемешал бы вывод целей.
.NOTPARALLEL:

setup:
	npm ci

lint:
	npm run lint

build:
	npm run build

test:
	npm run test:ci

check: lint build test

dev:
	npm start
