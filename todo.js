//check off specific Todos by clicking

$("ul").on("click","li", function(){
  /*
  //if LI is gray
  if($(this).css("color") === "rgb(128, 128, 128)"){
      // turn it black
      $(this).css({color:"black",
      textDecoration:"none"
    });  
  }
  else{

      //turn it gray

    $(this).css({color:"gray",
    textDecoration:"line-through"
  });

}
*/

$(this).toggleClass("completed");
  

});

//click on X  to delete todo

$("ul").on("click","span",function(ev){
$(this).parent().fadeOut(1000,function(){
  $(this).remove();
});
ev.stopPropagation();

});


$("input[type='text'").keypress(function(ev){
  if(ev.which === 13){
//Grab new todo text from input
    var todoText= $(this).val();
    //create a new Li and add to ul
    $("ul").append("<li><span><i class='fas fa-trash-alt'></i> </span>" + todoText + "</li>");
    $(this).val("");

  }

});


$(".fa-plus-square").click(function(){
  $("input[type='text'").fadeToggle();

});