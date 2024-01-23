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

