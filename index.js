const boton = document.querySelector(".boton");
const input = document.querySelector(".inputText");
const lista = document.querySelector("ul");

boton.addEventListener("click", agregar);



function agregar(){
    let tarea = input.value;

    const li = document.createElement("li");  //creo el elemento li y lo guardo en la variable
    li.textContent = tarea;  //agrego al li el contenido de la var tarea
    lista.appendChild(li); // agrego al ul el elemento li
    
    const btnTareaTerminada = document.createElement("button");
    btnTareaTerminada.textContent = "ok";
    li.appendChild(btnTareaTerminada);

    const btnBorrar = document.createElement("button");
    btnBorrar.textContent = "delete";
    li.appendChild(btnBorrar);
    li.classList.add("itemNuevo");
    
}


