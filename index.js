//jQuery()
$(document).ready(function () {
  $("h1").addClass("margin-50 big-title");
  console.log($("h1").css("color"));
  // $("h1").removeClass("big-title");// margin-50");
  $("button");


$("h1").text("Greetings Planet");
$("button").html("<em> I am benjamin button</em> ");

});


console.log($("img").attr("src"));
$("a").attr("href", "https://yahoo.com");

$("h1").click(function () {
  $("h1").css("color", "purple");
});

// for(var  i = 0 ; i < 5 ; i++)
// {
//   document.querySelectorAll("button")[i].addEventListener("click", function () {
//   document.querySelector("h1").style.color = "purple";
// });
// }
$("button").click(function () {
  $("h1").css("color", "purple");
});

$("input").keypress(function (event) {
  $("h1").text(event.key);
});

//any dom event
$("h1").on("mouseover", function() {
  $("h1").css("color", "purple");
});

// $("button").remove();

$("button").on("click", function () {
  // $("h1").fadeToggle();
  //.hide()
  //.show()
  //.fadeOut()
  //.fadeIn()
    //.slideToggle()

  //only numbers
  $("h1").slideUp().slideDown().animate({opacity: 0.5})
  //.animate({margin: 10%});
});

//before, after, prepend, append
