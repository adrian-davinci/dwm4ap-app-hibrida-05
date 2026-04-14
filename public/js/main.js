const productosGrid = document.getElementById("productos-grid");

const cargarProductos = async () => {
    try {
        const response = await fetch('/api/products');
        const productos = await response.json();

        renderizarProductos(productos);
    } catch (error) {
        console.error("Error cargando productos:", error);
        productosGrid.innerHTML = '<p class="text-center w-100">Error al conectar con el servidor</p>';
    }
};

const renderizarProductos = (productos) => {
    productosGrid.innerHTML = "";

    productos.forEach((producto) => {
        const card = document.createElement("div");
        card.className = "col";
        card.innerHTML = `
            <div class="card h-100 border-0 shadow-sm">
                <div class="card-body text-center d-flex flex-column">
                    <p class="text-success small fw-bold mb-1">${producto.categoria}</p>
                    <h5 class="card-title fw-bold">${producto.nombre}</h5>
                    <p class="text-muted small flex-grow-1">${producto.descripcion}</p>
                    <div class="mt-3">
                        <button class="btn btn-outline-success rounded-pill px-4" onclick="verDetalle(${producto.id})">
                            Ver más
                        </button>
                    </div>
                </div>
            </div>
        `;
        productosGrid.appendChild(card);
    });
};

window.verDetalle = (id) => {
    console.log("Ver detalle del producto ID:", id);
    alert("Modal de informacion " + id);
};

cargarProductos();
