//1
 const king = document.getElementById('b325');
 console.log(king);

//2
const businessLamp = [];
// const businessLampObjects = document.getElementsByClassName('big');
// businessLamp.push(businessLampObjects[0].textContent);
// businessLamp.push(businessLampObjects[1].textContent);
// businessLamp.forEach(element => console.log(element));
document.querySelectorAll('.big').forEach(element => businessLamp.push(element.textContent));
businessLamp.forEach(element => console.log(element));

//3
const conceitedKing = [];
conceitedKing.push(document.getElementById('b325').textContent);
conceitedKing.push(document.querySelector('.b326').textContent);
conceitedKing.forEach(element => window.alert(element));

//4
const noBusiness = [];
const noBusinessObj = document.getElementsByTagName('div');
for (let i = 0; i < noBusinessObj.length; i++) {
  noBusiness.push(noBusinessObj[i].textContent);
}
noBusiness.forEach(element => console.log(element));
