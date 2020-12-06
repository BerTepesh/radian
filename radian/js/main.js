$(".ham-menu-trigger").click(function() {
  $(".ham-menu").toggleClass("active");
  $(".ham-menu-trigger").toggleClass("ham-menu-trigger_close");
  $("body").toggleClass("fixed");
});
$(document).mouseup(function (e){
  var div = $(".ham-menu");
  var div2 = $(".ham-menu-trigger");
  if (!div.is(e.target) && !div2.is(e.target) && div.has(e.target).length === 0) { 
    div.removeClass("active");
    $(".ham-menu-trigger").removeClass("ham-menu-trigger_close");
    $("body").removeClass("fixed");
  }
});
