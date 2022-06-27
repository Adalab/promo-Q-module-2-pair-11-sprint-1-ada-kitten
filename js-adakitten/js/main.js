"use strict";
// 1. CREAR PROYECTO NUEVO: OK
// 2. ENTIENDE EL CÓDIGO HTML Y CSS DEL PROYECTO: OK
// 3. MODIFICAR CLASES CSS DESDE JS: En este ejercicio vamos a probar como mostrar el formulario para añadir un nuevo gatito. Para ello busca en el html la sección que contiene el formulario y elimina la clase colapsed. Puedes seguir los siguientes pasos:

// En la sección de formulario del html agrega la clase js-new-form.
// Con document.querySelector('.js-new-form') obtenemos el formulario que hayamos escrito en nuestro HTML.
// Utiliza la propiedad classList.remove("collapsed") para hacer visible el formulario;

document.querySelector('.js-new-form');
const newForm=document.querySelector('.js-new-form');
newForm.classList.remove("collapsed");


// 4. GUARDA LA INFORMACIÓN EN VARIABLES
// En este ejercicio vamos a añadir la información de los gatitos que está en html desde Javascript.

/* Agregar el código del li desde HTMl 
Repetir este proceso por cada gatito */

const listElement=document.querySelector(".js-list");
const kittenOne=`<li class="card">
<article>
  <img
    class="card_img"
    src="https://ychef.files.bbci.co.uk/976x549/p07ryyyj.jpg"
    alt="gatito"
  />
  <h3 class="card_title">Anastacio</h3>
  <p class="card_description">
    Ruiseño, juguetón, le guta estar tranquilo y que nadie le
    moleste. Es una maravilla acariciarle!
  </p>
</article>
</li>`;

const kittenTwo=`<li class="card">
<img
  class="card_img"
  src="https://images.emedicinehealth.com/images/article/main_image/cat-scratch-disease.jpg"
  alt="gatito"
/>
<h3 class="card_title">Fiona</h3>
<h4 class="card_race">British Shorthair</h4>
<p class="card_description">
  Ruiseño, juguetón, le guta estar tranquilo y que nadie le moleste.
  Es una maravilla acariciarle!
</p>
</li>`;

const kittenThree=`<li class="card">
<img
  class="card_img"
  src="https://media-cldnry.s-nbcnews.com/image/upload/t_nbcnews-fp-1200-630,f_auto,q_auto:best/newscms/2019_39/3021711/190923-cat-pet-stock-cs-1052a.jpg"
  alt="gatito"
/>
<h3 class="card_title">Cielo</h3>
<h4 class="card_race">British Shorthair</h4>
<p class="card_description">
  Ruiseño, juguetón, le guta estar tranquilo y que nadie le moleste.
  Es una maravilla acariciarle!
</p>
</li>`;

// He quitado el contenido del HTML. Ahora lo voy a agregar otra vez, pero usando innerHTML:

listElement.innerHTML=kittenOne+kittenTwo+kittenThree;

// Funcionó, pero han desaparecifo los estilos.
