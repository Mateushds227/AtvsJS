window.addEventListener("load", montar);

var div = document.querySelector("body");


//montar o html
function montar() {

  var r = document.querySelector("#red");
  var g = document.querySelector("#green");
  var b = document.querySelector("#blue");
  estrutura();
  //altera a cor
  function estrutura() {

    r.addEventListener("input", alterar);
    g.addEventListener("input", alterar);
    b.addEventListener("input", alterar);

    var r_text = document.querySelector("#redtext");
    var g_text = document.querySelector("#greentext");
    var b_text = document.querySelector("#bluetext");

    r_text.value = r.value;
    g_text.value = g.value;
    b_text.value = b.value;

    alterar()
  }

  function alterar(){
    div.style.backgroundColor = `rgb(${r.value},${g.value},${b.value})`;
    estrutura()
  }
}