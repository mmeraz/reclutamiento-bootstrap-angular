jQuery(function($) {

    $(".sidebar-dropdown > a").click(function() {
        $(".sidebar-submenu").slideUp(200);
        if (
            $(this)
            .parent()
            .hasClass("active")
        ) {
            $(".sidebar-dropdown").removeClass("active");
            $(this)
                .parent()
                .removeClass("active");
        } else {
            $(".sidebar-dropdown").removeClass("active");
            $(this)
                .next(".sidebar-submenu")
                .slideDown(200);
            $(this)
                .parent()
                .addClass("active");
        }
    });

    // $("#close-sidebar").ready(function() {
    //   $( ".page-wrapper" ).click(function() {
    //     $( this ).toggleClass( "toggled" );
    //   });
    // });

    // $("#close-sidebar").click(function() {
    //     $(".page-wrapper").removeClass("toggled");
    // });
    // $("#show-sidebar").click(function() {
    //     $(".page-wrapper").addClass("toggled");
    // });
});

//Notificaciones
function notificarme() {

  if (window.Notification) {
    console.log('Este navegador no soporta notificaciones');
    return;
  }
  if( Notification.permission === 'granted') {
    new Notification ( 'Hola Mundo! - granted');
  } else if(Notification.permission !== 'denied' || Notification.permission === 'default'){
    Notification.requestPermission(function(permission){
      console.log(permission);
      if( permission ==='granted') {
        new Notification ('Hola mundo! - pregunta');
      }
    });
  }
}

notificarme();
