import fs, { existsSync } from "fs";
import readline from "readline"

var cidades = null
var estados = null
var capitais = null
var num_cidades = 0

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

inic()
pergunta()

async function inic() {

    try {
        if (!fs.existsSync('./regioes')) {
            fs.mkdirSync('./regioes');
        }

        estados = JSON.parse(await fs.promises.readFile("./arquivos_json/Estados.json"))
        cidades = JSON.parse(await fs.promises.readFile("./arquivos_json/Cidades.json"))
       capitais = JSON.parse(await fs.promises.readFile("./arquivos_json/capitais.json"))


        
        estados.forEach(estados => {
            let estados_cidades = []
            let captal_atual = null
            let regiao_atual = null
            num_cidades = 0

            capitais.forEach(capitais => {
                if(capitais.Sigla == estados.Sigla ){
                    regiao_atual = capitais.Região
                    captal_atual = capitais.Capital
                }
            })

            if (!fs.existsSync(`./regioes/${regiao_atual}`)) {
                fs.mkdirSync(`./regioes/${regiao_atual}`);
            }

            
            
            cidades.forEach(cidades => {
                if (cidades.Estado == estados.ID) {
                    estados_cidades.push(cidades)
                    num_cidades += 1

                }
            })
            estados.capital = captal_atual
            estados.qtn_cidades = num_cidades
            estados.cidades = estados_cidades


            fs.promises.writeFile(`./regioes/${regiao_atual}/${estados.Sigla}.json`, JSON.stringify(estados, null, 2))
        })
    }
    catch (error) {
        console.log(error)
    }
}

async function pergunta() {
    rl.question(" Digite 1 para descobrir quantos cidades tem o estado e sua captal  \n Digite 2 para descobrir os estados com maior cidades em ordem decrecente \n", um => {
        switch (um) {
            case "1":
                rl.question("Qual a UF do estado :  ", uf_buscar => {
                    for (estados of estados) {
                        let uf_estados = []
                        let qtn_cidade = null
                        let capital = null
                        if (uf_buscar === estados.Sigla) {
                            uf_estados.push(estados.Sigla)
                            qtn_cidade = estados.qtn_cidades
                            capital = estados.capital
                            console.log("Quantidade de cidade : "+qtn_cidade + "\nCapital : " + capital)
                        }
                        rl.close()
                    }
                })
                break
            case "2":
                let org_array = []
                for (estados of estados) {

                    org_array.push({
                        "UF" : estados.Sigla,
                        "Nome": estados.Nome,
                        "qtn_cidades": estados.qtn_cidades
                    })
                }
                let arrumar_array = org_array.sort(function (a, b) {
                    return a.qtn_cidades - b.qtn_cidades
                })
                let top5cidades = arrumar_array.slice(-5).reverse()
                console.log(top5cidades)
                break
        }
    })
}