'use strict';

import 'babelify/polyfill';

function loadImage(url) {
  return new Promises((resolve, reject) => {
    const image = new Image();

    image.onload = function () {
      resolve(image);
    };

    image.onerror = function () {
      const message = `Could not load image at ${url}`;
      reject(new Error(message));
    };

    image.src = url;
  });
}
export default loadImage;
