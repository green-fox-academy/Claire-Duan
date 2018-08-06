const kids = [
  { 'pet_name': 'Wattled crane', 'owner': 'Bryant' },
  { 'pet_name': 'Devil,  tasmanian', 'owner': 'Alejandro' },
  { 'pet_name': 'Mynah,  common', 'owner': 'Nelie' },
  { 'pet_name': 'Dolphin,  common', 'owner': 'Mariele' },
  { 'pet_name': 'Gray duiker', 'owner': 'Maddalena' },
  { 'pet_name': 'Crab (unidentified)', 'owner': 'Lucine' },
  { 'pet_name': 'Ant (unidentified)', 'owner': 'Lorianna' },
  { 'pet_name': 'Bison,  american', 'owner': 'Tommie' },
  { 'pet_name': 'Yellow mongoose', 'owner': 'Vivyan' },
  { 'pet_name': 'Carpet snake', 'owner': 'Veda' },
  { 'pet_name': 'Lesser mouse lemur', 'owner': 'Isidor' },
];

const container = document.getElementById('pets');
kids.forEach(kid => {
  const article = document.createElement('article');
  const paragraph = document.createElement('p');
  const h3 = document.createElement('h3');

  h3.textContent = kid.owner;
  paragraph.textContent = kid.pet_name;

  article.appendChild(h3);
  article.appendChild(paragraph);

  container.appendChild(article);
});
