$("h1").css("color", "green");

$("input").keypress(function (event) {
  console.log(event.key);
  $("h1").text(event.key);
});

$("h1").mouseover(function () {
  // $("h1").hide();
  $("h1").slideUp().slideDown().animate({ opacity: 0.5 }).fadeOut();

  // $("h1").delay(1000).show(0);
  $("h1").delay(1000).fadeIn(1);
});
