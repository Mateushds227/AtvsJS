window.addEventListener('load', fetchdados())
var dados = null
async function fetchdados() {
    const resposta = await fetch('https://api.imgflip.com/get_memes')
    dados = await resposta.json()
    dados = dados.data.memes
    console.log(dados)
    memes_total(dados)
}

var memes = document.querySelector("#memes")
console.log(memes)
id = null
nome = []
url = null

async function memes_total(dados) {
    for (dados of dados) {
        id = dados.id
        nome = dados.name
        url = dados.url
        legenda = null
        memes.innerHTML += `
        <div id="${id}" class = "memes" >
            <div>
                id  : ${id}
            </div>

            <div>
            <img src=${url}>
            </div> 

            <div>
                <h3> Nome do meme : ${nome}</h3>
            </div>
            
            </div>
            <div>
            <input type="text" id="legenda" name="legenda" placeholder="digite a legenda desse meme" size=100%>
            </div>
        <hr>
    `;
    }
}
