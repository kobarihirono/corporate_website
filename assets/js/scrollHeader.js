$(document).ready(function () {
  $(window).scroll(function () {
    var $header = $("#js-header");

    if ($(this).scrollTop() > 0) {
      $header.addClass("js-header-bg");
    } else {
      $header.removeClass("js-header-bg");
    }
  });
});
