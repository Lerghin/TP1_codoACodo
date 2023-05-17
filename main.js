
let boton = document.getElementById("resumen")
 
boton.addEventListener("click", function (){ 
  

  let divMEnsaje= document.getElementById("total")

 let cantidad = parseInt(document.querySelector('#cantidad').value);
 let categoria = document.querySelector('#categorias').value;
let total
 if (categoria=="estudiante"){

    total= (200- ((80*100)/200))*cantidad;
    divMEnsaje.innerHTML=  `<div style="background-color: rgb(94, 170, 196); border-radius: 50px;" >Total a Pagar: $` + total+ `</div>`;
 
}else if( categoria=="trainee"){

    total= (200- ((50*100)/200))*cantidad;
    divMEnsaje.innerHTML= `<div style="background-color: rgb(94, 170, 196); border-radius: 50px;" >Total a Pagar: $` + total+ `</div>`

} else if(categoria=="junior"){
    total= (200- ((15*100)/200))*cantidad;
     divMEnsaje.innerHTML= `<div style="background-color: rgb(94, 170, 196); border-radius: 50px;" >Total a Pagar: $` + total+ `</div>`

}else if(categoria=="general"){
  total= 200*cantidad;
   divMEnsaje.innerHTML= `<div style="background-color: rgb(94, 170, 196); border-radius: 50px;" >Total a Pagar: $` + total+ `</div>`

}
}
)

let boton2 = document.getElementById("borrar")
boton2.addEventListener("click",function  (){ 
  let divMEnsaje= document.getElementById("total")
  divMEnsaje.innerHTML= `<div  > </div>`
}
)