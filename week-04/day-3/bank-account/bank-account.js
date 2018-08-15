const MAX = 99999;
const MIN = 10000;
const MAXPIN = 9999;
const MINPIN = 1000;

const generateRandom = (max, min) => Math.floor(Math.random() * (max - min + 1) + min);

class Transaction {
  constructor(type, amount = 0) {
    this.type = type;
    this.amount = amount;
  }

  toString(accountNumber) {
    let message = '';
    switch (this.type) {
      case 'deposit':
        message = `deposit ${this.amount} to ${accountNumber}`;
        break;
      case 'withdraw':
        message = `withdrawn ${this.amount} from ${accountNumber}`;
        break;
      case 'pin':
        message = `pin generation for ${accountNumber}`;
        break;
      default:
        break;
    }
    return message;
  }
}

function BankAccount() {
  let _balance = 0;
  let _pinCode;
  const _accountNumber = generateRandom(MAX, MIN);
  const _transactions = [];

  this.initializePin = () => {
    if (_pinCode) {
      return _pinCode;
    }
    _pinCode = generateRandom(MAXPIN, MINPIN);
    return _pinCode;
  };

  this.regeneratePin = (oldPin) => {
    if (oldPin === _pinCode) {
      _pinCode = generateRandom(MAXPIN, MINPIN);
      _transactions.push((new Transaction('pin')).toString(_accountNumber));
      return _pinCode;
    }
    return new Error('Pin does not match!').message;
    // throw new Error('Pin does not match!');
  };

  this.deposit = (pin, amount) => {
    if (pin === _pinCode) {
      _balance += amount;
      _transactions.push((new Transaction('deposit', amount)).toString(_accountNumber));
      return true;
    }
    return false;
  };

  this.withdrawer = (pin) => (amount) => {
    if (pin !== _pinCode) {
      return false;
    }
    if (amount > _balance) {
      return new Error('There is no sufficient balance.').message;
    }
    _balance -= amount;
    _transactions.push((new Transaction('withdraw', amount)).toString(_accountNumber));
    return true;
  };

  this.getBalance = (pin) => {
    if (pin === _pinCode) {
      return _balance;
    }
    return false;
  };

  this.getHistory = (pin) => {
    if (pin === _pinCode) {
      if (_transactions) {
        return _transactions;
      }
      return 'No records yet!';
    }
  };
}

const account1 = new BankAccount();
const oldPin1 = account1.initializePin();
console.log(`The pin now is ${oldPin1}`); // The pin is now...
console.log(account1.regeneratePin(1111).message); // Pin does not match!
const newPin1 = account1.regeneratePin(oldPin1);
console.log(`The pin now is ${oldPin1}`); // The pin is now...
console.log(account1.getBalance(1111)); // false
console.log(account1.getBalance(newPin1)); // 0
console.log(account1.getHistory(newPin1)); // pin generation for...
console.log(account1.deposit(1111, 2000)); // false
console.log(account1.deposit(newPin1, 2000)); // trueh
console.log(account1.getBalance(1111)); // false
console.log(account1.getBalance(newPin1)); // 2000
console.log(account1.getHistory(newPin1)); // pin generation for...
console.log(account1.withdrawer(1111)(2000)); // false
console.log(account1.withdrawer(newPin1)(2001)); // There is no sufficient balance.
console.log(account1.withdrawer(newPin1)(1500)); // true
console.log(account1.getBalance(newPin1)); // 500
console.log(account1.getHistory(newPin1)); // pin generation for...
