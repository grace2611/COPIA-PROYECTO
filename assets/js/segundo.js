$(document).ready(function() {
    $.getJSON('datos.json', function(data) {
      mostrarEstadisticas(data);
    });
  });

  function mostrarEstadisticas(data) {
    // Calcular estadísticas
    var generos = {};
    var plataformas = {};

    data.forEach(function(juego) {
      // Estadísticas de género
      generos[juego.genre] = (generos[juego.genre] || 0) + 1;

      // Estadísticas de plataforma
      plataformas[juego.platform] = (plataformas[juego.platform] || 0) + 1;

      // Juego más antiguo
      
    });

    // Mostrar estadísticas en el div
    var estadisticasDiv = $('#estadisticas');

    mostrarGraficoBarras('Estadísticas de Género', generos, estadisticasDiv);
    mostrarGraficoBarras('Estadísticas de Plataforma', plataformas, estadisticasDiv);

    
  }

  function mostrarGraficoBarras(titulo, datos, contenedor) {
    var canvas = $('<canvas></canvas>');
    contenedor.append('<h2>' + titulo + '</h2>');
    contenedor.append('<div class="chart-container estadisticasDiv"></div>');
    $('.chart-container', contenedor).append(canvas);

    var ctx = canvas[0].getContext('2d');
    var etiquetas = Object.keys(datos);
    var valores = Object.values(datos);

    var coloresManual = ['#FF5733', '#33FF57', '#5733FF', '#FFFF33', '#33FFFF'];

    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: etiquetas,
            datasets: [{
                label: 'Cantidad',
                data: valores,
                backgroundColor: coloresManual, // Utiliza los colores definidos manualmente
                borderColor: coloresManual,
                borderWidth: 1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  }