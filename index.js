const greeting = prompt("choose a flavor of froyo separated by commas");

const froyo = greeting.split(" ");

const flavorsAll = {};

for (const flavors of froyo) {
  if (flavorsAll[flavors]) {
    flavorsAll[flavors]++;
  } else {
    flavorsAll[flavors] = 1;
  }
}
console.table(flavorsAll);
