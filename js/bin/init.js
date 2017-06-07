(function($){
  $(function(){
    $('.button-collapse').sideNav();
    $('.carousel.carousel-slider').carousel({fullWidth: true});

  }); // end of document ready
})(jQuery); // end of jQuery name space



 function irA(direccion,id){
     		$.ajax({
	              type: "POST",
	              url: direccion+".html",
	              contentType: "application/x-www-form-urlencoded;charset=utf-8",    
	              success: function(data){
	                 $("#mainInclude").html(data);
	                 $(".active").removeClass("active");
	                 if(id.lastIndexOf("/")!=-1)id="m-"+id.substring(id.lastIndexOf("/")+1,id.length);
	                 $("#"+id).parent().addClass("active");
	                 $('ul.tabs').tabs(
                          { 'swipeable': true }
                      );
	                 $('.materialboxed').materialbox();

	           //       $( "#m-resume" ).on("click", function() {
	           //       	//$(".activa-animacion-1").click(function() {
				        // $('.element-1').toggleClass('element-1-change');
				        // $('.element-2').toggleClass('element-2-change');
				        // $('.blackText').addClass('black-text');
				        // $('.blackText').removeClass('white-text');
	           //       });
	           //       $("#m-home").on("click", function() {
	           //       	//$(".activa-animacion-1").click(function() {
				        // $('.element-1-change').toggleClass('element-1-change-back');
				        // $('.element-2-change').toggleClass('element-2-change-back');
				        // $('.blackText').removeClass('black-text');
				        // $('.blackText').addClass('white-text');
	           //       });
	                             			   
	                 ejecutarAfter(id);
	           	 },
				 error: function(data){
	                 $("#mainInclude").html("Pagina no existente.");
	                 
	           	 }
	        });
    }
     function ejecutarAfter(funcion){
           
           // $("#trama").addClass("trama-"+id2);
           var f2= funcion.substring(2,funcion.length);

           if(funcion=="m-resume"){	                  
						$('.activa-animacion-1').addClass('element-1-change');
				        $('.activa-animacion-2').addClass('element-2-change');
               			$('.blackText').removeClass('white-text');
				        $('.blackText').addClass('black-text');
				        Materialize.showStaggeredList('#staggered-test')
				        Materialize.fadeInImage('#staggered-test2');
				}else{
						$('.activa-animacion-1').removeClass('element-1-change');
				        $('.activa-animacion-2').removeClass('element-2-change');
               			$('.activa-animacion-1').removeClass('element-1-change2');
               			$('.activa-animacion-2').removeClass('element-2-change2');
				        $('.blackText').removeClass('black-text');
				        $('.blackText').addClass('white-text');
				        Materialize.showStaggeredList('#staggered-test')
				        Materialize.fadeInImage('#staggered-test2');				        
           }
			 if(funcion=="m-gallery"){
                 $('.brand-logo > img').attr("src", "imagenes/icono-ale-large-black.svg");
				 $('.activa-animacion-1').addClass('element-1-change2');
				 $('.activa-animacion-2').addClass('element-2-change2');
				 $('.blackText').addClass('black-text');
				 $('.blackText').removeClass('white-text');
			 }else{
                 $('.brand-logo > img').attr("src", "imagenes/icono-ale-large.svg");
				 $('.activa-animacion-1').removeClass('element-1-change2');
				 $('.activa-animacion-2').removeClass('element-2-change2');
				 $('.blackText').removeClass('black-text');
				 $('.blackText').addClass('white-text');
			 }

            if(funcion!="m-sistemas-encabezado" && funcion!="m-sistemas-contenido" && funcion!="m-sistemas-tablas"){
           		// $("#menuVertical, #barra, #color-scheme, #trama").removeClass();        
           		// $("#menuVertical, #barra, #color-scheme").addClass("top-bar bg-"+f2);
         		$("#titulo").empty();  
           		var name = $('#'+funcion).html();
           		$("#titulo").append(name); 
           		
           
			 }
			 if(funcion=="m-iconos" || funcion=="m-iconos-material" || funcion=="m-iconos-foundation"){	                  
				$('#barra2').load('biconos.html');
				}else{
				$("#barra2").empty();	
           }	        

            if(funcion!="m-iconos-material" && funcion!="m-iconos-foundation"){
           		// $("#menuVertical, #barra, #color-scheme, #trama").removeClass();        
           		// $("#menuVertical, #barra, #color-scheme").addClass("top-bar bg-"+f2);
         		$("#titulo").empty();  
           		var name = $('#'+funcion).html();
           		$("#titulo").append(name); 
			 }

     }
	
	 $(document).ready(function() {
			var paginaDefault= "home";			 
			
			//La primera vez que entra, va a la pagina default
			var pathname = window.location.href;
			if (pathname.indexOf("#")==-1)pathname=paginaDefault;
				else pathname = pathname.substring(pathname.indexOf("#")+1,pathname.length);
			var i = $('a[href="#'+pathname+'"]').attr("id");
			irA(pathname,i);
			
			$(window).bind( 'hashchange', function(e) {
				var hash = window.location.hash;
				var dire = hash.substring(1,hash.length);
				if(dire=='')dire=paginaDefault;
				
				var icono = $('a[href="#'+dire+'"]').hasClass("ignorar");

				if(dire!="panel1" && dire!="panel2" && dire!="ignorar" && !icono){
                    irA(dire,'m-'+dire);           
             }

			});
	});