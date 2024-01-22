
/*document.addEventListener('DOMContentLoaded', function () {
    // Obtén datos de la API
    fetch('https://api.rawg.io/api/games?key=YOUR_API_KEY&ordering=rating&page_size=3')
        .then(response => response.json())
        .then(data => {
            const cardElements = document.querySelectorAll('.card');

            // Llena las tarjetas con datos de la API
            for (let i = 0; i < cardElements.length; i++) {
                const card = cardElements[i];
                const game = data.results[i];

                card.innerHTML = `
                    <h2>${game.name}</h2>
                    <p>Género: ${game.genres.map(genre => genre.name).join(', ')}</p>
                    <p>Clasificación: ${game.esrb_rating ? game.esrb_rating.name : 'No disponible'}</p>
                    <p>Puntuación: ${game.rating}</p>
                `;
            }
        })
        .catch(error => console.error('Error al obtener datos de la API:', error));
});
*/


/*
let gamesData = [];

fetch('games.json')
    .then((res) => res.json())
    .then((data) => {
        gamesData = data;
        console.log(gamesData);

        // Prueba para leer los títulos
        for (const game of gamesData) {
            console.log(game.title);
        }
    });
*/
/*
const listaVideojuegos= document.querySelector("#listaVideojuegos");

let gamesData = [];

fetch('games.json')
    .then((res) => res.json())
    .then((data) => {
        gamesData = data;
        mostrarJuegos(gamesData);

    })
    .catch((error) => {
        console.error('Error al cargar los datos de juegos:', error);
    });

    for (let i = )

function mostrarJuegos(juegos) {
    listaJuegos.innerHTML = "";

    juegos.forEach((game) => {
        const div = document.createElement("div");
        div.classList.add("juego");
        div.innerHTML = `
            <h2 class="juego-titulo">${game.title}</h2>
            <p class="juego-plataforma">${game.platform}</p>
            <!-- Agrega más información según tus necesidades -->

            <!-- Ejemplo: <img src="${game.cover}" alt="${game.title}"> -->

            <!-- Puedes personalizar la estructura del div según tus necesidades -->

        `;
        listaJuegos.append(div);
    });
}
*/
/*
function contarIdsEnJson() {
    fetch('games.json')
        .then(response => response.json())
        .then(data => {
            if (Array.isArray(data) && data.length > 0) {
                let idCount = 0;

                // Recorre los datos y cuenta las claves "id"
                data.forEach(item => {
                    if (item.hasOwnProperty('id')) {
                        idCount++;
                    }
                });

                console.log(`Número de valores "id": ${idCount}`);
            } else {
                console.error('Los datos no son válidos o el array está vacío.');
            }
        })
        .catch(error => {
            console.error('Error al cargar los datos:', error);
        });
}

// Llama a la función para contar los "id" en games.json
contarIdsEnJson();
*/

const listaVideojuegos = document.querySelector("#listaVideojuegos");
const botonesHeader = document.querySelectorAll(".btn-genre");
let gamesData = [];

fetch('datos.json')
    .then((res) => res.json())
    .then((data) => {
        gamesData = data;

        // Mostrar videojuegos después de cargar los datos
        gamesData.forEach(videojuego => mostrarVideojuego(videojuego));
    })
    .catch((error) => {
        console.error('Error al cargar los datos:', error);
    });

function mostrarVideojuego(videojuego) {
    const div = document.createElement("div");
    div.classList.add("videojuego");
    div.innerHTML = `
        <div class="videojuego">
            <div class="nombre-contenedor">
                <p class="videojugo-id">#${videojuego.id}</p>
                <h2 class="videojuego-tittle">${videojuego.title}</h2>
            </div> 
            <div class="videojuego-thumbnail">
                <img src="${videojuego.thumbnail}" alt="${videojuego.title}">
            </div>

            <div class="videojuego-info">
                <div class="videojuego-genre">
                    <p class="genre">Género: ${videojuego.genre}</p>
                </div>
                <div class="videojuego-platform">
                    <p class="platform">Plataforma: ${videojuego.platform}</p>
                </div>
                <div class="videojuego-release_date">
                    <p class="release_date">Lanzamiento: ${videojuego.release_date}</p>
                </div>
                <div class="game_url">
                    <a class="game_url" href="${videojuego.game_url}">Jugar aquí</a>
                </div>
            </div>
        </div>
    `;
    listaVideojuegos.append(div);
}
/*
// Selecciona los botones
const btnGeneros = document.querySelectorAll(".btn-genre");

// Agrega un evento de clic a cada botón
btnGeneros.forEach(btn => {
    btn.addEventListener("click", (event) => {
        // Obtiene el id del botón clicado
        const generoSeleccionado = event.currentTarget.id;

        // Limpia la lista de videojuegos
        listaVideojuegos.innerHTML = "";

        // Filtra los videojuegos según el género seleccionado
        const juegosFiltrados = gamesData.filter(videojuego => {
            // Asegúrate de que el género esté definido y coincida
            return generoSeleccionado === "ver-todos" || (videojuego.genre && videojuego.genre.toLowerCase() === generoSeleccionado.toLowerCase());
        });

        // Muestra los videojuegos filtrados
        juegosFiltrados.forEach(videojuego => mostrarVideojuego(videojuego));
    });
});

*/
/*
btnGeneros.forEach(btn => btn.addEventListener("click", (event) => {
    const botonId = event.currentTarget.id;

    listaPokemon.innerHTML = "";

   
fetch('datos.json')
    .then((res) => res.json())
    .then((data) => {
        gamesData = data;

                if(botonId === "ver-todos") {
                    mostrarVideojuego(data);
                } else {
                    const tipos = data.genre;
                    if (genre.some(genre => genre.includes(botonId))) {
                        mostrarVideojuego(data);
                    }
                }

            })
    }
));
*/
const btnGeneros = document.querySelectorAll(".btn-genre");

btnGeneros.forEach(btn => {
    btn.addEventListener("click", () => {
        const generoSeleccionado = btn.id;

        // Verifica si el botón clicado es "ver-todos"
        if (generoSeleccionado === "ver-todos") {
            mostrarTodosLosVideojuegos();
        } else {
            // Filtra los videojuegos por el género seleccionado
            const juegosFiltrados = gamesData.filter(videojuego => videojuego.genre.includes(generoSeleccionado.toLowerCase()));

            // Limpia el contenido actual de la lista de videojuegos
            listaVideojuegos.innerHTML = "";

            // Muestra los videojuegos filtrados
            juegosFiltrados.forEach(videojuego => mostrarVideojuego(videojuego));
        }
    });
});



