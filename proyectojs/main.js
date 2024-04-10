
const boton=document.getElementById('bott');
const borrar=document.getElementById('borrar');
const lista=document.getElementById('lista');
const cantidadlista=document.getElementById('cantidadlista');
let listafinal=[];
let total=0;
let listaProductos={
    producto:document.getElementById('name'),
    cantidad:document.getElementById('cantidad'),
    marca:document.getElementById('marca'),
};
function renderizarProductos(){
    const newLi = document.createElement('li');
    const botonEliinar= document.createElement('button');
    botonEliinar.innerHTML='eliminar';
    newLi.innerText= `${listaProductos.cantidad.value} Und ${listaProductos.producto.value}   ${listaProductos.marca.value} `;
    newLi.appendChild(botonEliinar);
    lista.appendChild(newLi);
    
    total++;
    cantidadlista.innerHTML=total;
    botonEliinar.addEventListener('click', function(){
        newLi.remove();

        total--;
        cantidadlista.innerHTML=total;
        console.log(listafinal);
    });
}

function limpiarEspacios(){
    document.getElementById('name').value='';
    document.getElementById('cantidad').value='';
    document.getElementById('marca').value='';

    
}

boton.addEventListener('click', function(){
    
    if ((listaProductos.producto.value =='')||(listaProductos.marca.value =='')||(listaProductos.cantidad.value =='')){
        return;
    }else{
        listafinal.push(listaProductos);
        console.log(listaProductos);
        renderizarProductos();
        limpiarEspacios();
    }

}); 

borrar.addEventListener('click', function(){
    console.log('hay que quitar');
    lista.innerText='';
    listaProductos=[];
    total=0;
    cantidadlista.innerHTML=total;
});

