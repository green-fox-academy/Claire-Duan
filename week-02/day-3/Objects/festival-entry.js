'use strict';

const watchlist = [];

let securityAlcholLoot = 0;

const queue = [
  { name: 'Amanda', alcohol: 10, guns: 1 },
  { name: 'Mark', alcohol: 0, guns: 0 },
  { name: 'Dolores', alcohol: 0, guns: 1 },
  { name: 'Wade', alcohol: 1, guns: 1 },
  { name: 'Anna', alcohol: 10, guns: 0 },
  { name: 'Rob', alcohol: 2, guns: 0 },
  { name: 'Joerg', alcohol: 20, guns: 0 },
];
// Queue of festivalgoers at entry
// no. of alcohol units
// no. of guns
// Create a securityCheck function that takes the queue as a parameter and returns a list of festivalgoers who can enter the festival
// If guns are found, remove them and put them on the watchlist (only the names)
// If alcohol is found confiscate it (set it to zero and add it to securityAlcholLoot) and let them enter the festival

function securityCheck(list) {
  let index = 0;
  list.forEach(applicant => {
    index = list.indexOf(applicant);

    if (applicant.guns > 0) {
      watchlist.push(applicant.name);
    }
    else if (applicant.alcohol > 0) {
      securityAlcholLoot += applicant.alcohol;
      list[index].alcohol = 0;
    }
  });

  for (let i = 0; i < list.length;) {
    if (watchlist.indexOf(list[i].name) >= 0) {
      list.splice(i, 1);
      continue;
    }
    i++;
  }
}

securityCheck(queue);
console.log(queue);
console.log(securityAlcholLoot);

// console.log(queue.name);


module.exports = securityCheck;
