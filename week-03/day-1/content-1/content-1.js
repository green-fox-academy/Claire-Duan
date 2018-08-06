//1
const content = document.getElementsByClassName('animals')[0].textContent;
console.log(content);

const paragraphs = document.getElementsByTagName('p');
for (let i = 0; i < paragraphs.length; i++) {
  paragraphs[i].textContent = content;
}

//2
const content2 = document.getElementsByClassName('animals')[0].innerHTML;
console.log(content2);

const paragraphs2 = document.getElementsByTagName('p');
for (let i = 0; i < paragraphs2.length; i++) {
  paragraphs2[i].innerHTML = content2;
}
