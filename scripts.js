let antesButton = document.getElementById('antes')
let depoisButton = document.getElementById('depois')
let container = document.querySelector('.container')
let item = container.querySelectorAll('.list .item')
let indicadores = document.querySelector('.indicadores')
let dots = indicadores.querySelectorAll('ul li')


let active = 0
let firstPosition = 0
let lastPosition = item.length - 1

item - 0
item - 1
item - 2

antesButton.onclick = () => {
    console.log("Botão antes")

    let itemOld = container.querySelector('.list .item.active')
    itemOld.classList.remove('active')

    active = active - 1 < firstPosition ? lastPosition : active - 1
    item[active].classList.add('active')

    let dotsOld = indicadores.querySelector('ul li.active')
    dotsOld.classList.remove('active')
    dots[active].classList.add('active')

    indicadores.querySelector('.numeros').innerHTML = '0' + (active + 1)

    atualizarFundo()
    atualizarLogo()
    atualizarTitulo()
    atualizarIcon()
}


function proximoItem() {

    let itemOld = container.querySelector('.list .item.active')
    itemOld.classList.remove('active')

    active = active + 1 > lastPosition ? 0 : active + 1
    item[active].classList.add('active')

    
    let dotsOld = indicadores.querySelector('ul li.active')
    dotsOld.classList.remove('active')
    dots[active].classList.add('active')

    indicadores.querySelector('.numeros').innerHTML = '0' + (active + 1)

    atualizarFundo()
    atualizarLogo()
    atualizarTitulo()
    atualizarIcon()
}

depoisButton.onclick = () => {
    console.log("Botão depois")
    proximoItem()
}

setInterval(proximoItem, 10000)


function atualizarFundo() {
    let cor = item[active].getAttribute("data-bg")
    container.style.backgroundImage = cor
}


function atualizarLogo() {
    let logo = item[active].getAttribute("data-logo")
    let logoElement = document.querySelector("#logo_ativa")
    logoElement.src = logo
}


function atualizarTitulo() {
    let titulo = item[active].getAttribute("data-title")
    document.title = titulo
}


function atualizarIcon() {
    let iconSrc = item[active].getAttribute("data-icon")

    let favicon = document.querySelector("link[rel='icon']")

    if (!favicon) {
        favicon = document.createElement("link")
        favicon.rel = "icon"
        document.head.appendChild(favicon)
    }

    favicon.href = iconSrc
}
