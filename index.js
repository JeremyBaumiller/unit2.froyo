const greeting = prompt("choose a flavor of froyo separated by commas");

const froyo = [
  { name: "chocolate" },
  { name: "strawberry" },
  { name: "coffee" },
];
let flavors = "";
for (const flavors of froyo) {
  if (froyo[flavors]) {
    froyo[flavors]++;
  } else {
    froyo[flavors] = 1;
  }
}
console.table(froyo);
