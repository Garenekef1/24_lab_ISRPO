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

console.log("Step 7 spread/rest");

const numbersA = [2, 4, 6];
const numbersB = [1, 3, 5];
const mergedNumbers = [...numbersA, ...numbersB];
console.log(mergedNumbers);

function findMax(...numbers) {
  return Math.max(...numbers);
}
console.log(findMax(...mergedNumbers));

const profileBase = { name: "Alexey", age: 19 };
const profileExtra = { city: "Tomsk", hobby: "coding" };
const fullProfile = { ...profileBase, ...profileExtra };
console.log(fullProfile);
