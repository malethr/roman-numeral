//Business Logic
var userInput = 0;
var obj = {1: 'I', 2: 'II', 3: 'III', 4:'IV', 5:'V', 6: 'VI', 7: 'VII', 8: 'VIII', 9: 'IX'}
var converter = function(userInput) {
  var userArray = Array.from(userInput);
  for (var i = 0; i < userArray.length; i++) {

      if (userArray.length === 0) {
        Object.values(obj)
      }
  }
}









// UI Logic
$(document).ready(function(){
  $(".roman-form").submit(function(event){
    event.preventDefault();

    userInput = $("#userNumber").val();
    var result = converter(userInput);

    $("#result").text(result);

  });
});

// var userInput = 0;
// var obj = {1: 'I', 2: 'II', 3: 'III', 4:'IV', 5:'V', 6: 'VI', 7: 'VII', 8: 'VIII', 9: 'IX'}
// var converter = function(userInput) {
//   var userArray = Array.from(userInput);
//   for (var i = 0; i < userArray.length; i++) {
//
//       if (userArray.length === 0) {
//         Object.values(obj)
//       }
//   }
// }
