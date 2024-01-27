# Definición del Producto

## Problema a resolver
Nuestros usuarios necesitan una página que les facilite la información de sus videojuegos favoritos y que encuentren un acceso rápido para poder disfrutar de ellos.

## Solución Propuesta
Nuestra página web de videojuegos brinda información sobre los videojuegos que incluye nuestra API. Además, les damos la opción de seleccionar un género específico y una barra de búsqueda para facilitar sus búsquedas. Al encontrar el juego que buscan, proporcionamos información sobre el tipo de plataforma, su fecha de lanzamiento y un enlace que los redirige a una pestaña para disfrutar de su videojuego.

## Proceso de Diseño
Como primer paso, realizamos bocetos a mano para definir nuestras primeras ideas de cómo queríamos que estuviera organizada nuestra página.

### Boceto 01
![Boceto 01](imagen)

### Boceto 02
![Boceto 02](imagen)

### Boceto 03
![Boceto 03](imagen)

Después de nuestros bocetos a mano, realizamos un prototipo de alta fidelidad que, gracias a nuestro último boceto, nos permitió diseñar la estética de nuestra página de una forma más cercana a la realidad. Para esto, utilizamos Figma.

### Nuestro Prototipo
![Prototipo](imagen)

## Historias de Usuario (HU) y Criterios de Aceptación

### Historia de Usuario 01: Ingreso a la Página

**Como** nuevo visitante interesado en la página,  
**Quiero** ser recibido con un diseño atractivo y relacionado con los juegos y con un acceso fácil a la sección de videojuegos,  
**Para** tener una experiencia visual agradable y poder explorar los videojuegos rápidamente.

#### Criterios de Aceptación para HU 01:

- La primera página HTML tiene un video de fondo sobre el videojuego Pac-man.
- Cuenta con un botón que indica textualmente que se usa para ingresar.
- Al apretar el botón, te direcciona inmediatamente al nuevo HTML con todos los videojuegos.

### Historia de Usuario 02: Explorar Videojuegos por Género

**Como** usuario interesado en videojuegos,  
**Quiero** tener botones con cada género de videojuego al ingresar a la página principal,  
**Para** explorar fácilmente videojuegos específicos de mi interés.

#### Criterios de Aceptación para HU 02:

- La página principal cuenta con un botón para cada género específico y uno para mostrar todos.
- Al hacer clic sobre cada botón, aparecen todos los videojuegos con el género en común.
- Todos los videojuegos aparecen alfabéticamente para facilitar la búsqueda del usuario.

### Historia de Usuario 03: Búsqueda de Videojuegos

**Como** usuario que busca un videojuego específico,  
**Quiero** utilizar una barra de búsqueda para encontrar juegos por nombre,  
**Para** acceder rápidamente a la información de un juego en particular.

#### Criterios de Aceptación para HU 03:

- La página principal cuenta con una barra de búsqueda.
- Cada videojuego que cuente con la palabra en común aparecerá y si no se encuentra el videojuego se mostrará un alert.
- Todos los videojuegos aparecen alfabéticamente para facilitar la búsqueda del usuario.

### Historia de Usuario 04: Estadísticas de Videojuegos

**Como** usuario curioso sobre las estadísticas de videojuegos,  
**Quiero** tener un botón para ver estadísticas generales al ingresar a la página principal,  
**Para** obtener información sobre los géneros más comunes, tendencias y otras estadísticas relevantes.

#### Criterios de Aceptación para HU 04:

- La página principal cuenta con un botón llamado "Estadísticas".
- Al hacer clic, nos muestra un nuevo HTML con las estadísticas.
- Las estadísticas se muestran en un gráfico de barras para facilitar el entendimiento.
