import { pegaTextoDoUsuario } from "./recebeTexto.js"

const criptografia = {
    a: 'ai', 
    e: 'enter', 
    i: 'imes', 
    o: 'obter', 
    u: 'ufat'
}

const descriptografia = {
    ai: 'a', 
    enter: 'e', 
    imes: 'i', 
    obter: 'o', 
    ufat: 'u'
}


const inputResultado = document.querySelector('[data-texto="resultado"]')

function textoCriptografado() {
    const textoRecebidoCriptografia = pegaTextoDoUsuario(document.querySelector('[data-texto="texto"]'))
    const criptografandoMensagem = []

    textoRecebidoCriptografia.forEach(element => {
        const regExp = /[aeiou]/g
        const newArrayString = element.replace(regExp, criptografia[element])

        criptografandoMensagem.push(newArrayString)
    })


    const criptografado = criptografandoMensagem.join('') //transformando em string
    inputResultado.value = criptografado
}


//gaitobter
function textoDescriptografado() {
    const regExp = /(ai)|(enter)|(imes)|(obter)|(ufat)/gi

    const textoRecebidoDescriptgrafia = document.querySelector('[data-texto="texto"]').value
    const frase = textoRecebidoDescriptgrafia

    const descriptografandoMensagem = frase.toString().replace(regExp, captura => {
        return descriptografia[captura]
    }) 
    
    const descriptografado = descriptografandoMensagem//.join('') //transformando em string
    inputResultado.value = descriptografado
}


export {
    textoCriptografado,
    textoDescriptografado 
} 