console.log('Me siga no instagram: https://www.instagram.com/japu431')
function verificar() {
    var n1 = document.getElementById("n1");
    var n2 = document.getElementById("n2");
    var n3 = document.getElementById("n3");
    var n4 = document.getElementById("n4");
    var n5 = document.getElementById("n5");
    var Resultado = document.getElementById("res");
    

    if(n1*n2*n3*n4*n5 === Resultado) {
     
    } 
          resetar();
}

function resetar() {
    var x1 = Math.floor(Math.random()*100);
    var x2 = Math.floor(Math.random()*100);
    var x3 = Math.floor(Math.random()*100);
    var x4 = Math.floor(Math.random()*100);
    var x5 = Math.floor(Math.random()*100);
    document.getElementById("n5").value = "";
    document.getElementById("n1").innerHTML = x1;
    document.getElementById("n2").innerHTML = x2;
    document.getElementById("n3").innerHTML = x3;
    document.getElementById("n4").innerHTML = x4;
  }  

