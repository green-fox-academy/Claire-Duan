const img = document.getElementsByTagName('img')[0];
console.log(img.getAttribute('src'));

img.setAttribute('src', 'https://pbs.twimg.com/profile_images/960347893914898432/H0tA4G8k_400x400.jpg');
document.getElementsByTagName('a')[0].setAttribute('href', 'https://www.greenfoxacademy.com/');

const button2 = document.querySelector('.this-one');
button2.disabled = true;
button2.textContent = 'Don\'t click me!';
