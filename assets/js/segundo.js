$(document).ready(function() {
    $.getJSON('datos.json', function(data) {
      mostrarEstadisticas(data);
    });
  });

  function mostrarEstadisticas(data) {
    // Creamos variables para objetos de cada uno
    var generos = {};
    var plataformas = {};

    data.forEach(function(juego) {
      // Estadísticas de género, accedemos al género de cada juego y se urtiliza como nueva clave en el objeto "generos", si existe se incrementa en 1, sino se inicialza en 1
      generos[juego.genre] = (generos[juego.genre] || 0) + 1;
      // Estadísticas de plataforma
      plataformas[juego.platform] = (plataformas[juego.platform] || 0) + 1;
      
    });


    // Mostrar estadísticas en el div
    var estadisticasDiv = $('#estadisticas'); //selecciona el elemento con ese ID y lo almacena en el var
   //LLama a la función con los argumentos ya reemplazados, para ambos gráficos
    mostrarGraficoBarras('Estadísticas de Género', generos, estadisticasDiv);
    mostrarGraficoBarras('Estadísticas de Plataforma', plataformas, estadisticasDiv);
  }

  function mostrarGraficoBarras(titulo, datos, contenedor) {
    var canvas = $('<canvas></canvas>');
    contenedor.append('<h2>' + titulo + '</h2>');
    contenedor.append('<div class="chart-container estadisticasDiv"></div>');
    $('.chart-container', contenedor).append(canvas); //Utiliza jQuery para buscar el elemento con la clase chart-container dentro del contenedor y agrega el elemento <canvas> al interior de este div. Esto establece la estructura necesaria para el gráfico de barras.

    var ctx = canvas[0].getContext('2d');
    var etiquetas = Object.keys(datos); //(TODO ESTO SE SACA DE LOS OBJETOS CREADOS QUE LUGO SE REEMPLAZAN AL LLAMAR LA FUNCIÓN)función en JavaScript que devuelve un array con las claves (o nombres de las propiedades) de un objeto. En este caso, datos es un objeto, y Object.keys(datos) devuelve un array con las claves de ese objeto.
    var valores = Object.values(datos);//es una función en JavaScript que devuelve un array con los valores de un objeto. En este caso, datos es un objeto, y Object.values(datos) devuelve un array con los valores asociados a las claves de ese objeto.

    var coloresManual = ['#f14e95', '#b61aae', '#b61aae', '#930077', '#714288'];

    new Chart(ctx, { //Se crea una nueva instancia de la clase Chart con el contexto 2D (ctx) del canvas y se pasa un objeto de configuración como argumento.
        type: 'bar',
        data: {
            labels: etiquetas, //Un array que contiene las etiquetas (nombres de las categorías) en el eje X 
            datasets: [{  //Un array que contiene la configuración de la serie de datos.
                label: 'Cantidad',  //Etiqueta de la serie de datos que se mostrará en la leyenda.
                data: valores, //Un array que contiene los valores correspondientes a las etiquetas en el eje X.
                backgroundColor: coloresManual, // Utiliza los colores definidos manualmente
                borderColor: coloresManual,
                borderWidth: 1 //Ancho del borde de las barras.
        }]
      },
      options: {
        scales: { //Configuración de las escalas (ejes) del gráfico.
          y: {
            beginAtZero: true //Hace que el eje Y comience desde cero.
          }
        }
      }
    });
  }