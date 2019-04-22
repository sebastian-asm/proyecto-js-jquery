// Configuracion del slider
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