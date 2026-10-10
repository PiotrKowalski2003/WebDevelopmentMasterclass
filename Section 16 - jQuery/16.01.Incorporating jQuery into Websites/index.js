
// $(document).ready(function(){
//     $("h1").css("color", "red");
// });
// $("h1").addClass("big-title margin-50");
//
// $("button");

// $("h1").text("Bye");
//
// $("button").text("<em>Hey</em>");

// $("a").attr("href", "https://www.yahoo.com");
//
// $(document).keypress(function(e) {
//     $("h1").text(event.key);
// });

$("button").on("click", function () {
    //$("h1").slideUp();
    //$("h1").slideToggle();
    //$("h1").animate({opacity: 0.5});
    $("h1").slideUp().slideDown().animate({opacity: 0.5});
})