const paragraphs = document.getElementsByTagName('p');

const apple = paragraphs[0];
const balloon = paragraphs[1];
const cat = paragraphs[2];
const dophin = paragraphs[3];

if (dophin.classList.contains('dophin')) {
  apple.textContent = 'pear';
}

if (apple.classList.contains('apple')) {
  cat.textContent = 'dog';
}

apple.classList.add('red');

balloon.style.borderRadius = '30%';
