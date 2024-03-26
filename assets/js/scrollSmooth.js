$(document).ready(function () {
  $("#js-circleArrow__wrap").on("click", function (event) {
    event.preventDefault();

    $("html, body").animate(
      {
        scrollTop: 0,
      },
      "smooth"
    );
  });
});
