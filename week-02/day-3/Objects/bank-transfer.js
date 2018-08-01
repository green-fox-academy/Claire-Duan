'use strict';

const accounts = [
  { clientName: 'Igor', accountNumber: 11234543, balance: 203004099.2 },
  { clientName: 'Vladimir', accountNumber: 43546731, balance: 5204100071.23 },
  { clientName: 'Sergei', accountNumber: 23456311, balance: 1353600.0 },
];

// Create function that returns the name and balance of cash on an account in a list
// The output should be: "Igor", "203004099.2"
// Create function that transfers an amount of cash from one account to another
// it should have four parameters:
//  - the accounts
//  - from account_number
//  - to account_number
//  - amount of cash to transfer
// Log "404 - account not found" if any of the account numbers don't exist to the console.
// transferAmount(accounts, 43546731, 23456311, 500.0);
// After printing the "accounts" it should look like:
// const accounts = [
//	{ clientName: 'Igor', accountNumber: 11234543, balance: 203004099.2 },
//	{ clientName: 'Vladimir', accountNumber: 43546731, balance: 5204099571.23 },
//	{ clientName: 'Sergei', accountNumber: 23456311, balance: 1354100.0 }
//]

function getNameAndBalance(accNumber) {
  let exist = false;
  accounts.forEach(account => {
    if (account.accountNumber === accNumber) {
      console.log(`"${account.clientName}", "${account.balance}"`);
      exist = true;
    }
  });
  if (!exist) {
    console.log('404 - account not found');
  }
}

function transferAmount(accountsPara, fromAcc, toAcc, amount) {
  let fromIndex = 0;
  let toIndex = 0;
  let fromExist = false;
  let toExist = false;
  let sufAmount = true;

  accounts.forEach(account => {
    if (account.accountNumber === fromAcc) {
      fromExist = true;
    }
    if (account.balance > amount) {
      sufAmount = true;
    }
  });

  accounts.forEach(account => {
    if (account.accountNumber === toAcc) {
      toExist = true;
    }
  });

  if (toExist && fromExist && sufAmount) {
    accounts.forEach(account => {
      if (account.accountNumber === fromAcc) {
        account.balance -= amount;
      }
      else if (account.accountNumber === toAcc) {
        account.balance += amount;
      }
    });
  }
  else if (sufAmount === false) {
    console.log('Account balance is no sufficient.');
  }
  else {
    console.log('404 - account not found');
  }
}

getNameAndBalance(11234543);
transferAmount(accounts, 43546731, 23456311, 500.0);
console.log(accounts);


module.exports = {
  getNameAndBalance: getNameAndBalance,
  transferAmount: transferAmount,
  accounts: accounts
};
