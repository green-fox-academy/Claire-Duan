// Crate a program that draws a chess table like this

// % % % %

//  % % % %

// % % % %

//  % % % %

// % % % %

//  % % % %

// % % % %

//  % % % %
const lineCount = 5;
const cont = "% % % %";
for(let i=0; i<lineCount; i++) {
  if(i%2===0) {
    console.log(cont);
  }
  else {
    console.log(" " + cont);
  }
}
