# Сайт-визитка · Георгий Шипунов

Минималистичный персональный сайт-визитка в стиле Notion. Двуязычный (RU/EN),
светлая/тёмная тема, без зависимостей и сборки — чистый HTML/CSS/JS.

## Структура

```
index.html        — разметка страницы
css/styles.css    — стили, темы, адаптив
js/main.js        — весь контент (RU/EN), переключение языка и темы
assets/
  resume-ru.pdf   — резюме для кнопки «Скачать»
  avatar.jpg      — ваше фото (добавьте сами; пока показывается монограмма «ГШ»)
.nojekyll         — отключает обработку Jekyll на GitHub Pages
```

## Как редактировать

- **Текст и опыт** — всё в `js/main.js`, объект `CONTENT` (две секции: `ru` и `en`).
- **Контакты и ссылки** — массив `CONTACTS` в `js/main.js`.
  ⚠️ Замените заглушки `https://github.com/`, `https://www.linkedin.com/`,
  `https://leetcode.com/` на ваши реальные адреса профилей.
- **Метрики (цифры в шапке достижений)** — объект `METRICS`.
- **Цвета/тема** — CSS-переменные в начале `css/styles.css` (`:root` и
  `:root[data-theme="dark"]`).
- **Фото** — положите файл `assets/avatar.jpg`. Если файла нет, автоматически
  показывается монограмма.

## Локальный просмотр

Просто откройте `index.html` в браузере, либо запустите простой сервер:

```bash
cd "CV site"
python3 -m http.server 8000
# затем откройте http://localhost:8000
```

## Публикация на GitHub Pages

1. Создайте репозиторий на GitHub. Для адреса вида `https://<username>.github.io`
   назовите репозиторий `<username>.github.io`. Иначе сайт будет доступен по
   `https://<username>.github.io/<repo>/`.
2. Из папки проекта:

   ```bash
   cd "CV site"
   git init
   git add .
   git commit -m "Personal CV site"
   git branch -M main
   git remote add origin https://github.com/<username>/<repo>.git
   git push -u origin main
   ```

3. В репозитории: **Settings → Pages → Build and deployment → Source: Deploy from
   a branch**, ветка `main`, папка `/ (root)`. Сохраните.
4. Через минуту сайт будет доступен по адресу из раздела Pages.

Файл `.nojekyll` уже добавлен, чтобы GitHub Pages не пытался обрабатывать сайт
через Jekyll.
