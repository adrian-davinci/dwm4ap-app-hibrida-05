class ProductManager {
  constructor() {
    this.products = [
      {
        id: 1,
        nombre: "Lattes",
        categoria: "Cafés Calientes",
        descripcion:
          "El café latte caliente de Starbucks es una bebida clásica elaborada con su espresso intenso y característico, combinado con leche vaporizada suave y sedosa, rematado con una ligera capa de espuma. Se sirve en varios tamaños y se puede personalizar con diferentes leches (vegetales o descremadas) o siropes.",
      },
      {
        id: 2,
        nombre: "Cappuccinos",
        categoria: "Cafés Calientes",
        descripcion:
          "El Cappuccino de Starbucks es una bebida caliente clásica que combina espresso intenso (granos 100% arábica) con leche vaporizada y una capa gruesa de espuma. Se caracteriza por su textura aireada y equilibrio, con aproximadamente 80-140 calorías según el tamaño (corto a grande).",
      },
      {
        id: 3,
        nombre: "Flat White",
        categoria: "Cafés Calientes",
        descripcion:
          "El Flat White de Starbucks es una bebida caliente de café intenso, elaborada con shots de ristretto (espresso más concentrado y dulce) y leche entera vaporizada, caracterizada por su textura cremosa y una fina capa de microespuma. Se diferencia del latte por tener más café y menos leche, ofreciendo un sabor más robusto y aterciopelado.",
      },
      {
        id: 4,
        nombre: "Americanos",
        categoria: "Cafés Calientes",
        descripcion:
          "El Caffè Americano de Starbucks es una bebida caliente clásica que combina shots de espresso intenso con agua caliente, resultando en un café de sabor robusto y cuerpo similar al café de filtro. Se elabora con espresso 100% arábica y es una opción ligera, con aproximadamente 5 calorías en un tamaño corto.",
      },
      {
        id: 5,
        nombre: "Macchiatos",
        categoria: "Cafés Calientes",
        descripcion:
          "El café caliente Macchiato de Starbucks, particularmente el famoso Caramel Macchiato, es una bebida elaborada con leche al vapor, jarabe de vainilla, espresso y salsa de caramelo. Se caracteriza por sus capas marcadas: la leche va primero, seguida del espresso, lo que crea un equilibrio entre dulce e intenso, a menudo coronado con un diseño de caramelo.",
      },
      {
        id: 6,
        nombre: "Latte Macchiato",
        categoria: "Cafés Calientes",
        descripcion:
          "Tomá ese primer trago y disfrutá. Dos ingredientes simples. Nuestra excepcional bebida. Preparate otro más, te lo merecés.",
      },
      {
        id: 7,
        nombre: "Caffé Mocha",
        categoria: "Cafés Calientes",
        descripcion:
          "Bebe a sorbos y saborea este café colombiano de origen único con buen cuerpo, sabor sustancioso y un toque característico a nuez.",
      },
      {
        id: 8,
        nombre: "Shaken Espresso",
        categoria: "Cafés Fríos",
        descripcion:
          "Información: Espresso agitado con hielo y un toque de endulzante, logrando una emulsiónfría y espumosa. Perfil de sabor: Muy refrescante, aireado y con un dulzor ligero que realza las notas del espresso. Ideal para: Clientes que quieren algo frío pero con mucho más cuerpo y fuerza que un café helado tradicional.",
      },
      {
        id: 9,
        nombre: "Capuccino Frío",
        categoria: "Cafés Fríos",
        descripcion:
          "Información: Proporciones iguales de espresso, leche líquida y una espuma de leche muy espesa y aireada. Perfil de sabor: Intenso y equilibrado; la espuma permite que el sabor del café resalte más que en un latte. Ideal para: Quienes disfrutan de la textura de la espuma y un balance clásico entre leche y café.",
      },
      {
        id: 10,
        nombre: "Mochas Fríos",
        categoria: "Cafés Fríos",
        descripcion:
          "Información: Una mezcla equilibrada de espresso, salsa de chocolate oscuro y leche vaporizada, creando una textura densa. Perfil de sabor: Dulce y achocolatado, con el punch amargo del café equilibrando el azúcar del cacao. Ideal para: Usuarios que buscan un 'gustito' o un postre líquido con cafeína.",
      },
      {
        id: 11,
        nombre: "Latte Frío",
        categoria: "Cafés Fríos",
        descripcion:
          "Información: Una base de espresso suave mezclada con una gran cantidad de leche vaporizada y apenas una pizca de espuma en la superficie. Perfil de sabor: Predominantemente lácteo y dulce, con un retrogusto suave a café tostado. Ideal para: Personas que prefieren sabores menos amargos y texturas muy cremosas y sedosas.",
      },
      {
        id: 12,
        nombre: "Americanos Fríos",
        categoria: "Cafés Fríos",
        descripcion:
          "Información: Dos disparos de espresso combinados con agua caliente para lograr el volumen de un café de filtro pero con la riqueza del espresso. Perfil de sabor: Robusto y profundo, pero con una textura más diluida y fácil de beber que un shot puro. Ideal para: Los amantes del café negro que quieren una bebida prolongada para empezar la mañana o estudiar.",
      },
      {
        id: 14,
        nombre: "Iced Caramel Latte & Crema de Vainilla",
        categoria: "Cafés Fríos",
        descripcion:
          "Una deliciosa mezcla de cafés latinoamericanos y de Asia, este espresso tiene una dulzura rica y acaramelada.",
      },
      {
        id: 15,
        nombre: "Iced Latte",
        categoria: "Cafés Fríos",
        descripcion:
          "Probá. Disfrutá. Repetí. Es tan simple como eso. Asegurate de tomarlo mientras está frío",
      },
      {
        id: 16,
        nombre: "Cold Brew",
        categoria: "Cafés Fríos",
        descripcion: "El Starbucks Cold Brew es una bebida de café artesanal, infusionada en frío durante 20 horas con granos 100% arábica de Nariño, Colombia, y África Oriental. Se caracteriza por ser una bebida refrescante, con un sabor suave, cuerpo robusto, y una dulzura natural con menor acidez que el café caliente tradicional."
      },
      {
        id: 17,
        nombre: "Café Frappuccino",
        categoria: "Frappuccinos",
        descripcion: "Descripción: Clásico café frío licuado con hielo. Perfil de sabor: Sabor intenso a café.Ideal para: Amantes del café tradicional."
      },
      {
        id: 18,
        nombre: "Caramel Frappuccino",
        categoria: "Frappuccinos",
        descripcion: "Descripción: Bebida fría con caramelo y café. Perfil de sabor: Dulce y cremoso. Ideal para: Quienes disfrutan sabores dulces."
      },
      {
        id: 19,
        nombre: "Mocha Blanco Frappuccino",
        categoria: "Frappuccinos",
        descripcion: "Descripción: Café con chocolate blanco. Perfil de sabor: Suave y dulce. Ideal para: Fans del chocolate blanco."
      },
      {
        id: 20,
        nombre: "Mocha Frappuccino",
        categoria: "Frappuccinos",
        descripcion: "Descripción: Café con chocolate. Perfil de sabor: Balance entre dulce y amargo. Ideal para: Amantes del chocolate."
      },
      {
        id: 21,
        nombre: "Chai Frappuccino",
        categoria: "Frappuccinos",
        descripcion: "Descripción: Bebida especiada sin café. Perfil de sabor: Aromático y suave. Ideal para: Quienes prefieren té."
      },
      {
        id: 22,
        nombre: "Mocha Creme Frappuccino",
        categoria: "Frappuccinos",
        descripcion: "Descripción: Chocolate sin café. Perfil de sabor: Muy cremoso y dulce. Ideal para: Para quienes no toman café."
      }
    ];
  }

  getProducts() {
    return this.products;
  }

  getProductById(id) {
    return this.products.find((p) => p.id === id) || null;
  }

  addProduct(data) {
    const newId = this.products.length > 0 ? Math.max(...this.products.map(p => p.id)) + 1 : 1;
    const newProduct = { id: newId, ...data };
    this.products.push(newProduct);
    return newProduct;
  }

  updateProduct(id, data) {
    const index = this.products.findIndex(p => p.id === id);
    if (index === -1) return null;

    this.products[index] = { ...this.products[index], ...data, id };
    return this.products[index];
  }

  deleteProductById(id) {
    const index = this.products.findIndex(p => p.id === id);
    if (index === -1) return false;
    
    this.products.splice(index, 1);
    return true;
  }
}

export default ProductManager;
