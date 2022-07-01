
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
    let count = 0;
    var form = document.getElementById("formtodo");
    document.getElementById("your-id").addEventListener("click", function () {
      
     let toDo = document.forms.formtodo.elements.addtodo.value;
     let toDoType = document.forms.formtodo.elements.type.value;
  
     var container_div = document.getElementById('result');
     var count = container_div.getElementsByTagName('div').length;


     var test = document.createElement("div");
      test.setAttribute("id","test"+count);
      var element = document.getElementById("result");
      element.appendChild(test);
      var tag = document.createElement("h2");
      var text = document.createTextNode( toDo );
      tag.appendChild(text);
      var elements = document.getElementById("test"+count);
      elements.appendChild(tag); 
     
    });

  





  