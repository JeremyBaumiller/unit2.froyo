const greeting = prompt("choose a flavor of froyo separated by commas");
console.log(greeting);
let order = greeting.split(", ");
console.log(order);
function flavor() {
  const froyo = {};
  // { name: "chocolate" },
  // { name: "strawberry" },
  // { name: "coffee" },
  for (const flavor of order) {
    if (froyo[flavor]) {
      froyo[flavor] += 1;
    } else {
      froyo[flavor] = 1;
    }
  }
  return froyo;
}
console.table(flavor(order));
