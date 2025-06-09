$(document).ready(function () {
  $(".slide").click(function () {
    $(".slide").removeClass("active");
    $(this).addClass("active");
  });
});