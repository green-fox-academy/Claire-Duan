const button = document.getElementsByTagName('button')[0];
const body = document.body;

button.onclick = function () {
  if (body.classList.contains('party')) {
    body.classList.remove('party');
  } else {
    body.classList.add('party');
  }
};
