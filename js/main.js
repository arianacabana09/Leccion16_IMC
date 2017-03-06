function calcularIMC(){
    var peso, altura, imc;
    peso=document.getElementById("peso").value;
    altura=document.getElementById("talla").value/100;
    imc=peso/Math.pow(altura,2);
    alert( " IMC :"  + imc.toFixed(2));
  }
