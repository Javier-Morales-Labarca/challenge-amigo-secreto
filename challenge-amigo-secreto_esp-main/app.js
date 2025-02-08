// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.


//Crear un array para almacenar los nombres

let amigos=[];

//Implementa una función para agregar amigos

function agregarAmigo() {
    let cajaTexto = document.getElementById("amigo");  
    let nombreAmigo = cajaTexto.value.trim();

    //Validar la entrada:

    if (nombreAmigo === "") {
        alert("Por favor, inserte un nombre.");
        return;
    }

    if (amigos.includes(nombreAmigo)) {
        alert("Este nombre ya está en lista.");
        return;
    }

    //Actualizar el array de amigos:

    amigos.push(nombreAmigo);
    actualizaLista();
    cajaTexto.value = "";
    cajaTexto.focus();

}

//Implementa una función para actualizar la lista de amigos
function actualizaLista() {

let listado = document.getElementById("listaAmigos");
listado.innerHTML = "";
amigos.forEach(nombreAmigo=> {
    let li = document.createElement("li");
    li.textContent = nombreAmigo;
    listado.appendChild(li);
    
});

}

//Implementa una función para sortear los amigos

function sortearAmigo(){
    
//Validar que haya amigos disponibles:
    if (amigos.length <2) {
        alert("Agregar mas de un amigo.");
        return;
    }


//Generar un índice aleatorio:
    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos[indiceAleatorio];

//Obtener el nombre sorteado:
    let nombreSorteado = document.getElementById("resultado");
    nombreSorteado.innerHTML = "";

//Mostrar el resultado:
    let li = document.createElement("li");
    li.textContent = `El Amigo Secreto es: ${amigoSorteado}`;
    nombreSorteado.appendChild(li);
    
}