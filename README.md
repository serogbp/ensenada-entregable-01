# Cambios en el entregable 02

## Pantalla Login

- Comprobación de credenciales para acceder a la red social (**credenciales: tecla, tecla**)

## Pantalla Perfil de usuario

- Cargar información del localstorage sobre el usuario mediante Javascript modificando el dom

- Funcionalidad simulación de borrar la cuenta del usuario. Abre un modal y si acepta te envía a la pantalla de registro, borrando del localstorage el usuario guardado. Utilización de promesas para simular asincronía de conexión.

## Pantalla Modificar Perfil

- Modificar información del usuario y guardar los cambios en el localstorage para posteriormente mostrarlo en la página de perfil de usuario. Utilización de timeout con promesas para simular asincronía de conexión.

## Pantalla Feed

- Cargar dinámicamente elementos html post mediante el uso de 2 APIs ([randomuser.me](https://randomuser.me/) y una personalizada hecha en [mocki.io](https://mocki.io/))

- Se generan nuevos posts al hacer scroll hasta el final de la página

## Pantalla Lista de amigos

- Cargar la lista de amigos mediante fetch usando la API [randomuser.me](https://randomuser.me/)

- Capacidad de ordenar la lista de diferentes formas
