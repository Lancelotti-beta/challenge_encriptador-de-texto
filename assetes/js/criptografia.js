import { pegaTextoDoUsuario } from "./recebeTexto.js"

const criptografia = {
    a: 'ai', 
    e: 'enter', 
    i: 'imes', 
    o: 'ober',
    u: 'ufat'
}

const descriptografia = {
    ai: 'a', 
    enter: 'e', 
    imes: 'i', 
    ober: 'o',
    ufat: 'u'
}


const inputResultado = document.querySelector('[data-texto="resultado"]')

function textoCriptografado() {
    const regExp = /(a)|(e)|(i)|(o)|(u)/g

    const textoRecebidoCriptografia = pegaTextoDoUsuario(document.querySelector('[data-texto="texto"]'))
    const frase = textoRecebidoCriptografia

    const criptografandoMensagem = frase.replace(regExp, letra => {
        return criptografia[letra]
    })


    const criptografado = criptografandoMensagem
    inputResultado.value = criptografado
}


//gaitobter
function textoDescriptografado() {
    const regExp = /(ai)|(enter)|(imes)|(ober)|(ufat)/g

    const textoRecebidoDescriptgrafia = pegaTextoDoUsuario(document.querySelector('[data-texto="texto"]'))
    const criptografia = textoRecebidoDescriptgrafia

    const descriptografandoMensagem = criptografia.replace(regExp, chave => {
        //console.log(chave)
        return descriptografia[chave]
    })
    
    const descriptografado = descriptografandoMensagem
    inputResultado.value = descriptografado
}


export {
    textoCriptografado,
    textoDescriptografado 
} 