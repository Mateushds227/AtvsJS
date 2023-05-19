window.addEventListener("load", start);

var comidas = [];
var alimento = null;
var isEditing = false;
var index_a = null;
var valor_ps = null;
var imcr = null
var stop = 0;

function start() {
    alimento = document.querySelector("#alimento");
    valor_ps = document.querySelector("#peso");
    input_altura = document.querySelector("#altura");
    imcr = document.querySelector("#imc");
    preventFormSubmit();
    ativar_input();
    render();
}

function preventFormSubmit() {
    function handleFormSubmit(event) {
        event.preventDefault();
    }
    var form = document.querySelector("form");
    form.addEventListener("submit", handleFormSubmit);
}

function ativar_input() {
    function insertName(newName) {
        comidas.push(newName);
        render();
    }
    function updateName(newName) {
        comidas[index_a] = newName;
        render();
    }
    function handleTyping(event) {
        if (event.key === "Enter") {
            if (isEditing && event.target.id == "alimento" && alimento.value != ' ') {
                updateName(event.target.value);
                imcr.innerHTML = "";
            } else if (event.target.id == "alimento" && alimento.value != ' ') {
                insertName(event.target.value);
                imcr.innerHTML = "";

            }
            if (valor_ps != ' ' && event.target.id == "peso") {

                imc(valor_ps.value, input_altura.value);

            }
            isEditing = false;
            clearInput();
        }
    }
    alimento.focus();
    valor_ps.addEventListener("keyup", handleTyping);
    alimento.addEventListener("keyup", handleTyping);

}

function imc(peso, altura) {
    var calculo = (peso / (altura * altura));
    var result = Intl.NumberFormat('pt-br', { minimumFractionDigits: 2 }).format(calculo);
    if (calculo < 18.5) {
        imcr.innerHTML = "Seu IMC é " + result + "<br>Classificação: Magreza";
        imcr.style.backgroundColor = "rgba(155,218,235,255)";
    } else if (calculo > 18.5 && calculo <= 24.9) {
        imcr.innerHTML = "Seu IMC é " + result + "<br>Classificação: Saudavel";
        imcr.style.backgroundColor = "rgba(68,209,133,255)";
    } else if (calculo > 24.9 && calculo <= 29.9) {
        imcr.innerHTML = "Seu IMC é " + result + "<br>Classificação: Sobrepeso";
        imcr.style.backgroundColor = "rgba(250,218,143,255)";
    } else if (calculo > 29.9 && calculo <= 34.9) {
        imcr.innerHTML = "Seu IMC é " + result + "<br>Classificação: Obesidade Grau I";
        imcr.style.backgroundColor = "rgba(239,166,62,255)";
    } else if (calculo > 34.9 && calculo <= 39.9) {
        imcr.innerHTML = "Seu IMC é " + result + "<br>Classificação: Obesidade Severa Grau II";
        imcr.style.backgroundColor = "rgba(246,100,100,255)";
    } else {
        imcr.innerHTML = "Seu IMC é " + result + "<br>Classificação: Obesidade Mórbita Grau III";
        imcr.style.backgroundColor = "rgba(218,100,246,255)";

    }
    clearInput();
}

function render() {
    function createDeleteButton(index) {
        function deleteName() {
            comidas.splice(index, 1);
            render();
        }
        var button = document.createElement("button");
        button.classList.add("deleteButton");
        button.textContent = "x";
        button.addEventListener("click", deleteName);
        return button;
    }
    function createSpan(currentName, index) {

        function editItem() {
            alimento.value = currentName;
            alimento.focus();
            isEditing = true;
            index_a = index;
        }
        var span = document.createElement("span");
        span.classList.add("clickable");
        span.textContent = currentName;
        span.addEventListener("click", editItem);

        return span;
    }
    var divNames = document.querySelector("#names");
    divNames.innerHTML = "";

    var tr = document.createElement("tr");


    divNames.innerHTML += `
  <tr>
  <td>
      Segunda-feira
  </td>
  <td>
      Terça-feira
  </td>
  <td>
      Quarta-feira
  </td>
  <td>
      Quinta-Feira
  </td>
  <td>
      Sexta-feira
  </td>
  <td>
      Sabado
  </td>
  <td>
      Domingo
  </td>
</tr>
  `
    divNames.appendChild(tr);

    for (var i = 0; i < comidas.length; i++) {
        var currentName = comidas[i];
        var td = document.createElement("td");
        var button = createDeleteButton(i);
        var span = createSpan(currentName, i);
        td.appendChild(button);
        td.appendChild(span);


        if (i < 7) {
            tr.appendChild(td);
        } else {
            if (i == 34) {
                alimento.style.visibility = "hidden";
            }

            if (i % 7 == 0) {
                var tr = document.createElement("tr");
            }

            tr.appendChild(td);
            divNames.appendChild(tr)


        }

    }


    clearInput();
}
function clearInput() {
    alimento.value = " ";
    input_altura.value = " ";
    valor_ps.value = " ";
    alimento.focus();
}
