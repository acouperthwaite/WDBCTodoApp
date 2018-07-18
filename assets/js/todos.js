// check off specific todos by clicking
// $("li").click(function(){
//   $(this).toggleClass("completed");
// }); // this code doesn't add listeners to new li, only to existing li
//instead add listener on the ul targetting the li so it affects all future li
$("ul").on("click","li",function(){
  $(this).toggleClass("completed");
});

//click on x to delete todo
$("ul").on("click", "span", function(event){
    $(this).parent().fadeOut(500, function(){ //note "this" here refers to the span
      $(this).remove(); //note "this" here refers to the li here
    }); //removes the parent li that the span is in
    event.stopPropagation(); //stops event from bubbling up to parent objects
});

$("input[type='text']").keypress(function(event){
  if (event.which === 13){
    //enter key is 13
    todoText = $(this).val();
    $(this).val("");
    //create new li and add to ul
    $("ul").append(`<li><span><i class="fa fa-trash"></i></span> ${todoText}</li>`);
  }
});

$(".fa-plus").click(function(){
  $("input[type='text']").fadeToggle();
});
