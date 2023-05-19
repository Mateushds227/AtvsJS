produtos = []
o = 0
function inicio() {
    let escolha = parseInt(prompt("Selecione uma das opções \r 1 – Incluir Produto \r 2 – Vender Produto \r 3 – Atualizar Estoque \r 4 – Pesquisar Produto \r 5 – Sair do Sistema"))
    if (!(isNaN(escolha)) && escolha < 6 && escolha > 0 ) {
        switch (escolha) {
            case 1:
                incluir()
                break
            case 2:
                vender()
                break
            case 3:
                atualizar()
                break
            case 4:
                pesquisar()
                break
            case 5:
                alert("Obrigado por usar o nosso sistema")
                break
        }
    }
    else {
        alert("Coloque um numero valido")
        inicio()
    }
}

function retornaProduto(nome, valor, quantidade){
    const produto = {
        nome: "",
        valor: 0,
        quantidade : 0
    }
    return produto;
}

function incluir() {
    i = 0
    produtos.push(retornaProduto("", 0, 0))
    produtos[o].nome = (prompt("Qual o nome do produto ?"))
    pesquisar_nome = produtos[o].nome
    nome_pesqui = produtos.map(nome => nome.nome == pesquisar_nome)
    nome_unico = nome_pesqui.indexOf(true)
    if (nome_unico == o ) {
        produtos[o].quantidade = (parseInt(prompt("Qual a quantidade do produto ?")))
        produtos[o].valor = (parseInt(prompt("Qual o preço do produto ?")))
        o++
    }
    else if (nome_unico != o) {
        alert("Esse nome ja esta sendo utilizado")
        produtos.splice([o],1)
    }
    i = parseInt(prompt("Deseja colocar mais um produto ? \r Digite 1 para continuar incluindo produtos \r Digite o numero 0 para voltar ao inicio."))
    if (i == 0) {
        inicio()
    }
    else {
        incluir()
    }
}

function vender() {
    nome_prod = prompt("Qual o nome do produto a ser vendido ?")
    procura_pro = produtos.map(nome => nome.nome == nome_prod)
    in_nome = procura_pro.indexOf(true)
    if (in_nome >= 0) {
        qtd_prod = parseInt(prompt("Qual a quantidade a ser comprada ?"))
        if (produtos[in_nome].quantidade >= qtd_prod) {
            produtos[in_nome].quantidade -= qtd_prod
            valor_pagar = produtos[in_nome].valor * qtd_prod
            alert("Nome do produto a ser vendido: "+ produtos[in_nome].nome + " \r Quantidade do produto a ser vendido: " + qtd_prod + "\r Valor a ser pagado: " + valor_pagar) 
        } else if (produtos[in_nome].quantidade < qtd_prod) {
            alert("Não tem produto suficiente no estoque\r Estoque atual " + produtos[in_nome].quantidade)
        }
        x = parseInt(prompt("Deseja comprar mais um produto ? \r Digite 1 para continuar vendendo\r Digite o numero 0 para volar ao inicio."))
        if (x == 0) {
            inicio()
        }
        else if (x != 0) {
            vender()
        }
        else if (in_nome < 0) {
            alert("O produto não exite no estoque")
            x = parseInt(prompt("Deseja comprar mais um produto ? \r Digite 1 para continuar vendendo\r Digite o numero 0 para volar ao inicio."))
            if (x == 0) {
                inicio()
            }
            else if (x != 0) {
                vender()
            }
        }



    }
}
function atualizar() {
    y = 0
    atlz_prod = prompt("Qual o nome do produto a ser atualizado ?")
    achar_pro = produtos.map(nome => nome.nome == atlz_prod)
    index_nome = achar_pro.indexOf(true)
    if (index_nome >= 0) {
        atlz_qtd = parseInt(prompt("Qual a quantidade a ser adicionada ?"))
        produtos[index_nome].quantidade += atlz_qtd
        alert("O produto " + produtos[index_nome].nome + " esta com " + produtos[index_nome].quantidade + " no estoque\r a quantidade adicionada é de " + atlz_qtd)
        y = parseInt(prompt("Deseja comprar mais um produto ? \r Digite 1 para continuar atualizando \r Digite o numero 0 para voltar ao inicio."))
        if (y == 0) {
            inicio()
        }
        else if (y != 0) {
            atualizar()
        }
    }
    else if (index_nome < 0) {
        alert("O produto não exite no estoque")
        y = parseInt(prompt("Deseja comprar mais um produto ? \r Digite 1 para continuar atualizando \r Digite o numero 0 para voltar ao inicio."))
        if (y == 0) {
            inicio()
        }
        else if (y != 0) {
            atualizar()
        }
    }
}

function pesquisar() {
    psq_prod = prompt("Qual o nome do produto a ser pesquisado ?")
    psq_pro = produtos.map(nome => nome.nome == psq_prod)
    indexpsq_nome = psq_pro.indexOf(true)
    if (indexpsq_nome >= 0) {
        alert("Nome do produto : " + produtos[indexpsq_nome].nome + "\r Quantidade do produto : " + produtos[indexpsq_nome].quantidade + "\r Valor :" + produtos[indexpsq_nome].valor)
        y = parseInt(prompt("Deseja comprar mais um produto ? \r Digite 1 para continuar atualizando \r Digite o numero 0 para voltar ao inicio."))
        if (y == 0) {
            inicio()
        }
        else if (y != 0) {
            atualizar()
        }
    }
    else if (indexpsq_nome < 0) {
        alert("O produto não exite no estoque")
        y = parseInt(prompt("Deseja comprar mais um produto ? \r Digite 1 para continuar atualizando \r Digite o numero 0 para voltar ao inicio."))
        if (y == 0) {
            inicio()
        }
        else if (y != 0) {
            pesquisar()
        }
    }
}

inicio()
