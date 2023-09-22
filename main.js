let carrito =[];

const inventario = [
  { nombre: "Remera", precio: 500},
  { nombre: "Buzo", precio: 1000},
  { nombre: "Vestido", precio: 1500},
  { nombre: "Mochila", precio: 2000},
  { nombre: "Medias", precio: 100},
];

function agregarAlCarrito(producto) {
  carrito.push(producto);
}

function mostrarInventario() {
  const inventarioList = document.getElementById("Inventario");
  inventarioList.innerHTML = "";

  inventario.forEach((producto) => {
    const item = document.createElement("li");
    item.textContent = `${producto.nombre} - $${producto.precio}`;
    inventarioList.appendChild(item);
  });
}

function mostrarDinero(disponible) {
  const dineroSpan = document.querySelector("#dinero span");
  dineroSpan.textContent = `$${disponible}`;
}

mostrarInventario();
mostrarDinero(10000); 


const items = document.querySelectorAll("li");
items.forEach((item, index) => {
  item.addEventListener("click", () => {
    if (carrito.length < inventario.length) {
      agregarAlCarrito(inventario[index]);
      mostrarInventario();
      mostrarDinero(10000 - calcularTotalCarrito());
    } else {
      alert("Ya tienes todos los productos en el carrito.");
    }
  });
});


function calcularTotalCarrito() {
  return carrito.reduce((total, producto) => total + producto.precio, 0);
}