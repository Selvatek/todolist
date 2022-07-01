
/*document
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
    
});*/

    // handle the form data
    var form = document.getElementById("formtodo");
    document.getElementById("your-id").addEventListener("click", function () {
      
     let toDo = document.forms.formtodo.elements.addtodo.value;
     let toDoType = document.forms.formtodo.elements.type.value;
      var test = document.createElement("div");
      test.setAttribute("id","test");
      var element = document.getElementById("result");
      element.appendChild(test);
      var tag = document.createElement("span");
      var text = document.createTextNode( toDo );
      tag.appendChild(text);
      var elements = document.getElementById("test");
      elements.appendChild(tag); 
    });

  





  