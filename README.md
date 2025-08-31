# Личный проект веб-сервиса для общения с AI-агентами "MeetAI"
Многостраничный сервис для общения с AI-агентами с возможностью их настройки. После завершения встречи доступна ее запись, транскрипция и возможность задать вопрос по встрече у AI чат-бота.

## Как запустить
1. Клонировать репозиторий ``https://github.com/Sanwed/meetai.git``.
2. ``npm run dev`` – запуск проекта для локальной разработки.
3. ``npm run build`` – сборка проекта.
4. ``npm run dev:webhook`` – для работы вебхука openaiAPI используется сервис ngrok, запускается параллельно с dev-сервером.
5. ``npx inngest-cli@latest dev`` – необходимо при работе над логикой обработки записи встречи с помощью AI

## Особенности и функцинал
- Основные страницы: Главная, Мои агенты, Мои встречи, Детальная страница агента/встречи, Видео-звонок, Вход/Регистрация.
- Поддерживает регистрацию/авторизацию пользователя, в том числе с помощью социальных сетей (Google, GitHub).
- Создание агента с именем, аватором и инструкциями, которые позволяют настроить его поведение на встрече.
- Создание встречи с возможностью выбора ранее созданных AI-агентов.
- На детальной странице агента можно узнать все его параметры, а также редактировать или удалить.
- На детальной странице созданной встречи есть возможность начать встречу, редактировать ее название и удалить.
- На разводящей странице агентов можно увидеть список всех созданных агентов, увидеть основную информацию. Также можно использовать фильтры и пагинацию для поиска нужного агента.
- На разводящей странице встреч можно увидеть список всех созданных встреч, увидеть основную информацию. Также можно использовать фильтры и пагинацию для поиска нужной встречи.
- После запуска встречи открывается интерфейс звонка, куда подключается выбранный AI-агент, с которым можно вести беседу на любые темы.
- После окончания встречи будет запущен ее анализ, и через некоторое время на детальной странице встречи появятся вкладки с подробной информацией: Общее заключение встречи и тайм-коды, Транскрипция в формате чата, Запись встречи, Чат с AI для обсуждения вопросов по встрече.
- Доступен глобальный поиск созданных встреч и агентов в верхней строке веб-сайта.
- Доступны различные планы подписки: Бесплатный, с ограничением по количеству агентов и встреч, Месячный/Годовой/Корпоративный, убирающие ограничения по количеству, но по функционалу полностью идентичны.

## Технологии проекта
- Next.js
- React
- ShadcnUI
- Tanstack Query
- Neon DB
- Better Auth
- TRPC
- OpenAI API
- Inngest
- Polar
- Nuqs
- React Hook Form
- Zod Schema
- Stream.io
- Drizzle ORM
- TailwindCSS

## Скриншоты
<img width="1470" height="874" alt="Screenshot 2025-08-31 at 23 54 32" src="https://github.com/user-attachments/assets/4586ae25-cc17-4c70-bbe9-f655b8844b4a" />
<img width="1470" height="874" alt="Screenshot 2025-08-31 at 23 54 46" src="https://github.com/user-attachments/assets/9af40e82-4fce-47d5-a689-fd5a4f8c67ab" />
<img width="1470" height="874" alt="Screenshot 2025-08-31 at 23 54 59" src="https://github.com/user-attachments/assets/ab1e5e14-1964-45e1-b99d-acd1974fba23" />
<img width="1470" height="874" alt="Screenshot 2025-08-31 at 23 55 14" src="https://github.com/user-attachments/assets/d8f13315-b236-42c0-a769-c59448cd3ac7" />
<img width="1470" height="874" alt="Screenshot 2025-08-31 at 23 55 52" src="https://github.com/user-attachments/assets/67db10e7-c1d3-41a0-98f4-f97b49d5ecff" />
<img width="1470" height="874" alt="Screenshot 2025-08-31 at 23 56 31" src="https://github.com/user-attachments/assets/64afadaf-0494-4a7e-9b5e-726738d97922" />
<img width="1470" height="874" alt="Screenshot 2025-08-31 at 23 56 43" src="https://github.com/user-attachments/assets/a511a1ba-9af4-49a9-b5a7-8473f46ab57c" />
<img width="1470" height="874" alt="Screenshot 2025-08-31 at 23 56 54" src="https://github.com/user-attachments/assets/977a1d69-96e4-47bf-bac6-27d776809a0a" />
<img width="1470" height="874" alt="Screenshot 2025-08-31 at 23 57 19" src="https://github.com/user-attachments/assets/b1ec88fd-8d11-4b56-b388-8154ae9f001b" />
<img width="1470" height="874" alt="Screenshot 2025-08-31 at 23 57 26" src="https://github.com/user-attachments/assets/e1ce76bb-8e50-4078-840d-57c289143307" />
<img width="1470" height="874" alt="Screenshot 2025-08-31 at 23 57 44" src="https://github.com/user-attachments/assets/d0e0c58e-5517-4976-ad94-5a470479f4c7" />
<img width="1470" height="874" alt="Screenshot 2025-08-31 at 23 58 09" src="https://github.com/user-attachments/assets/c17bce69-212d-446f-ac19-ed2fb97f44a0" />

