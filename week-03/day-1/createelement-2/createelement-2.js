const planetData = [
  {
    category: 'inhabited',
    content: 'Foxes',
    asteroid: true,
  },

  {
    category: 'inhabited',
    content: 'Whales and Rabbits',
    asteroid: true,
  },

  {
    category: 'uninhabited',
    content: 'Baobabs and Roses',
    asteroid: true,
  },

  {
    category: 'inhabited',
    content: 'Giant monsters',
    asteroid: false,
  },

  {
    category: 'inhabited',
    content: 'Sheep',
    asteroid: true,
  },
];

const list = document.querySelector('.asteroids');
const child = document.getElementsByTagName('li')[0];
list.removeChild(child);

planetData.forEach(element => {
  if (element.asteroid) {
    const item = document.createElement('li');
    item.classList.add(element.category);
    item.textContent = element.content;
    list.appendChild(item);
  }
});
