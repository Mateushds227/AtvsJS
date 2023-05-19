import fs, { existsSync } from "fs";

var jogos = null

async function criar_api() {
    try {

        jogos = [{
            "id": "1",
            "Nome": "Call of Duty 2: Big Red One",
            "Desenvolvedora": "Treyarch,High , Voltage Software",
            "Publicadora": "Activision",
            "Lancamento": "1 de novembro de 2005"
        },

        {
            "id": "2",
            "Nome": "Call of Duty 3",
            "Desenvolvedora": "Treyarch , Exakt Entertainment (Wii)",
            "Publicadora": "Activision",
            "Lancamento": "7 de novembro de 2006"
        },

        {
            "id": "3",
            "Nome": "Call of Duty: World at War",
            "Desenvolvedora": "Treyarch",
            "Publicadora": "Activision",
            "Lancamento": "11 de novembro de 2008"
        },

        {
            "id": "4",
            "Nome": "Call of Duty: Black Ops",
            "Desenvolvedora": "Treyarch , n-Space (DS)",
            "Publicadora": "Activision",
            "Lancamento": "9 de novembro de 2010"
        },

        {
            "id": "5",
            "Nome": "Call of Duty: Black Ops II",
            "Desenvolvedora": "Treyarch",
            "Publicadora": "Activision",
            "Lancamento": "18 de Novembro de 2012"
        },

        {
            "id": "6",
            "Nome": "Call of Duty: Black Ops III ",
            "Desenvolvedora": "Treyarch",
            "Publicadora": "Activision",
            "Lancamento": "6 de novembro de 2015"
        },

        {
            "id": "7",
            "Nome": "Call of Duty: Black Ops 4",
            "Desenvolvedora": "Treyarch",
            "Publicadora": "Activision",
            "Lancamento": "12 de outubro de 2018"
        },

        {
            "id": "8",
            "Nome": "Call of Duty: Black Ops Cold War",
            "Desenvolvedora": "Treyarch , Raven Software",
            "Publicadora": "Activision",
            "Lancamento": "13 de novembro de 2020"
        },

        ]

        if (!fs.existsSync('./MODELS/jogos.json')) {
            fs.promises.writeFile(`./MODELS/jogos.json`, JSON.stringify(jogos, null, 2))
        }
        else {
            fs.unlink('./MODELS/jogos.json', function (err) {
                if (err) throw err;
            })

            fs.promises.writeFile(`./MODELS/jogos.json`, JSON.stringify(jogos, null, 2))
        }


    }
    catch (error) {
        console.log(error);
    }
}

export default { criar_api }