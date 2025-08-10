const nombre = document.getElementById("amigo"); //obtenemos el valor del input "amigo"// 
const amigos = [];//creamos una lista para guardar los nombres//
const htmlAmigos = document.getElementById("listaAmigos");//para guardar los resultados para mostrar al html//
const htmlResultado = document.getElementById("resultado");

function limpiarCaja() {
    nombre.value = "";
}

function agregarAmigo() {
    if (nombre.value === "") {
        alert("Por favor, inserta un nombre.");
    } else {
        amigos.push(nombre.value);//guarda el valor del nombre en la lista//
        htmlAmigos.innerHTML = "";
        for (let recorrer = 0; recorrer < amigos.length; recorrer++){ //recorre la lista de amigos//
            htmlAmigos.innerHTML += `<li>${amigos[i]}</li>`;
        }
        limpiarCaja();
    }
}

function sortearAmigo() {
    if (amigos === ""){
        alert("No hay nombre para sortear")
    }else{
        const sorteo = Math.floor(Math.random() * amigos.length);//sortea por la cantidad de elementos en la lista//
        const amigoSecreto = amigos[sorteo];
        htmlResultado.innerHTML = `<li>Tu amigo secreto es: ${amigoSecreto}</li>`;//muestra el nombre del amigo secreto//
    }
}