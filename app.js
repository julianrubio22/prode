/*const accordion = document.getElementsByClassName('contentBx');
for ( i = 0; i < accordion.length; i++) {
    accordion[i].addEventListener('click', function() {
        this.classList.toggle('active');
    });
}

$(document).ready(function(){
    $(".label").click(function(){
      $(".content").slideToggle("slow");
    });
    console.log("has clickeado")
});*/
$("h1").on('click', function() {
    $(this).next("p").slideToggle('slow');
  });
  
  $(document).ready(function() {
    $("div").children("p").hide();
  })