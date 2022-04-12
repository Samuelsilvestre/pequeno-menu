
let Pedido = []

function Frango(){
    document.getElementById('frango').style.borderColor = 'blue'
    Pedido.push('frango com milho')
    
}

function Salmao(){
    document.getElementById('salmao').style.borderColor = 'blue'
    Pedido.push('salmão com brocolis')
}

function Carne(){
    document.getElementById('carne').style.borderColor = 'blue'
    Pedido.push('carne com batata')
}
function Finalizar(){
    Pedido
    alert(Pedido)
}


