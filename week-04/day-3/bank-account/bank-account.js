const MAX = 99999;
const MIN = 10000;
const DIGIT = 4;

const generatePin = (length) => {
  let pin = '';
  for (let idx = 0; idx < length; idx++) {
    pin += Math.floor(Math.random() * 10);
  }
  return parseInt(pin, 10);
};

class BankAccount {
  constructor() {
    let _balance;
    let _pinCode;
    let _accountNumber = Math.floor(Math.random() * (MAX - MIN + 1) + MIN);
    let _transactions = [];
  }

  initializePin() {
    if (this._pinCode) {
      return this._pinCode;
    }
    this._balance = generatePin(DIGIT);
  }

  regeneratePin(oldPin) {
    if (oldPin === this._pinCode) {
      this._balance = generatePin(DIGIT);
    } else {
      throw new Error('Pin does not match!');
    }
  }

  deposit(pin, amount) {
    if (pin === this._pinCode) {
      this._balance += amount;
    } else {
      return false;
    }
  }

  withdrawer(pin) {
    return (amount) => {
      if (pin !== this._pinCode) {
        return false;
      }
      if (amount > this._balance) {
        throw new Error('There is no sufficient balance.');
      } else {
        this._balance -= amount;
      }
    };
  }

  getBalance(pin) {
    if (pin === this._pinCode) {
      return this._balance;
    }
    return false;
  }

  getHistory(pin) {
    if (pin === this._pinCode) {
      return this._transaction;
    }
  }
}

class Transaction {
  constructor(type, amount = 0) {
    this.type = type;
    this.amount = amount;
  }

  toString() {
    switch (type) {
      case 'deposit':
        return `deposit ${amount} to ${this._accountNumber}`;
      case 'withdraw':
        return `withdrawn ${amount} from ${this._accountNumber}`;
      case 'pin':
        return `pin generation for ${this._accountNumber}`;
      default:
        break;
    }
  }
}
