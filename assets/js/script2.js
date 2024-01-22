const listaVideojuegos = document.querySelector("#listaVideojuegos");
let listaVideojuegosData = [];

fetch('datos.json')
    .then((res) => res.json())
    .then((data) => {
        listaVideojuegosData = data;
        // Mostrar videojuegos después de cargar los datos
        listaVideojuegosData.forEach(videojuego => mostrarVideojuego(videojuego));
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

const btnGeneros = document.querySelectorAll(".btn-genre");

btnGeneros.forEach(btn => {
    btn.addEventListener("click", () => {
        const generoSeleccionado = btn.id;
        if (generoSeleccionado === "ver-todos") {
            mostrarTodosLosVideojuegos();
        } else {
            const juegosFiltrados = listaVideojuegosData.filter(videojuego => videojuego.genre.toLowerCase().includes(generoSeleccionado.toLowerCase()));
            listaVideojuegos.innerHTML = "";
            juegosFiltrados.forEach(videojuego => mostrarVideojuego(videojuego));
        }
    });
});

function mostrarTodosLosVideojuegos() {
    listaVideojuegos.innerHTML = "";
    listaVideojuegosData.forEach(videojuego => mostrarVideojuego(videojuego));
}
console.log("Géneros disponibles:", [...new Set(listaVideojuegosData.genre(data => data.genre))]);
