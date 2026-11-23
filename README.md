# Racing Taxi

SPA на React с навигационным меню для сайта гоночного такси. Переходы через React Router без перезагрузки, активный пункт меню подсвечивается.

## Стек

- React 18
- React Router 6
- Vite 5

## Запуск

```bash
yarn install
yarn dev
```

Откроется на http://localhost:5173

## Скрипты

- `yarn dev` — dev-сервер
- `yarn build` — сборка в `dist/`
- `yarn preview` — просмотр сборки

## Структура

```
src/
├── main.jsx              # BrowserRouter + App
├── App.jsx               # Routes
├── index.css             # стили
├── components/
│   └── Menu.jsx          # меню на NavLink
└── pages/
    ├── Home.jsx          # /
    ├── Drift.jsx         # /drift
    ├── TimeAttack.jsx    # /timeattack
    ├── Forza.jsx         # /forza
    └── NotFound.jsx      # 404
```

## Маршруты

| URL | Страница |
|---|---|
| `/` | Главная |
| `/drift` | Дрифт-такси |
| `/timeattack` | Time Attack |
| `/forza` | Forza Karting |
| `*` | 404 |

