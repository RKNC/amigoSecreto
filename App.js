let listaAmigos = []; // Lista que almacena los nombres de los participantes
let amigosSorteados = []; // Lista que registra los amigos ya sorteados

// Función para agregar un nuevo amigo a la lista
function incluirAmigo() {
    const input = document.getElementById('amigo');
    const nombre = input.value.trim();

    if (!nombre) {
        alert('Ingrese un nombre válido.');
        return;
    }

    if (listaAmigos.includes(nombre)) {
        alert('Este nombre ya ha sido agregado.');
        return;
    }

    listaAmigos.push(nombre);
    actualizarListaAmigos();
    input.value = '';
    input.focus();
}

// Función para actualizar la lista de amigos en la pantalla
function actualizarListaAmigos() {
    const lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';

    listaAmigos.forEach((nombre, indice) => {
        const item = document.createElement('li');
        item.textContent = nombre;

        // Botón para eliminar un amigo de la lista
        const botonEliminar = document.createElement('button');
        botonEliminar.textContent = 'Eliminar';
        botonEliminar.className = 'boton-eliminar';
        botonEliminar.onclick = () => eliminarAmigo(indice);

        item.appendChild(botonEliminar);
        lista.appendChild(item);
    });
}

// Función para eliminar un amigo de la lista
function eliminarAmigo(indice) {
    listaAmigos.splice(indice, 1);
    actualizarListaAmigos();
}

// Función para realizar el sorteo de un amigo secreto
function realizarSorteo() {
    if (listaAmigos.length === 0) {
        alert('Debe agregar al menos un participante para realizar el sorteo.');
        return;
    }

    if (amigosSorteados.length === listaAmigos.length) {
        alert('Todos los amigos ya fueron sorteados.');
        return;
    }

    let sorteado;
    do {
        sorteado = listaAmigos[Math.floor(Math.random() * listaAmigos.length)];
    } while (amigosSorteados.includes(sorteado));

    amigosSorteados.push(sorteado);
    mostrarResultado(sorteado);
}

// Función para mostrar el resultado del sorteo
function mostrarResultado(sorteado) {
    const resultado = document.getElementById('resultado');
    const item = document.createElement('li');
    item.textContent = `Sorteado: ${sorteado}`;
    resultado.appendChild(item);
}
