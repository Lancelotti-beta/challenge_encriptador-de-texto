import { textoCriptografado, textoDescriptografado } from "./criptografia.js"
import { pegaTextoDoUsuario } from "./recebeTexto.js"

export function botaoAtivado(button) {
    const tipoDoBotao = button.dataset.botao

    if (ativaBotao[tipoDoBotao]) {
        ativaBotao[tipoDoBotao](button)
    }
}

const ativaBotao = {
    criptografia: button => criptografaMensagem(button),
    descriptografia: button => descriptografaMensagem(button),
    copiar: button => copiarTexto(button)
}

function criptografaMensagem(elemen) {
    textoCriptografado()
}

function descriptografaMensagem(elemen) {
    textoDescriptografado()
}

function copiarTexto() {
    const textoCopiado = document.querySelector('[data-texto="resultado"]')

    
    navigator.clipboard.readText().
        then((clipText) => console.log(clipText))

    console.log('testando botao de copiar')
}
