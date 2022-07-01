
document
  .getElementById("addtodo")
  .addEventListener('input', function(event) {
    document
      .getElementById("result-addtodo")
      .innerHTML = event.target.value;
    
});
document
  .getElementById("type")
  .addEventListener('input', function(event) {
    document
      .getElementById("result")
      .innerHTML = event.target.value;
    
});
/*var tag = document.createElement("div, att");
   var text = document.createTextNode("Tutorix is the best e-learning platform");
   tag.appendChild(text);
   var element = document.getElementById("result");
   element.appendChild(tag); */