// Configuracion del slider
if (window.location.href.indexOf('index') > -1) { // Solo ejecuta si esta en index.html
  $(function () {
    $('.galeria').bxSlider({
      mode: 'fade',
      captions: true,
      responsive: true,
      infiniteLoop: true,
      auto: true,
      adaptiveHeight: true
    })
  })

  // Configuracion de moment.js en español
  moment.locale('es')
  
  var posts = [
    {
      titulo: 'Prueba de titutlo 1',
      fecha: moment().format('ll'),
      contenido: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda omnis fugiat suscipit eum hic nemo adipisci veniam! Nihil, laudantium alias deserunt sapiente rem velit inventore, aliquam cum, placeat laborum eos.'
    },
    {
      titulo: 'Prueba de titutlo 2',
      fecha: moment().format('ll'),
      contenido: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda omnis fugiat suscipit eum hic nemo adipisci veniam! Nihil, laudantium alias deserunt sapiente rem velit inventore, aliquam cum, placeat laborum eos.'
    },
    {
      titulo: 'Prueba de titutlo 3',
      fecha: moment().format('ll'),
      contenido: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda omnis fugiat suscipit eum hic nemo adipisci veniam! Nihil, laudantium alias deserunt sapiente rem velit inventore, aliquam cum, placeat laborum eos.'
    },
  ]
  
  // Mostrar el JSON en el HTML
  posts.forEach((item) => {
    var post = `
      <article class="post">
        <h2>${item.titulo}</h2>
        <span class="fecha">${item.fecha}</span>
        <p>${item.contenido}</p>
        <a href="" class="btn">Leer más</a>
      </article>
    `
  
    $('#posts').append(post)
  })
}

// Seleccion de temas
const tema = $('#tema')
$('#verde').click(function() {
  tema.attr('href', 'css/verde.css')
})
$('#rojo').click(function() {
  tema.attr('href', 'css/rojo.css')
})
$('#azul').click(function() {
  tema.attr('href', 'css/azul.css')
})

// Enlace arriba
$('.subir').click(function(e) {
  e.preventDefault()

  $('html').animate({
    scrollTop: 0,
  }, 500)

  return false
})

// login con localStorage
$('#login form').submit(() => {
  const nombre = $('#nombre').val()
  
  localStorage.setItem('nombre', nombre)
})

const nombre = localStorage.getItem('nombre')

if (nombre != null && nombre != 'undefined') {
  const ident = $('#acerca p')
  ident.html('Bienvenido, <strong>' + nombre + '</strong>')
  ident.append("<p><a href='#' id='cerrar'>Cerrar sessión</a></p>")
  
  $('#login').hide()

  $('#cerrar').click(() => {
    localStorage.clear()
    location.reload()
  })
}

// Configuracion de pestañas en acerca.html
if (window.location.href.indexOf('acerca') > -1) { // Solo se ejecuta si esta en acerca.html
  $('#acordeon').accordion()
}

// Si existe en la ruta reloj.html, se utiliza moment.js
if (window.location.href.indexOf('reloj') > -1) {
  // Se actualiza cada segundo
  setInterval(() => {
    const reloj = moment().format('hh:mm:ss a')
    $('#reloj').html(reloj)
  }, 1000);
}

// Validacion del formulario
if (window.location.href.indexOf('contacto') > -1) {
  // Configuracion de datepicker al español
  $.datepicker.regional['es'] = {
    closeText: 'Cerrar',
    prevText: '< Ant',
    nextText: 'Sig >',
    currentText: 'Hoy',
    monthNames: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
    monthNamesShort: ['Ene','Feb','Mar','Abr', 'May','Jun','Jul','Ago','Sep', 'Oct','Nov','Dic'],
    dayNames: ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'],
    dayNamesShort: ['Dom','Lun','Mar','Mié','Juv','Vie','Sáb'],
    dayNamesMin: ['Do','Lu','Ma','Mi','Ju','Vi','Sá'],
    weekHeader: 'Sm',
    dateFormat: 'dd-mm-yy',
    firstDay: 1,
    isRTL: false,
    showMonthAfterYear: false,
    yearSuffix: ''
  }
  $.datepicker.setDefaults($.datepicker.regional['es'])

  $("form input[name='nacimiento']").datepicker({
    dateFormat: 'dd-mm-yy',
  })

  // Se estable el idioma del plugin de validacion
  $.validate({
    lang: 'es'
  })
}