const danzas = [danza1, danza2, danza3]
const carritoDeVestimenta = []

// Query  --> Dom
const danzaListContainer = document.querySelector('.menu')

// Modificar los elementos del HTML (nombre, distrito, precio, etc)
const cardNombre = document.querySelector('.cardNombre')
const cardDepartamento = document.querySelector('.cardDepartamento')
const cardProvincia = document.querySelector('.cardProvincia')
const cardDistrito = document.querySelector('.cardDistrito')
const cardReseña = document.querySelector('.cardReseña')
const cardAlquiler = document.querySelector('.cardAlquiler')
const cardImagen = document.querySelector('.cardImagen')
const cardCTA = document.querySelector('.cardCTA')  // Boton


// Creo una lista con los nombres
const renderizarListaDanza = () => {
    danzas.forEach((danza) => {
        const danzaButton = document.createElement('button')
        danzaButton.className = 'menuTab'
        danzaButton.setAttribute('data-id', danza.id)  //(Nombre del atributo,valor)
        danzaButton.innerHTML = `
            <span class="menuTabText">${danza.nombre}</span>
        `
        danzaListContainer.append(danzaButton)
    })
    agregarListenerBotones ()
}

// Para sacar los datos de la danza que yo clickie
const renderizarDatosDanza = (e) => {        // .El hijo mas cercano/ .data-id
    const danzaIdSelected = e.target.closest('.menuTab').getAttribute('data-id')
    const danzaSelected = danzas.find((danza) => danza.id == danzaIdSelected)
    
    //Cambio el html por los creados en el Array
    cardNombre.textContent = danzaSelected.nombre
    cardDepartamento.textContent = danzaSelected.departamento
    cardProvincia.textContent = danzaSelected.provincia
    cardDistrito.textContent = danzaSelected.distrito
    cardReseña.textContent = danzaSelected.reseña
    cardAlquiler.textContent = danzaSelected.alquiler 
//*cardLink.setAttribute('href', danzaSelected.url)  --> Para URL's
    cardImagen.setAttribute('src', danzaSelected.imagen)
    cardCTA.setAttribute('data-id', danzaSelected.id)
}


const agregarVestimenta = (e) => {
    const danzaIdSelected = e.target.getAttribute('data-id')
    const danzaSelected = danzas.find((danza) => danza.id == danzaIdSelected)
    carritoDeVestimenta.push(danzaSelected)
    localStorage.setItem('carritoDeVestimenta', JSON.stringify(carritoDeVestimenta) )
}


// Para sacar el ID y trabajar con ellos
const agregarListenerBotones = () => {
    const danzaButton = document.querySelectorAll('.menuTab')
    danzaButton.forEach((button) => {
        button.addEventListener('click', renderizarDatosDanza)
    })
}




// Event Listeners
cardCTA.addEventListener('click', agregarVestimenta)

// ejecuciones
renderizarListaDanza()


// Sumar total
const totalCarrito = () => {
    let sumaTotal = 0
    carritoDeVestimenta.forEach((carritoDeVestimenta) => {
        sumaTotal += carritoDeVestimenta.alquiler
    }
    )
    return sumaTotal
}

console.log(totalCarrito())


// Vaciar Carrito
const vaciarCarrito = () => {
    if (localStorage.getItem('carritoDeVestimenta')) {
        localStorage.removeItem('carritoDeVestimenta')
    }
    carritoDeVestimenta = []
    imprimirCarrito()
}

const vaciarCarritoBtn = document.querySelector('#vaciarCarrito')
vaciarCarritoBtn.addEventListener('click', vaciarCarrito)