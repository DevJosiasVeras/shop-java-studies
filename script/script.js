const addButton = document.querySelector('.itens')
const cart = document.querySelector('.cart-image')
const itensVar = document.querySelector('#itens')
let itens = 0

function Addcart() {
    if (itens < 99) {
        itens++
        addButton.innerHTML = itens
    }else{
        addButton.innerHTML = '99+'
    }
}

function RemoveCart() {
    if (itens >= 1) {
        itens--
        addButton.innerHTML = itens
    }else{
        alert('Impossivel retirar')
    }
}

cart.addEventListener('mouseover', () => {
    if (itens > 0) {
        itensVar.classList.toggle('itens-content')
    }

})


