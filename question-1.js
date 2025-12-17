// Question #1
const myTodo = [
  { id: 1, todo: "Buy groceries" },
  { id: 2, todo: "Finish homework" },
  { id: 3, todo: "Call mom" },
  { id: 4, todo: "Wash dishes" },
];
myTodo.push({id: 5, todo: "Walk the dog",})
console.log(myTodo[4]);

myTodo[3].todo = "Go to the gym"
console.log(myTodo[3]);

myTodo.pop[4]
console.log(myTodo);

console.log(`To-do id: ${myTodo[3].id}, ${myTodo[3].todo}`)