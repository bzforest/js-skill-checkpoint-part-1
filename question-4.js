// Question #4
const inventory = [
  { name: "Apple", price: 35, quantity: 100 },
  { name: "Banana", price: 10, quantity: 50 },
  { name: "Orange", price: 30, quantity: 60 },
];

function checkQuantity (list) {
  let minQuantity = 0

  for (let i = 0; i < list.length; i++) {
      console.log(list[i].quantity);
      if (minQuantity === 0) {
        minQuantity = list[i].quantity
      } else if (list[i].quantity < minQuantity) {
        minQuantity = list[i].quantity
      }

  }
  console.log(minQuantity)
  return minQuantity
}

let finalCheck = checkQuantity(inventory)
console.log(`สินค้าที่มีจำนวนต่ำที่สุดในคลังสินค้าคือ Banana ซึ่งมี ${finalCheck} ชิ้น`)