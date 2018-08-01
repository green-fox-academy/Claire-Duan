'use strict'

const ingredients = [
  { name: 'vodka', inStock: 1, needsCooling: true },
  { name: 'coffee_liqueur', inStock: 0, needsCooling: true },
  { name: 'fresh_cream', inStock: 1, needsCooling: true },
  { name: 'captain_morgan_rum', inStock: 2, needsCooling: true },
  { name: 'mint_leaves', inStock: 0, needsCooling: false },
  { name: 'sugar', inStock: 0, needsCooling: false },
  { name: 'lime juice', inStock: 0, needsCooling: true },
  { name: 'soda', inStock: 0, needsCooling: true },
];

function printTable(ing) {
  let maxLength = 0;
  let midLength = 'Needs cooling'.length;
  let minLength = 'In stock'.length;


  ing.forEach(element => {
    if (element.name.length > maxLength) {
      maxLength = element.name.length;
    }
  });

  let side = '+';
  for (let i = 0; i < maxLength + 2; i++) {
    side += '-';
  }
  side += '+';
  for (let i = 0; i < 15; i++) {
    side += '-';
  }
  side += '+';
  for (let i = 0; i < 10; i++) {
    side += '-';
  }
  side += '+';
  side += '\n';
  console.log(side);

  let title = '| Ingredient';
  for (let i = 0; i < maxLength - 'Ingredient'.length + 1; i++) {
    title += ' ';
  }
  title += '| Needs cooling ';
  title += '| In stock |\n';
  console.log(title);

  ing.forEach(element => {
    let content = '| ';
    content += element.name;
    for (let i = 0; i < maxLength - element.name.length + 1; i++) {
      content += ' ';
    }
    content += '| ';
    if(element.needsCooling) {
      content += 'yes';
    }
    else {
      content += 'no ';
    }
    for (let i = 0; i < midLength-1; i++) {
      content += ' ';
    }
    content += '| ';
    content += element.inStock;
    for (let i = 0; i < minLength-1; i++) {
      content += ' ';
    }
    content += '|';
    console.log(content);
  });
}

printTable(ingredients);
// console.log(Object.keys(ingredients[0]));
