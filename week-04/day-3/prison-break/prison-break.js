'use strict';

const prison = (givenName) => {
  let name = givenName;
  let counter = 0;
  return {
    visit: () => {
      if (name) {
        counter++;
        console.log(`${name} is visited ${counter} time(s)`);
      } else {
        console.log('No body is here anymore');
      }
    },
    escape: () => {
      name = '';
      console.log('BREAKING NEWS, Sad Panda escaped the prison');
    },
  };
};

const alcatraz = prison('Sad Panda');

alcatraz.visit(); // Sad Panda is visited 1 time(s)
alcatraz.visit(); // Sad Panda is visited 2 time(s)
alcatraz.escape(); // BREAKING NEWS, Sad Panda escaped the prison
alcatraz.visit(); // Nobody is here anymore
