import {promises as fs } from "fs";

var varText;

async function init() {
    try {
        varText = "inserindo texto";
        await fs.writeFile("novoArquivo.txt", varText)
    } catch (error) {
        console.log(error)
    }
}

export default{init}