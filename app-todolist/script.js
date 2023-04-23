const fecha = document.querySelector('#fecha')
const lista = document.querySelector('#lista')
const input = document.querySelector('#input')
const botonEnter = document.querySelector('#boton-enter')
const check = "bi-check-circle"
const uncheck = "bi-circle"
const lineThrough = "line-through"
// Creamos nuestro id que sumando su valor dependiendo la cantidad de tareas creadas
let id 
// Creando nuestro array donde se guardaran nuestras tareas creadas como objetos
let LIST 

// Creacion de fecha 
// usamor nuestra Clase Date que ya viene incluida en Javascript
const FECHA = new Date()
// Agregar la fecha a nuestro DIV y modificamos el formato que se moestrara
fecha.innerHTML = FECHA.toLocaleDateString('es-PE', { weekday: 'long', month:'short', day:'numeric'}) // Pasamos 2 parametros el PAIS y el formato que se mostrara en un objeto

// Funcion para crear nuestra Tarea
function agregarTarea(tarea, id, realizado, eliminado){

    // Verificamos si el elemenData eliminado esta en true
    if (eliminado) return
    
    // Asignando las clases correspondientes segun el estado del elementData realizado
    const REALIZADO = realizado ? check : uncheck
    const LINE = realizado ? lineThrough : ""

    const elemento = `<li id="elemento">
    <i class="bi ${REALIZADO} text-white" data="realizado" id=${id}></i>
    <p class="text ${LINE}">${tarea}</p>
    <i class="bi bi-trash-fill text-white" data="eliminado" id=${id}></i>
    </li>`
    // Agregar nuestro html a nuestro UL principal usando insertAdjacentHTML
    // Agregamos de esta manera el elemento despues del ultimo elemento que contega nuestro UL
    lista.insertAdjacentHTML("beforeend",elemento)
}

// Funcion para realizar el cambio de nuestro icono y text si es que esta realizado
function tareaRealizada(element){
    // Usamos Toggle
    element.classList.toggle(check)
    element.classList.toggle(uncheck)
    // Accedemos al objeto padre de nuestro elemento que tenga la clase text y le asignamos una nueva clase
    element.parentNode.querySelector('.text').classList.toggle(lineThrough)
    // Cambiamos el valor de nuestro elemento en su propiedad realizado a true o false
    LIST[element.id].realizado = LIST[element.id].realizado ? false : true
}

// Funcion para eliminar una tarea
function tareaEliminada(element){
    // Accedemos al elemento padre de nuestro elemento seleccionado para poder removerlo
    element.parentNode.parentNode.removeChild(element.parentNode)
    // Cambiamos el valor de nuestro elemento en su propiedad eliminado a true
    LIST[element.id].eliminado = true
}

// Funcion para agregar un evento a nuestro boton y llamar a nuestra funcion agregarTarea
botonEnter.addEventListener('click', () => {
    const tarea = input.value
    if (tarea) {
        agregarTarea(tarea, id, false, false)
        LIST.push(
            {
                nombre: tarea,
                id:id,
                realizado:false,
                eliminado:false,
            }
        )
    }
    // Usando localStorage para almacenar la información en el navegador aunque se cierre o actualize
    // Usamos JSON.stringify para almacenar nuestros datos en formato texto
    localStorage.setItem('TODO',JSON.stringify(LIST))
    input.value = ''
    id++
})

// Funcion para agregar un evento al presionar nuestra tecla ENTER y llamar a nuestra funcion agregarTarea
document.addEventListener('keyup',function(event){
    if(event.key == "Enter"){
        const tarea = input.value
        if(tarea){
            agregarTarea(tarea, id, false, false)
            LIST.push(
                {
                    nombre: tarea,
                    id:id,
                    realizado:false,
                    eliminado:false,
                }
            )
        }
        localStorage.setItem('TODO',JSON.stringify(LIST))
        input.value = ""
        id++
        console.log(LIST);
    }
})

// Funcio para obtener los atributos de nuestro elemento LI y validar que funcion que se realizara - Realizado o eliminado
lista.addEventListener('click', function (event) {
    const element = event.target
    const elementData = element.attributes.data.value
    if(elementData === "realizado"){
        tareaRealizada(element)
    }else if(elementData === "eliminado"){
        tareaEliminada(element)
    }
    localStorage.setItem('TODO',JSON.stringify(LIST))
})

// Renderizamos nuestro localStorage almacenado
let data = localStorage.getItem('TODO')
if (data) {
    LIST = JSON.parse(data)
    id = LIST.length
    cargarLista(LIST)
}else{
    LIST = []
    id = 0
}

// Cargar tareas
function cargarLista(DATA){
    DATA.forEach(element => {
        agregarTarea(element.nombre, element.id, element.realizado, element.eliminado)
    });
}

// Limpiando LocalStorage
const buttonreset = document.getElementById('reset-todo')
buttonreset.addEventListener('click', () => {
    localStorage.clear();
    window.location.href = "index.html"
})

