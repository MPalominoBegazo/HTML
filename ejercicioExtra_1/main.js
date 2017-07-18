//var btnCalcular = document.getElementById("calcular");

 function btnCalcular() {
  var celsius = document.getElementById("celsius").value;
  convertirCtoF(celsius);

};

function convertirCtoF(celsius){
    var resultadoDiv=document.getElementById("resultado");
    var far=0;
    far = ((9/5)* celsius + 32);
    resultadoDiv.innerHTML = far;

}