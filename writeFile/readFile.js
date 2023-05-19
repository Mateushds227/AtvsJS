import { promises as fs} from "fs";

import op from "./writeFile.js"

op.init().then(()=>{
    readFile();
});

async function readFile(){
    try {
        const texto = await fs.readFile("novoArquivo.txt", "utf-8");
        console.log(texto)
    } catch (error) {
        console.log(error)
    }
}