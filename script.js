document
  .getElementById("addtodo")
  .addEventListener('input', function(event) {
    document
      .getElementById("resultat-addtodo")
      .innerHTML = event.target.value;
    
});
document
  .getElementById("type")
  .addEventListener('input', function(event) {
    document
      .getElementById("resultat-type")
      .innerHTML = event.target.value;
    
});