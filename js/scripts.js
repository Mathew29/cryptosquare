//Business logic
function determineLength(sentence) {
  var length = sentence.length;
  if(length <= 4) {
    var size = 2;
  } else if(length <= 9) {
    var size = 3;
  } else if(length <= 16) {
    var size = 4;
  } else if(length <= 25) {
    var size = 5;
  } else if(length <= 36) {
    var size = 6;
  } else if(length <= 49) {
    var size = 7;
  } else if(length <= 64) {
    var size = 8;
  } else if(length <= 81) {
    var size = 9;
  }
  return size;
}

function createSquare(size, sentence) {
  i = 0;
  var squareArray = []
  for(var col=0; col < size; col++) {
    for(var row=0; row < size; row++) {
      i++;
      squareArray.push(sentence[i])
    }
    (newRow + "i") = squareArray.splice()
    i++
  }
  console.log(squareArray);
  console.log(size % size === 0)
  return squareArray;
}

function checkSpaces(character) {
  return (character != " ");
}


//user interface
$(document).ready(function() {
  $("#user").submit(function(event) {
    event.preventDefault();
    var sentence = $("input#sentence").val();
    var squareSize = determineLength(sentence);
    var squareArray = createSquare(squareSize, sentence);

    $("#result").show();
    $("#result").text(result);
  });
});
