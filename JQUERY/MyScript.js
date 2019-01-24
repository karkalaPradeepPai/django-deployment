$('h1').click(function(){
$(this).text("I was changed");
})

$('li').click(function(){

  console.log('List was clicked')
})

$('input').eq(0).keypress(function(event){
  console.log(event);
})
