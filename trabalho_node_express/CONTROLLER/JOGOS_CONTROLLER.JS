import fs, { existsSync } from "fs";

var jogos = null

jogos = JSON.parse(fs.readFileSync("./MODELS/jogos.json"))


const postFunction = (req, res) => {
    const { Nome, Desenvolvedora, Publicadora, Lancamento } = req.body

    async function add_jogo() {
        let add_jogo_novo = null
        add_jogo_novo = {
            "id": `${Number(jogos[jogos.length - 1].id) + 1}`,
            "Nome": `${Nome}`,
            "Desenvolvedora": `${Desenvolvedora}`,
            "Publicadora": `${Publicadora}`,
            "Lancamento": `${Lancamento}`
        }
        jogos.push(add_jogo_novo)
        fs.writeFileSync(`./MODELS/jogos.json`, JSON.stringify(jogos, null, 2))
        res.send('Jogo adicionado com sucesso \r' + JSON.stringify(jogos[jogos[jogos.length - 1].id],null , 2))
    }
    add_jogo()
    
}

const deleteFunction = (req, res) => {
    const { id } = req.params

    function dlt_jogos(id) {
        let id_atual = jogos.findIndex((e) => e.id == id)
        console.log(jogos.findIndex((e) => e.id == id))       
        jogos.splice(id_atual, 1)
        fs.writeFileSync(`./MODELS/jogos.json`, JSON.stringify(jogos, null, 2))
        res.send('Jogo de id ' + id + ' foi deletado com sucesso')
    }

    dlt_jogos(id)
}

const getFunction = (req, res) => {

    const { id } = req.query
    console.log(id)
    function buscar_jogo() {

        let jogo_atual = jogos.findIndex((e) => e.id == id)
        let buscar_jogos = jogos.find(jogos => jogos.id == jogo_atual + 1)
        let psq_id = jogos.map(nome => nome.id == id)
        let indexpsq_id = psq_id.indexOf(true)
        if(indexpsq_id >= 0){
            return res.status(200).send(JSON.stringify(buscar_jogos))
        }else if (indexpsq_id < 0){
            return res.send(
                `Jogo não enconrado`
            )
        }   
    }
    buscar_jogo()

}

const putFunction = (req, res) => {
    const {id} = req.params, 
    {Nome, Desenvolvedora, Publicadora, Lancamento} = req.body,
    array_parms = [
        ["Nome", Nome], 
        ["Desenvolvedora", Desenvolvedora], 
        ["Publicadora", Publicadora], 
        ["Lancamento", Lancamento]
    ],
    elemento_index = jogos.findIndex((e) => e.id == id),
    elemento = jogos[elemento_index];
    array_parms.forEach((arr) => {
        if(arr[1] != undefined){
            elemento[arr[0]] = arr[1]
        }
    })
    fs.writeFileSync(`./MODELS/jogos.json`, JSON.stringify(jogos, null, 2));
    return res.send(`Jogo alterado com sucesso`)
}

export {getFunction , postFunction , putFunction , deleteFunction} 