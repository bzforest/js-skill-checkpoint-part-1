// Question #5
const products = [
  {
    name: "เสื้อยืด",
    price: 10,
    quantity: 2,
  },
  {
    name: "กางเกงยีนส์",
    price: 5,
    quantity: 3,
  },
  {
    name: "เสื้อเชิ้ต",
    price: 10,
    quantity: 5,
  },
];

const promotionCode = "SALE50";

function calculateTotalPrice (list,code) {
    let totalPrice = 0;

    for (let i = 0; i < list.length; i++) {
      totalPrice = list[0].price * list[0].quantity
      totalPrice = totalPrice + (list[1].price * list[1].quantity)
      totalPrice = totalPrice + (list[2].price * list[2].quantity)

      if (code === "SALE50") {
        totalPrice = totalPrice * 0.50
      } else if (code === "SALE20") {
        totalPrice = totalPrice * 0.80
      }
    }
    console.log(totalPrice);
    return totalPrice
}

let costCart = calculateTotalPrice(products , promotionCode)
console.log(costCart);
