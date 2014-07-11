 $( document ).ready(function() {
     $(".pajaro1, .pajaro2, .pajaro3, .pajaro4, .humo1, .luz, .reloj1, .reloj2, .palanca, .logos1, .salida, .sublime, .logos2 ").animateSprite({
	    fps: 10, loop: true,
	});
	$(".humo2").animateSprite({
	    fps: 15, loop: true,
	});
});

$(function() {
	$( ".pajaro1, .pajaro2, .pajaro3, .pajaro4, .barco1, .barco2" ).draggable({ revert: true, revertDuration: 6500  });
	$( ".cafe, .lapiz, .teclado, .dulce, .lentes, .cel" ).draggable({containment: 'body'});
 

 	var $document = $(document),
    $element = $('.personaje'),
    className = 'personaje2';

	$( window ).scroll(function() {  

 		if ($document.scrollTop() %10 == 0 ) {
		    $element.toggleClass(className);
		    //$( ".personaje" ).fadeToggle(5);
		  } 
		 if ($document.scrollTop() >= 2100 ) {
		    $( ".personaje" ).fadeOut("slow");
		  } 
		  else{
		  	 $( ".personaje" ).fadeIn("slow");
		  }

 
	});
	$( ".btn1" ).click(function() {
		$( ".negro1" ).fadeIn("slow");
		$( ".contp1" ).fadeIn("slow");
		$( ".foto" ).fadeIn("slow");
		$( ".next1" ).fadeIn("slow");
		$( ".contp2" ).fadeOut(1);
		$( ".contp3" ).fadeOut(1);
		$( ".next2" ).fadeOut(1);
		$( ".prev1" ).fadeOut(1);
		$( ".contp2" ).fadeOut(1);
	});
	$( ".cerrar" ).click(function() {
		$( ".bgNegro" ).fadeOut("slow");
	});

	$( ".next1" ).click(function() {
		$( ".next1" ).fadeOut("slow");
		$( ".contp1" ).fadeOut("slow");
		$( ".foto" ).fadeOut("slow");
		$( ".next2" ).fadeIn("slow");
		$( ".prev1" ).fadeIn("slow");
		$( ".contp2" ).delay( 800 ).fadeIn("slow");
	});
	$( ".next2" ).click(function() {
		$( ".next2" ).fadeOut("slow");
		$( ".contp2" ).fadeOut("slow");
		$( ".prev1" ).fadeOut("slow");
		$( ".prev2" ).fadeIn("slow");
		$( ".contp3" ).delay( 800 ).fadeIn("slow");
	});
	$( ".prev1" ).click(function() {
		$( ".next2" ).fadeOut("slow");
		$( ".contp2" ).fadeOut("slow");
		$( ".prev1" ).fadeOut("slow");
		$( ".foto" ).delay( 800 ).fadeIn("slow");
		$( ".next1" ).fadeIn("slow");
		$( ".contp1" ).delay( 800 ).fadeIn("slow");
	});
	$( ".prev2" ).click(function() {
		$( ".contp3" ).fadeOut("slow");
		$( ".prev2" ).fadeOut("slow");
		$( ".next2" ).fadeIn("slow");
		$( ".prev1" ).fadeIn("slow");
		$( ".contp2" ).delay( 800 ).fadeIn("slow");
	});

	$( ".btn2" ).click(function() {
		$( ".negro2" ).fadeIn("slow");
	});
	$( ".lapiz" ).css( {left:'582px',top:'104px', });
	$( ".cafe" ).css( {left:'22px',top:'214px', });
	$( ".dulce" ).css( {left:'572px',top:'532px', });
	$( ".cel" ).css( {left:'402px',top:'442px', });
	$( ".lentes" ).css( {left:'42px',top:'484px', });
	$( ".teclado" ).css( {left:'222px',top:'234px', });

	var ctop = 204;
	var cleft = 482;
	var cnum = 45;
 
	$( ".cucaracha" ).css( {left: cleft ,top: ctop });

	$( ".arriba" ).click(function() {
		ctop +=-cnum ;$( ".click" ).fadeOut("slow");
		 $( ".cucaracha" ).css( {left: cleft ,top: ctop }).toggleClass("cucuno").addClass("cuc1").removeClass("cucdos").removeClass("cuctres").removeClass("cuccuatro").removeClass("cuc2").removeClass("cuc3").removeClass("cuc4");
	});
	$( ".abajo" ).click(function() {
		ctop +=cnum ;$( ".click" ).fadeOut("slow");
		 $( ".cucaracha" ).css( {left: cleft ,top: ctop }).toggleClass("cucdos").addClass("cuc2").removeClass("cucuno").removeClass("cuctres").removeClass("cuccuatro").removeClass("cuc1").removeClass("cuc3").removeClass("cuc4");
	});
	$( ".izquierda" ).click(function() {
		cleft +=-cnum ;$( ".click" ).fadeOut("slow");
		 $( ".cucaracha" ).css( {left: cleft ,top: ctop }).toggleClass("cuctres").addClass("cuc3").removeClass("cucuno").removeClass("cucdos").removeClass("cuccuatro").removeClass("cuc2").removeClass("cuc1").removeClass("cuc4");
	});
	$( ".derecha" ).click(function() {
		cleft +=cnum ;$( ".click" ).fadeOut("slow");
		 $( ".cucaracha" ).css( {left: cleft ,top: ctop }).toggleClass("cuccuatro").addClass("cuc4").removeClass("cucuno").removeClass("cucdos").removeClass("cuctres").removeClass("cuc2").removeClass("cuc3").removeClass("cuc1");
	});
	$( ".lentes,.cafe,.cel,.lapiz,.dulce").mousedown(function() {
		$( ".mover" ).fadeOut("slow");
	});


 	
});

 