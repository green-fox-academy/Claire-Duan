function all(a, b) {
  return new Promise((fulfill, reject) => {
    let counter = 0;
    const out = [];

    a.then((val) => {
      out[0] = val;
      counter++;

      if (counter >= 2) {
        fulfill(out);
      }
    });

    b.then((val) => {
      out[1] = val;
      counter++;

      if (counter >= 2) {
        fulfill(out);
      }
    });
  });
}

all(getPromise1(), getPromise2())
  .then(console.log);
