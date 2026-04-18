console.log("Step 6 destructuring");

const product = {
  name: "Ноутбук",
  price: 79990,
  category: "Электроника",
  inStock: true
};

const { name, price, category, inStock } = product;
console.log(name, price, category, inStock);

function printProduct({ name, price, category, inStock }) {
  console.log("Товар:", name, "| Цена:", price, "| Категория:", category, "| В наличии:", inStock);
}

printProduct(product);
