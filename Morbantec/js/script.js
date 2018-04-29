/*
$('.message a').click(function(){
$('form').animate({height:"toggle", opacity:"toggle"},"slow")
});
*/

/* informacion de planes paginas web*/
$(document).ready(function(){
    $("#pwi").click(function(){
        $(".pwi").animate({
            height: 'toggle'
        });
    });
});

$(document).ready(function(){
    $("#pwis").click(function(){
        $(".pwis").animate({
            height: 'toggle'
        });
    });
});

$(document).ready(function(){
    $("#pwt").click(function(){
        $(".pwt").animate({
            height: 'toggle'
        });
    });
});

$(document).ready(function(){
    $("#pwta").click(function(){
        $(".pwta").animate({
            height: 'toggle'
        });
    });
});

/* Link de menu */

$(document).ready(function(){
    $('.home').hide(); 
     $('#home').css({'color':'#e8491d', 'font-weight': 'bold'});
    $('.home').show(1000);
       $("#home").on( "click", function() {
        $('.home').show(1000);
        $('.services').hide();   
        $('.about').hide();  
        $('#home').css({'color':'#e8491d', 'font-weight': 'bold'});
        $('#about').css({'color':'#ffffff', 'font-weight': 'bold'});
        $('#services').css({'color':'#ffffff', 'font-weight': 'bold'});
              
        
     });
    });

    $(document).ready(function(){
        $("#about").on( "click", function() {
            $('.about').show(1000);
            $('.home').hide();   
            $('.services').hide();   
            $('#about').css({'color':'#e8491d', 'font-weight': 'bold'});
            $('#home').css({'color':'#ffffff', 'font-weight': 'bold'});
            $('#services').css({'color':'#ffffff', 'font-weight': 'bold'});
             
            
         });
        });

$(document).ready(function(){
    $("#services").on( "click", function() {
        $('.services').show(1000);
        $('.home').hide();   
        $('.about').hide();    
        $('#services').css({'color':'#e8491d', 'font-weight': 'bold'});
        $('#home').css({'color':'#ffffff', 'font-weight': 'bold'});
        $('#about').css({'color':'#ffffff', 'font-weight': 'bold'});
         
     });
    });
/*
    $(document).ready(function(){
        $("#services").on( "click", function() {
            $('.services').fadeIn("slow");
            $('.index').hide();   
            $('#target').hide();    
            
         });
        });
    

    $(document).ready(function(){
        $("#services").on( "click", function() {
            $(".services").animate({
                height: 'toggle'
            });
            $('.index').hide();   
            $('#target').hide();    
            
         });
        });
        */

/* cambio de IMAGENES de background*/

       var index = 0;

       var listaimg = ["./imag/camaras.jpg", './imag/tecnico.jpg','./imag/showcase.jpg'];
       let z =-400;
   
   $(function() {
     
       setInterval(changeImage, 4000);
     
   });
   
   function changeImage() {
     
    
      $('#showcase').css({
          "background": 'url(' + listaimg[index] + ')',
          'background-repeat': 'no-repeat ',
        'background-position':'center'});
                    
      index++;
                     
      if(index == 3)
         index = 0;
       
       
   }
   