
function goTo(pageName){
  window.location.href = pageName;
}

function mouseIn(){
  document.getElementById("tabular-image1").style="filter:blur(2px)";
}

function mouseOut(){
  document.getElementById("tabular-image1").style="filter:blur(0px)";
}

$( "#btn-learn" ).on( "click", function() {
  goTo("robotica.html");
});

$("#tabular-image1").on("click", function(){
  goTo("snake.html");
});

$("#tabular-image1").hover(mouseIn, mouseOut);

// $("#gitHub-logo").on("click", function(){
//   goTo("https://github.com/mastamysta");
// });
