import { textoCriptografado, textoDescriptografado } from "./criptografia.js"

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

function criptografaMensagem(elemen) {
    textoCriptografado()
}

function descriptografaMensagem(elemen) {
    console.log('testando descriptografia')
    textoDescriptografado()
}
