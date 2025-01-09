# Sushi API

REST API бэкенд для суши-магазина на NestJS и PostgreSQL.

## Требования

- Docker
- Docker Compose

## Быстрый старт

1. Клонируйте репозиторий:
```bash
git clone https://github.com/malinatrash/sushi
cd sushi
```

2. Запустите приложение:
```bash
docker-compose up --build
```

API будет доступен по адресу `http://localhost:8080`

## API Эндпоинты

- `GET /products` - Получить список всех товаров
- `GET /products/:id` - Получить товар по ID
- `POST /products` - Создать новый товар
- `DELETE /products/:id` - Удалить товар

## Документация API

Swagger документация доступна по адресу `http://localhost:3000/api`

## База данных

PostgreSQL база данных доступна по следующим параметрам:
- Хост: localhost
- Порт: 5432
- База данных: sushi_db
- Пользователь: postgres
- Пароль: postgres

## Разработка

Остановить приложение:
```bash
docker-compose down
```

Пересобрать и запустить:
```bash
docker-compose up --build
```

Просмотр логов:
```bash
docker-compose logs -f
```
