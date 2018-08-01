'use strict';

// Accidentally I got the wrong URL for a funny subreddit. It's probably "odds" and not "bots"

// Also, the URL is missing a crutial component, find out what it is and insert it too!

var url = 'https//www.reddit.com/r/nevertellmethebots';

// url = url.replace('bots', 'odds');
// url = url.replace('https', 'https:');

// const urlArr = url.split('/');
// urlArr.splice(1, 0, ':');
// url = urlArr.join('/');

function fixer(str = '') {
  str = str.replace('bots', 'odds');
  const urlArr = str.split('/');
  if (urlArr[0] === 'https') {
    urlArr[0] = 'https:';
  }
  str = urlArr.join('/');
  return str;
}
url = fixer(url);
console.log(url);
