

const carouselJs = (id) => {
    const fila = document.getElementById(`move${id}`);
    const flechaIzquierda = document.getElementById(`flecha-izquierda${id}`);
    const flechaDerecha = document.getElementById(`flecha-derecha${id}`);


    // ? ----- ----- Event Listener para la flecha derecha. ----- -----
    flechaDerecha.addEventListener('click', () => {
        fila.scrollLeft += fila.offsetWidth;
    });

    // ? ----- ----- Event Listener para la flecha izquierda. ----- -----
    flechaIzquierda.addEventListener('click', () => {
        fila.scrollLeft -= fila.offsetWidth;
    });  
}


export default carouselJs