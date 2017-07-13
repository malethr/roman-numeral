$(document).ready(function(){
  $(".roman-form").submit(function(event){
    event.preventDefault();

    var userInput = $("#userNumber").val();

    $("#result").text(userInput);

  });
});
