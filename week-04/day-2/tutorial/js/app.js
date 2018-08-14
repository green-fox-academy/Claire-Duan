'use strict';

import loadImage from './load-image';

// import 'babelify/polyfill'

// function loadImage(url) {
//   return new Promises((resolve, reject) => {
//     const image = new Image();

//     image.onload = function () {
//       resolve(image);
//     };

//     image.onerror = function () {
//       const message = `Could not load image at ${url}`;
//       reject(new Error(message));
//     };

//     image.src = url;
//   });
// }

const addImg = (src) => {
  const imgElement = document.createElement('img');
  imgElement.src = src;
  document.body.appendChild(imgElement);
};

// loadImage('images/0.jpeg').then((img1) => {
//   addImg(img1.src);
//   loadImage('images/1.jpg').then((img2) => {
//     addImg(img2.src);
//     loadImage('images/2.jpg').then((img3) => {
//       addImg(img3.src);
//     });
//   });
// });

Promise.all([
  loadImage('images/0.jpeg'),
  loadImage('images/1.jpg'),
  loadImage('images/2.jpg'),
]).then((images) => {
  console.log(images);
  images.forEach(img => addImg(img.src));
}).catch((error) => {

});
