$(document).ready(function(){

	$('.cursoAgendaCabezalPrestacional').click(function(){
		$(this).css("background-color", "#56B9E3");
	});

	$('.cursoAgendaCabezalGestion').click(function(){
		$(this).css("background-color", "#EF9A6E");
	});

	$('.cursoAgendaCabezalHerramientas').click(function(){
		$(this).css("background-color", "#B9D487");
	});

	$('.cursoAgendaCabezalHabilidades').click(function(){
		$(this).css("background-color", "#F4AC2B");
	});

	$('.cursoAgendaCabezalEspecializada').click(function(){
		$(this).css("background-color", "#69C2C0");
	});

	$('.cursoAgendaCabezalBienestar').click(function(){
		$(this).css("background-color", "#8782B6");
	});


	$('.boton-menosPrestacional').click(function(){
		$(this).parent().siblings('.cursoFlechaPrestacional').css("background-image", "url(flechaPrestacional.svg)");
	});

	$('.boton-menosGestion').click(function(){
		$(this).parent().siblings('.cursoFlechaGestion').css("background-image", "url(flechaGestion.svg)");
	});

	$('.boton-menosHerramientas').click(function(){
		$(this).parent().siblings('.cursoFlechaHerramientas').css("background-image", "url(flechaHerramientas.svg)");
	});

	$('.boton-menosHabilidades').click(function(){
		$(this).parent().siblings('.cursoFlechaHabilidades').css("background-image", "url(flechaHabilidades.svg)");
	});

	$('.boton-menosEspecializada').click(function(){
		$(this).parent().siblings('.cursoFlechaEspecializada').css("background-image", "url(flechaEspecializada.svg)");
	});

	$('.boton-menosBienestar').click(function(){
		$(this).parent().siblings('.cursoFlechaBienestar').css("background-image", "url(flechaBienestar.svg)");
	});


	$('.cursoAgendaCabezal').click(function(){
		$(this).siblings('.fechaBase').animate({height: $(this).siblings('.fechaBase').get(0).scrollHeight}, 100);
		$(this).children('.menos').css({ display: "block" });
		$(this).children('.mas').css({ display: "none" });
		$(this).children('.cursoNombre').css("color", "#fff");
		$(this).children('.cursoFlecha').css("background-image", "url(flechaBlanca.svg)").css("transition", "background-color 0.5s ease");
		
	});

	$('.fechaBase').click(function(){
		$(this).animate({height: 0}, 100);
		$(this).siblings().children('.menos').css({ display: "none" });
		$(this).siblings().children('.mas').css({ display: "block" });
		$(this).siblings().css("background-color", "#fff");
		$(this).siblings().children('.cursoNombre').css("color", "#015294");
	});



/*	$('.boton-mas').click(function(){
		$(this).parent().parent().siblings('.fechaBase').animate({height: $(this).parent().parent().siblings('.fechaBase').get(0).scrollHeight}, 100);
		$(this).parent().siblings('.menos').css({ display: "block" });
		$(this).parent('.mas').css({ display: "none" });
		$(this).parent().siblings('.cursoNombre').css("color", "#fff");
		$(this).parent().siblings('.cursoFlecha').css("background-image", "url(flechaBlanca.svg)").css("transition", "background-color 0.5s ease");
		
	});

	$('.boton-menos').click(function(){
		$(this).parent().parent().siblings('.fechaBase').animate({height: 0}, 100);
		$(this).parent('.menos').css({ display: "none" });
		$(this).parent().siblings('.mas').css({ display: "block" });
		$(this).parent().parent().css("background-color", "#fff");
		$(this).parent().siblings('.cursoNombre').css("color", "#015294");
	});*/


	//Buscador

		$('#buscador').keyup(function(){
		var cursos = $('.cursoNombre');
		var buscando = $(this).val();
		var item='';
		for( var i = 0; i < cursos.length; i++ ){
			item = $(cursos[i]).html().toLowerCase();
			for(var x = 0; x < item.length; x++ ){
				if( buscando.length == 0 || item.indexOf( buscando ) > -1 ){
					$(cursos[i]).parent().parent('.cursoAgendaBase').show(); 
				}else{
					$(cursos[i]).parent().parent('.cursoAgendaBase').hide();
				};
			};
		};
	});


//smooth scroll//
// Add smooth scrolling to all links
$("a").on('click', function(event) {

// Make sure this.hash has a value before overriding default behavior
	if (this.hash !== "") {
			// Prevent default anchor click behavior
		event.preventDefault();

		// Store hash
		var hash = this.hash;

		// Using jQuery's animate() method to add smooth page scroll
		// The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
		$('html, body').animate({
			scrollTop: $(hash).offset().top
		}, 1200, function(){

		// Add hash (#) to URL when done scrolling (default click behavior)
		window.location.hash = hash;
		});
	} // End if
});

//volver arriba
$(window).scroll(function(){ 
	if ($(this).scrollTop() > 100) { 
		$('#arriba').fadeIn(); 
	} else { 
		$('#arriba').fadeOut(); 
	} 
}); 
$('#arriba').click(function(){ 
	$("html, body").animate({ scrollTop: 0 }, 1200); 
	return false; 
});

});
