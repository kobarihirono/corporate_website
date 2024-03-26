$(document).ready(function () {
  $("#js-hamburger").click(function () {
    $("#js-hamburger-nav").toggleClass("js-ham-nav-active");
    $(this).toggleClass("js-ham-active");
  });
});
