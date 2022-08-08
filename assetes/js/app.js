import { botaoAtivado } from "./botaoAtivo.js"

const button = document.querySelectorAll('button')

button.forEach( botao => {
    botao.addEventListener('click', event => {
        botaoAtivado(event.target)
    })
})
