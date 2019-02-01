// Quand un champ a le focus, définir sa bordure à "1px solid green". Quand le champ perd le focus, définir la bordure à "1px solid red"

   $('input').focusin(function() {
     $('#lastName').text($(this).css('border', '1px solid green'));
   });
   $('input').focusout(function() {
     $('#firstName').text($(this).css('border', '1px solid red'));
   });



// -----------------VERSION DE SEB ---------------------------
//    $(function() {
//          var focusColor;
//          $('input').focus( function() {
//            $('input').css('border','1px solid red');
//            focusColor = '#' + $(this).attr('id');
//            $(focusColor).css('border','1px solid green');
//          });
//        });
