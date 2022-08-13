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

function criptografaMensagem(element) {
    textoCriptografado()
}

function descriptografaMensagem(element) {
    textoDescriptografado()
}

function copiarTexto(element) {
    const textoCopiado = document.querySelector('[data-texto="resultado"]')
    const copiado = textoCopiado.value

    navigator.clipboard.writeText(copiado)
        //.then((resposta) => { console.log(resposta) })

    element.classList.add('ativo')
    setTimeout(() => element.classList.remove('ativo'), 1500)

    textoCopiado.value = ''
}
