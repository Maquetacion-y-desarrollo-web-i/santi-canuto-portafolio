// 1. Envío del formulario
 const formulario = document.getElementById ( ' miFormulario ' );

 si (formulario) {
 formulario.addEventListener ( ' submit ' , function ( e ) {
 e.preventDefault () ;
 alert ( ' ¡Gracias! El mensaje fue enviado correctamente. ' );
 formulario.reset () ;
 });
 }

 // 2. Control de navegación en el menú
 const secciones = documento . querySelectorAll ( ' sección ' );
 const linksNav = document.querySelectorAll ( ' . nav-item ' );

 función actualizarRecuadroMenu () {
 let seccionEnPantalla = '' ;
 const posicionScroll = window.scrollY + ( window.innerHeight / 3 ) ;

 secciones . paraCada ( sección => {
 const topSeccion = sección . desplazamientoarriba ;
 const altoSeccion = seccion . altura compensada ;

 if (posicionScroll >= topSeccion && posicionScroll < topSeccion + altoSeccion) {
 secciónEnPantalla = sección . getAttribute ( ' identificación ' );
 }
 });

 if ( ( window.innerHeight + window.scrollY ) > = document.body.offsetHeight - 50 ) {
 seccionEnPantalla = ' contacto ' ;
 }

 linksNav . forEach ( enlace => {
 enlace . classList . remove ( ' activo ' );
 if (secciónEnPantalla && link . getAttribute ( ' href ' ) === ` # ${ secciónEnPantalla } `) {
 enlace . classList . add ( ' activo ' );
 }
 });
 }

 ventana.addEventListener ( ' scroll ' , actualizarRecuadroMenu ) ;
 ventana.addEventListener ( ' load ' , actualizarRecuadroMenu ) ;