![homebanner](https://github.com/sara-rioseco/DEV007-data-lovers/assets/128411016/a4138e3c-6e74-4f9f-b357-e8c6c1049712)

# Pokedex Database

## Índice

* [1. Definición de producto](#1-definición)
* [2. Historias de usuario](#2-historias-de-usuarios)
* [3. Interfaz](#3-interfaz)
* [4. Test](#4-test)
* [5. Problemas de usabilidad](#5-problemas)
* [6. Organización, planificación y trabajo en equipo](#6-organización)

***

## 1. Definición de producto

**Pokedex Database** es una aplicación web para visualizar, ordenar, filtrar y buscar información acerca de los 251 Pokemones de la primera y segunda generación de Pokemon. La información y estadísticas están basadas en la data recopilada desde el juego PokemonGo. 
PokemonGo es un videojuego de realidad aumentada basado en la localización desarrollado por la empresa Niantic para dispositivos iOS y Android. El juego consiste en buscar y capturar personajes de la saga Pokemon escondidos en ubicaciones del mundo real y luchar con ellos, lo que implica desplazarse físicamente por las calles de la ciudad para progresar.

Los personajes que son llamados pokemones pueden pertenecer a uno o dos tipos de categorías, dependiendo del tipo de ataques que poseen. Por ejemplo, pueden pertenecer a tipos como fuego y roca, o solo fuego, agua, tierra, fantasma, psíquco, entre otros. Los pokemones como mencionamos antes, tienen ciertos ataques rápidos y otros ataques cargados. Además, cada pokemon tiene sus propias estadísticas, fortalezas, debilidades y evoluciones. Basándose en esta información, los jugadores pueden crear estrategias para jugar y lograr mejores resultados.

La idea de la aplicación es que los usuarios puedan buscar esa información y encontrar las estadísticas que necesitan, filtrando, ordenando y viendo los detalles de cada pokemon, de manera clara, sencilla y rápida.

Para esto, creamos distintos prototipos, que podemos ver a continuación.

Prototipo de baja fidelidad:

![Prototipo Baja Fidelidad](https://github.com/sara-rioseco/DEV007-data-lovers/blob/main/src/img/Prototipo%20baja%20fidelidad.jpg?raw=true)

Primer Prototipo de alta fidelidad:

![Primer prototipo de alta fidelidad](https://github.com/sara-rioseco/DEV007-data-lovers/blob/main/src/img/Prototipo%20alta%20fidelidad.png?raw=true)

Prototipo final:

![Prototipo final](https://github.com/sara-rioseco/DEV007-data-lovers/blob/main/src/img/home.png?raw=true)

## 2. Historias de usuario

Los principales usuarios del producto son jóvenes con acceso a internet/smartphone que quieran buscar información acerca de Pokemon. Está pensado tanto para usuarios casuales que pueden ser jugadores de alguno de los videojuegos de Pokemon, o para usuarios más avanzados que quieran ver información más detallada. Para poder identificar a nuestro público objetivo y desarrollar las distintas funcionalidades trabajamos con metodologías ágiles. Esto nos llevó a crear historias de usuario para cada funcionalidad que estos usuarios requerían. Trbajamos con 6 historias de usuario en particular, las que detallamos a continuación:

**Historia de Usuario 1:**
*Yo como usuario que no sabe mucho de pokemon quiero ver una imagen, el nombre y el número de todos los pokemones para conocerlos.*

**Criterios de aceptación:**
- Quiero una vista de grilla.
- Quiero que sea responsive.
- Quiero ver la imagen del Pokemon, su nombre y número.
- No hay ningún tipo de interacción.

**Definición de terminado:**
- Pruebas de usabilidad realizadas con al menos 2 usuarios.
- Todo el código está en la rama principal de nuestro Repositorio en Github.
- Se ha publicado el proyecto en Github Pages.

**Historia de Usuario 2:**
*Yo, como jugador casual de juegos de Pokemon, quiero poder ver el tipo de Pokemon para saber a qué categoría pertenece.*

**Criterios de aceptación:**
- Quiero una vista de grilla.
- Quiero que sea responsive.
- Quiero ver la imagen del Pokemon, su nombre y número.
- Quiero hacer click en la imagen y que me muestre el tipo de Pokemon y otros detalles en un pop-up.
- Quiero poder cerrar ese pop-up y volver a la pantalla principal.

**Definición de terminado:**
- Pruebas de usabilidad realizadas con al menos 2 usuarios.
- Todo el código está en la rama principal de nuestro Repositorio en Github.
- Se ha publicado el proyecto en Github Pages.

**Historia de Usuario 3:**
*Yo, como jugador de juegos de Pokemon, quiero poder ver el detalle de fortalezas y debilidades de cada pokemon, así como la tasa de captura, para utilizar esa información al jugar.*

**Criterios de aceptación:**
- Quiero una vista de grilla.
- Quiero que sea responsive.
- Quiero ver la imagen del Pokemon, su nombre y número.
- Quiero hacer click en la imagen y que me muestre las fortalezas y debilidades de cada Pokemon.
- Quiero que además se incluya información acerca de la tasa de captura del pokemon.
- Quiero poder cerrar ese pop-up y volver a la pantalla principal.

**Definición de terminado:**
- Pruebas de usabilidad realizadas con al menos 2 usuarios.
- Todo el código está en la rama principal de nuestro Repositorio en Github.
- Se ha publicado el proyecto en Github Pages.

**Historia de Usuario 4:**
*Yo como jugador avanzado de juegos Pokemon quiero poder buscar un Pokemon determinado para encontrar información específica de él.*

**Criterios de aceptación:**
- Quiero una vista de grilla.
- Quiero que sea responsive.
- Quiero ver la imagen del Pokemon, su nombre y número.
- Quiero que exista una barra de búsqueda para escribir el nombre del Pokemon que quiero buscar.
- Quiero que me muestre el resultado de esa búsqueda.

**Definición de terminado:**
- Pruebas de usabilidad realizadas con al menos 2 usuarios.
- Todo el código está en la rama principal de nuestro Repositorio en Github.
- Se ha publicado el proyecto en Github Pages.

**Historia de Usuario 5:**
*Yo como jugador avanzado de juegos Pokemon quiero poder ordenar la información por distintos criterios (como alfabético, por orden numérico, etc.) para ver los datos de manera organizada.*

**Criterios de aceptación:**
- Quiero una vista de grilla.
- Quiero que sea responsive.
- Quiero ver la imagen del Pokemon, su nombre y número.
- Quiero que exista una opción para ordenar por orden alfabético o numérico, de manera ascendente y descendente.
- Quiero ver los resultados ordenados de acuerdo a la opción seleccionada.

**Definición de terminado:**
- Pruebas de usabilidad realizadas con al menos 2 usuarios.
- Todo el código está en la rama principal de nuestro Repositorio en Github.
- Se ha publicado el proyecto en Github Pages.

**Historia de Usuario 6:**
*Yo como jugador avanzado de juegos Pokemon quiero poder filtrar la lista de pokemon por tipo de Pokemon para ver solo los resultados que me interesan.*

**Criterios de aceptación:**
- Quiero una vista de grilla.
- Quiero que sea responsive.
- Quiero ver la imagen del Pokemon, su nombre y número.
- Quiero que exista una opción para filtrar la lista de Pokemon por tipo.
- Quiero ver únicamente los resultados de acuerdo al filtro seleccionado.

**Definición de terminado:**
- Pruebas de usabilidad realizadas con al menos 2 usuarios.
- Todo el código está en la rama principal de nuestro Repositorio en Github.
- Se ha publicado el proyecto en Github Pages.

## 3. Interfaz

La interfaz es simple y en tonos claros, el fondo tiene ilustraciones de distintos pokemones en colores variados, pero todos cercanos a tonalidades pasteles, además se presentan dos imágenes en el banner inicial de personajes de la serie. Los títulos son de color gris oscuro y los elementos de la barra de navegación, como el menú para ordenar, filtrar y barra de búsqueda están en tonos blancos con letras negras para facilitar la lectura. 

Dentro de la barra de navegación, tenemos primero el menú para filtrar. Con este podemos escoger qué pokemon queremos ver por tipo. Luego, con la barra de búsqueda podemos ingresar como texto el nombre o número de pokemon y buscar todas las coincidencias que existan dentro de la data. Además hay mensajes personalizados en caso de no encontrar resultados y de no recibir ningún criterio de búsqueda. Finalmente está el menú para ordenar la data de manera alfabética o numérica, en orden ascendente o descendente.

Ya en la parte principal de nuestra aplicación, los pokemones se muestran en un diseño de grilla, que como máximo mostrará 4 columnas y como mínimo 2, dependiendo del tamaño de la pantalla. Cada pokemon aparece dentro de una tarjeta con su número, imagen y nombre. Al presionar cada una de las tarjetas se abre una ventana que muestra primero un botón cerrar para volver a la pantalla anterior, y luego, lla misma información mencionada antes (número, nombre e imegen) pero también el tipo de pokemon, sus fortalezas, debilidades, ataques rápidos, ataques cargados, tasas de aparición, captura y huída, además de todas las evoluciones dentro de la línea de ese pokemon.
Se optó por un diseño minimalista y sencillo, que fuese lo suficientemente claro y que tenga la información más buscada por los jugadores.

Finalmente en el pie de página se agregó una opción para contabilizar los pokemones que se muestran en pantalla.

A continuación se exponen imágenes de todo lo descrito anteriormente.

Diseño final home (pantalla grande):

![Diseño Final Dispositivo Pantalla Grande](https://github.com/sara-rioseco/DEV007-data-lovers/blob/main/src/img/Home(big).JPG?raw=true)

Diseño final home (pantalla celular o tablet):

![Diseño Final Dispositivo Pantalla Pequeña](https://github.com/sara-rioseco/DEV007-data-lovers/blob/main/src/img/Home(small).jpg?raw=true)

Vista de dialog con información detallada:
![Vista de detalles de pokemon](https://github.com/sara-rioseco/DEV007-data-lovers/blob/main/src/img/detailsview.JPG?raw=true)

Vista de mensaje sin input en la búsqueda:
![Vista de mensaje sin input](https://github.com/sara-rioseco/DEV007-data-lovers/blob/main/src/img/noinput.JPG?raw=true)

Vista de mensaje para búsqueda sin resultados:
![Vista de búsqueda sin resultados](https://github.com/sara-rioseco/DEV007-data-lovers/blob/main/src/img/notfound.JPG?raw=true)

Vista de menú dropdown con filtro por tipos de pokemon:
![Vista de dropdown con filtro]()

Vista de menú select para ordenar alfabéticamente/numéricamente:
![Vista de menú select para ordenar](https://github.com/sara-rioseco/DEV007-data-lovers/blob/main/src/img/selectview.jpg?raw=true)

Vista de mensaje para contar pokemones en pantalla:

![Mensaje para contar pokemones en pantalla](https://github.com/sara-rioseco/DEV007-data-lovers/blob/main/src/img/countview.JPG?raw=true)

## 4. Test

Se ejecutaron test con coverage de 89% de statements, 98% de branch, 88% de funciones, 89% de lines. 
Los resultados son los siguientes:

![Tests](https://github.com/sara-rioseco/DEV007-data-lovers/blob/main/src/img/Tests.JPG?raw=true)

Detectamos los siguientes errores al hacer nuestros tests:

- Algunas de nuestras funciones, sobretodo las que no retornan nada, no supimos como testear.
- Algunas funciones tenían una redacción rebuscada y repetitiva, lo que nos dificultó buscar dónde estaba la razón de que fallaran algunos tests.

## 5.  Problemas de usabilidad

Al pedir pruebas de usabilidad con distintos usuarios, detectamos algunos errores y detalles de los que no nos habíamos percatado con anterioridad. 
Estos son los siguientes:

- Al entrar en la web, abajo a final al centro, se pueden ver ds puntos blancos que corresponden a los dialogs vacíos.
- Al ver la web en celular, a veces los nombres de los pokemones se salen de las tarjetas.
- Luego de buscar un pokemon por su nombre, cambia la posición del botón cerrar en el dialog con detalles del pokemon.

## 6.  Organización, planificación y trabajo en equipo

Para nuestra planificación utilizamos la herramienta Trello. En esta ubicamos las historias de usuario a la izquierda, luego el product backlog con todas las funcionalidades que queríamos implementar, luego columnas "Doing" y "Done" y finalmente al terminar un sprint, dejábamos todos los avances en la columna "Sprint backlog". Este sistema nos ayudó mucho a la organización y a entender de manera visual los avances que llevábamos y cuánto trabajo nos faltaba por hacer. También tener las historias de usuario siempre visibles facilitó mucho para tener siempre en mente las funcionalidades y criterios de aceptación que debíamos cumplir.
A continuación dejamos una imagen de nuestro tablero.

![Tablero trello](https://github.com/sara-rioseco/DEV007-data-lovers/blob/main/src/img/trello.JPG?raw=true)

