const productos = [
  {nombre:"Remera", precio: 1000},
  {nombre:"Pantalon", precio: 2000},
  {nombre:"Buzo", precio: 3000},
  {nombre:"Vestido", precio: 2500},
  {nombre:"Mochila", precio: 4000},
  {nombre:"Medias", precio: 200},
  {nombre:"Campera", precio: 15000}
  ]

  let carrito=[]

  let seleccion = prompt ("Hola, desea comprar algo?")

  while(seleccion != "si" && seleccion !="no"){
    alert ("Por favor ingresa si o no")
    seleccion = prompt ("Hola, desea comprar algo?")
  }

  if(seleccion ==="si"){
    alert("Nuestra lista de productos")
    let todosLosProductos = productos.map ((producto)=>producto.nombre + " " + producto.precio + "$" );
    alert (todosLosProductos.join(" - "))
} else if (seleccion==="no"){
    alert("¡Gracias por visitarnos, hasta pronto!");
}

while (seleccion==="si"){
  let producto = prompt ("Agrega un producto a tu carrito")
  let precio = 0

  if(producto==="Remera" || producto=== "Pantalon" || producto=== "Buzo" || producto==="Vestido" || producto==="Mochila" || producto==="Medias" || producto==="Campera"){
    switch (producto){
      case "Buzo":
        precio= 3000;
        break;
      case "Campera":
        precio= 15000;
        break;
      case "Medias":
        precio= 200;
        break;
      case "Mochila":
        precio= 4000;
        break;
      case "Pantalon":
        precio=2000;
        break;
      case "Remera":
        precio=1000;
        break;
      case "Vestido":
        precio=2500;
        break;
      default:
        break;
  }
    let unidades = parseInt(prompt ("¿Cúantas unidades quiere llevar?"))
    carrito.push({producto, unidades, precio})
  } else{
    alert("Producto inexistente. Intente nuevamente")
}

seleccion = prompt("¿Desea agregar otro producto?")

while(seleccion==="no"){
  alert("Gracias por tu compra! Hasta pronto!")
    carrito.forEach((carritoFinal)=>{
    console.log(`producto: ${carritoFinal.producto}, unidades: ${carritoFinal.unidades}, total a pagar por producto ${carritoFinal.unidades * carritoFinal.precio}`
    )
    })
    break;
  }
}

const total = carrito.reduce ((acc, el) => acc + el.precio * el.unidades, 0)
console.log(`El total a pagar es: ${total}`)