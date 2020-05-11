
function goTo(pageName){
  window.location.href = pageName;
}

function mouseInImage(event){
  document.getElementById(event.target.id).style="filter:blur(2px)";
}

function mouseOutImage(event){
  document.getElementById(event.target.id).style="filter:blur(0px)";
}

$( "#image1" ).on( "click", function() {
  goTo("snake.html");
});

$( "#image2" ).on( "click", function() {
  goTo("robotica.html");
});




$(".tabular-image").hover(mouseInImage, mouseOutImage);

// $("#gitHub-logo").on("click", function(){
//   goTo("https://github.com/mastamysta");
// });
