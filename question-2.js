// Question #2
const inventory = [
  { name: "Apple", price: 35, quantity: 100 },
  { name: "Banana", price: 10, quantity: 50 },
];

inventory[0].quantity = 200
console.log(inventory[0]);

inventory.push({name: "Orange", price: 20, quantity: 300})
console.log(inventory);

function cost (list) {
  let totalCost = 0;

  for (let i = 0; i < list.length; i++) {
    console.log(list[i].quantity);
    console.log(list[i].price);
      totalCost = list[0].price * list[0].quantity
      totalCost = totalCost + (list[1].price * list[1].quantity)
      totalCost = totalCost + (list[2].price * list[2].quantity)
  }
  console.log(totalCost)
  return totalCost
}
console.log(`มูลค่ารวมของจำนวนสินค้าทั้งหมดในสต็อก ${cost(inventory)} บาท`);



