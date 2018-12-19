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

    $("#close-sidebar").click(function() {
        $(".page-wrapper").removeClass("toggled");
    });
    $("#show-sidebar").click(function() {
        $(".page-wrapper").addClass("toggled");
    });
});


function formatNumber(num) {
  num += '';
  var splitStr = num.split(',');
  var splitLeft = splitStr[0];
  var splitRight = splitStr.length > 1 ? ',' + splitStr[1] : '';
  var regx = /(\d+)(\d{3})/;
  while (regx.test(splitLeft)) {
     splitLeft = splitLeft.replace(regx, '$1' + ',' + '$2');
  }
  return '$' + splitLeft + splitRight;
}
