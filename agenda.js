$(document).ready(function(){

	$('.abierto').click(function(){
		
		$(this).siblings('.fechaBase').animate({height: $(this).siblings('.fechaBase').get(0).scrollHeight}, 100);
		$(this).siblings(".cerrado").css({ display: "block" });
		$(this).css({ display: "none" });
	});

	$('.cerrado').click(function(){
		$(this).siblings('.fechaBase').animate({height: 0}, 100);
		$(this).css({ display: "none" });
		$(this).siblings(".abierto").css({ display: "block" });
	});



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
