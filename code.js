console.log("hello!");

var btn = document.getElementById("btn");
btn.addEventListener("click", function() {
  console.log("clicked!");
  var input = document.getElementById("btn-input");
  console.log(input.value);
  var output = document.getElementById("btn-output");
  output.innerHTML = "Your name is: " + input.value;
});


var btn2 = document.getElementById("btn2");
btn2.addEventListener("click", function() {
  var input = document.getElementById("btn-input2");
  console.log(input.value);
  axios.get('https://wttr.in/' + input.value)
    .then(function(response) {
      console.log(response.data);
      var output = document.getElementById("btn-output2");
      output.innerHTML = response.data;
    })
    .catch(function(error) {
      console.log(error);
    });
});



