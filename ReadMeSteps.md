# erp

Step 1:
Инсталиране на nodejs

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
   Парола: admin (зададена при инсталацията)
   Порт: 5432 (по подразбиране)

Step 2:
Инсталиране и конфигуриране на pgAdmin
https://www.pgadmin.org/download/

1. Изтеглете и инсталирайте pgAdmin
2. Стартирайте нов сървър от главното меню Object /фигура 2.1
   Object/Register/Server
3. Настройте сървъра: General/Name: PostgreSQL / фигура: 2,2
   Connection: Host name/address: localhost
   Port: 5432
   Username: postgres
4. Създайте базата данни:
   Object/Create/Database
   General/Database: inventorymanagement

Step 3:
Захранване на базата данни

VSCode отврете нов терминнал:

Terminal/New Terminal
инсталиране на всички пакети
npm install

Връзка с базата данни
Create env file under server/.env

PORT = 8000
DATABASE_URL="postgresql://postgres:admin@localhost:5432/inventorymanagement?schema=public"

Стартиране на скрипта за базата данни
erp>

> cd server
> npx prisma generate
> npx prisma migrate dev –name init
> // Your databese is now in sync with your schema
> npm run seed

Fronternd :
Create .env.local file under client/.env.local
add: NEXT_PUBLIC_API_BASE_URL = "http://localhost:8000"

инсталиране на всички пакети
erp>
cd client
npm install
cd ..

erp> npm run start
