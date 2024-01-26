$(document).ready(function() {
    $.getJSON('datos.json', function(data) {
      mostrarEstadisticas(data);
    });
  });

  function mostrarEstadisticas(data) {
    // Calcular estadísticas
    var generos = {};
    var plataformas = {};
    var juegosAntiguos = { juego: null, fecha: new Date() };

    data.forEach(function(juego) {
      // Estadísticas de género
      generos[juego.genre] = (generos[juego.genre] || 0) + 1;

      // Estadísticas de plataforma
      plataformas[juego.platform] = (plataformas[juego.platform] || 0) + 1;

      // Juego más antiguo
      var fechaLanzamiento = new Date(juego.release_date);
      if (fechaLanzamiento < juegosAntiguos.fecha) {
        juegosAntiguos.juego = juego;
        juegosAntiguos.fecha = fechaLanzamiento;
      }
    });

    // Mostrar estadísticas en el div
    var estadisticasDiv = $('#estadisticas');

    mostrarGraficoBarras('Estadísticas de Género', generos, estadisticasDiv);
    mostrarGraficoBarras('Estadísticas de Plataforma', plataformas, estadisticasDiv);

    estadisticasDiv.append('<h2>Juego Más Antiguo</h2>');
    estadisticasDiv.append('<p>Nombre: ' + juegosAntiguos.juego.title + '</p>');
    estadisticasDiv.append('<p>Fecha de lanzamiento: ' + juegosAntiguos.juego.release_date + '</p>');
  }

  function mostrarGraficoBarras(titulo, datos, contenedor) {
    var canvas = $('<canvas></canvas>');
    contenedor.append('<h2>' + titulo + '</h2>');
    contenedor.append('<div class="chart-container"></div>');
    $('.chart-container', contenedor).append(canvas);

    var ctx = canvas[0].getContext('2d');
    var etiquetas = Object.keys(datos);
    var valores = Object.values(datos);

    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: etiquetas,
        datasets: [{
          label: 'Cantidad',
          data: valores,
          backgroundColor: 'rgba(75, 192, 192, 0.2)',
          borderColor: 'rgba(75, 192, 192, 1)',
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