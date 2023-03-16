const boton = document.querySelector(".boton");
const input = document.querySelector(".inputText");
const lista = document.querySelector("ul");
const sinTareas = document.querySelector("h2");

boton.addEventListener("click", msj);


function msj(){
    if (input.value === "") {
        alert("debe ingresar una tarea");
    } else {
        agregar();
    }
}


function agregar(){
    sinTareas.textContent = "";
 
    let tarea = input.value;

    const li = document.createElement("li");  //creo el elemento li y lo guardo en la variable
    li.textContent = tarea;  //agrego al li el contenido de la var tarea
    lista.appendChild(li); // agrego al ul el elemento li
    
    const btnTareaTerminada = document.createElement("button");
    btnTareaTerminada.classList.add("tareaOk");
    btnTareaTerminada.textContent = "ok";
    li.appendChild(btnTareaTerminada);

    btnTareaTerminada.addEventListener("click", (e) => {
        li.removeChild(btnTareaTerminada);
        li.removeChild(btnBorrar);
        
        // const txtOk = document.createElement("H5");
        // txtOk.textContent = "Terminada";
        // li.appendChild(txtOk);
        // txtOk.classList.add("textoTareaOk");

        li.textContent = tarea + " --- Terminada";
    });

    const btnBorrar = document.createElement("button");
    btnBorrar.classList.add("borrar");
    btnBorrar.textContent = "delete";
    li.appendChild(btnBorrar);
    li.classList.add("itemNuevo");
    
    btnBorrar.addEventListener("click", (e) => {  //evento del boton delete la tarea
        lista.removeChild(li);
    });

    input.value = "";
}


