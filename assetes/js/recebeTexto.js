export function botaoAtivado(button) {
    const tipoDoBotao = button.dataset.botao

    if (ativaBotao[tipoDoBotao]) {
        ativaBotao[tipoDoBotao](button)
    }
}

const ativaBotao = {
    criptografia: button => criptografaMensagem(button),
    descriptografia: button => descriptografaMensagem(button)
}


const listaDeChaves = {
    a:'ai', 
    e:'enter', 
    i:'imes', 
    o:'obter', 
    u:'ufat'
}

function criptografaMensagem(elemen) {
    mostraTextoParaUsuario()
}

function descriptografaMensagem(elemen) {
    console.log('testando descriptografia')
}

const texto = document.querySelector('[data-texto="texto"]')
const Input = document.querySelector('[data-texto="resultado"]')

function pegaTextoDoUsuario() {
    const transformaEmArray = texto.value.split('')

    return transformaEmArray //tranformando em array
}

function mostraTextoParaUsuario() {
    const textoNovo = pegaTextoDoUsuario()

    const criptografandoMensagem = []
    textoNovo.forEach(element => {
        const regExp = /[aeiou]/g
        const newArrayString = element.replace(regExp, listaDeChaves[element])

        criptografandoMensagem.push(newArrayString)
    })


    const criptografado = criptografandoMensagem.join('') //transformando em string
    Input.value = criptografado
}




