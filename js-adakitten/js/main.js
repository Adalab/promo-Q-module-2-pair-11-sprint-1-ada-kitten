"use strict";

// 3. Modificar clases CSS desde JS: En este ejercicio vamos a probar como mostrar el formulario para añadir un nuevo gatito. Para ello busca en el html la sección que contiene el formulario y elimina la clase colapsed. Puedes seguir los siguientes pasos:

// En la sección de formulario del html agrega la clase js-new-form.
// Con document.querySelector('.js-new-form') obtenemos el formulario que hayamos escrito en nuestro HTML.
// Utiliza la propiedad classList.remove("collapsed") para hacer visible el formulario;

document.querySelector('.js-new-form');
const newForm=document.querySelector('.js-new-form');
newForm.classList.remove("collapsed");

