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


// 5. TRABAJAR CON VARIABLES E INTERPOLARLAS

// En tu fichero main.js crea las variables necesarias para almacenar la información de cada gatito (recuerda que tenemos tres gatitos de momento):
// Una variable para la URL de la foto.
// Una variable para el nombre.
// Una variable para la descripción.
// Una variable para la raza.

const kittenOneImage = 'https://ychef.files.bbci.co.uk/976x549/p07ryyyj.jpg';
const kittenOneName = 'Anastacio';
const kittenOneDesc ='Ruiseño, juguetón, le guta estar tranquilo y que nadie le moleste. Es una maravilla acariciarle!';

const kittenTwoImage='https://images.emedicinehealth.com/images/article/main_image/cat-scratch-disease.jpg';
const kittenTwoName='Fiona';
const kittenTwoDesc='Ruiseño, juguetón, le guta estar tranquilo y que nadie le moleste. Es una maravilla acariciarle!';


const kittenThreeImage='https://media-cldnry.s-nbcnews.com/image/upload/t_nbcnews-fp-1200-630,f_auto,q_auto:best/newscms/2019_39/3021711/190923-cat-pet-stock-cs-1052a.jpg';
const kittenThreeName='Cielo';
const kittenThreeDesc='Ruiseño, juguetón, le guta estar tranquilo y que nadie le moleste. Es una maravilla acariciarle!';


console.log(`<li class="card"> <article>
  <img class="card_img" src=${kittenOneImage}/>
  <h3 class="card_title">${kittenOneName}</h3>
  <p class="card_description"> ${kittenOneDesc}</p>
</article></li>`);

console.log(`<li class="card"> <article>
  <img class="card_img" src=${kittenTwoImage}/>
  <h3 class="card_title">${kittenTwoName}</h3>
  <p class="card_description"> ${kittenTwoDesc}</p>
</article></li>`);

console.log(`<li class="card"> <article>
  <img class="card_img" src=${kittenThreeImage}/>
  <h3 class="card_title">${kittenThreeName}</h3>
  <p class="card_description"> ${kittenThreeDesc}</p>
</article></li>`);

// ¿Serías capaz de buscar métodos de string para pasar a mayúsculas el nombre de los gatitos que está en la variable kittenName?
console.log(kittenOne.toUpperCase());

