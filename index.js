import express from 'express';
import dotenv from 'dotenv';
import ProductManager from './ProductManager.js';

dotenv.config();
const app = express();
const PORT = 8080;
const manager = new ProductManager();

app.use(express.json());
app.use(express.static('public'));

// Middleware
app.use((req, res, next) => {
    console.log('Soy el middleware!');
    next();
});

app.get('/', (request, response) => {
    response.send('Servidor API Starbucks corriendo...');
});

// Listado
app.get("/api/products", (req, res) => {
    const products = manager.getProducts();
    res.json(products);
});

// Buscar ID
app.get("/api/products/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const product = manager.getProductById(id);
    if (!product) return res.status(404).json({ error: "Producto no encontrado" });
    res.json(product);
});

// Agregar nuevo producto
app.post("/api/products", (req, res) => {
    try {
        const { nombre, categoria, descripcion } = req.body;
        
        if (!nombre || !categoria || !descripcion) {
            return res.status(400).json({ 
                error: "Faltan campos obligatorios: nombre, categoria y descripcion" 
            });
        }

        const newProduct = manager.addProduct({ nombre, categoria, descripcion });
        res.status(201).json(newProduct);
    } catch (error) {
        res.status(500).json({ error: "Error al crear el producto", message: error.message });
    }
});

// Actualizar producto
app.put("/api/products/:id", (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const data = req.body;
        const updated = manager.updateProduct(id, data);
        
        if (!updated) return res.status(404).json({ error: "Producto no encontrado para actualizar" });
        
        res.json({ message: "Producto actualizado", product: updated });
    } catch (error) {
        res.status(500).json({ error: "Error al actualizar" });
    }
});

// Eliminar producto
app.delete("/api/products/:id", (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const deleted = manager.deleteProductById(id);
        
        if (!deleted) return res.status(404).json({ error: "Producto no encontrado para eliminar" });
        
        res.json({ message: "Producto eliminado con éxito" });
    } catch (error) {
        res.status(500).json({ error: "Error al eliminar" });
    }
});

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});

