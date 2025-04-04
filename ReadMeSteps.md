# erp

\*\*\* Инсталиране на nodejs

1. Изтеглете Node.js (LTS версия) и го инсталирайте.
   https://nodejs.org/en
2. Проверете дали инсталацията е успешна с командите:
   node -v # Проверка на версията на Node.js
   npm -v # Проверка на версията на npm
   Инсталиране и конфигуриране на PostgreSQL
   1.Изтеглете и инсталирайте PostgreSQL./
   https://www.postgresql.org/
   \*\*Запомнете данните за достъп:
   Потребителско име: postgres
   Парола: (зададена при инсталацията)
   Порт: 5432 (по подразбиране)

\*\*\* Инсталиране и конфигуриране на pgAdmin
https://www.pgadmin.org/download/

1. Изтеглете и инсталирайте pgAdmin
2. Стартирайте нов сървър от главното меню Object /фигура 2.1
   Object/Register/Server
3. Настройте сървъра: General/Name: PostgreSQL / фигура: 2,2
   Connection: Host name/address: localhost
   Port: 5432
   Username: postgres
4. Създайте базата данни:
   Object/Create/Database … фиг.2.4
   General/Database: inventorymanagement фиг.2.5
   Отворете терминала на Visual Studio Code:
   Terminal/ new terminal
   $ > npm run seed

Инсталиране и конфигуриране на pgAdmin

---

install npm all depandancy
npm install

Create env file under server/.env

PORT = 8000
DATABASE_URL="postgresql://postgres:admin@localhost:5432/inventorymanagement?schema=public"

run seed
npm run seed
