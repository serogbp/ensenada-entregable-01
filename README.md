# Entregable Final

## Preparaciones antes de ejecutar

- Colocar el .env del Backend en la raíz del proyecto
- Colocar el .env de React en la raíz de la carpeta Front_React
- Instalar dependencias del Backend:
  - cd Backend
  - npm i
- Instalar dependencias de React:
  - cd Front_React
  - npm i
- El script SQL se encuentra en la siguiente ruta: `/Backend/Database/tecla_db.sql`

## Credenciales usuarios

- Admin:
  - email: admin@admin.com
  - password: admin
- Resto de usuarios:
  - email: mirar en BBDD o en el script .sql
  - password: tecla

## Propuesta de ejecución del proyecto

- Ejecutar el script sql
- Backend:
  - `cd Backend`
  - `node Backend/app.js`
- React:
  - `cd Front_React`
  - `npm start`

También puedes lanzar ambos a la vez seleccionando "React + Backend" en la sección "Run and Debug".

## Propuesta de ejecución de los test

- `cd Backend`
- `npm run test`

También puedes lanzar los test seleccionando "Backend test" en la sección "Run and Debug".
