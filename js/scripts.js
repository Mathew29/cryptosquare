

//user interface
$(document).ready(function() {
  $("#user").submit(function(event) {
    event.preventDefault();
    var sentence = $("input#sentence").val();
    var result = conversion(sentence);
    $("#result").show();
    $("#result").text(result);
  });
});
