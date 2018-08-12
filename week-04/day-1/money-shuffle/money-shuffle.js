const Panama = {
    cash: 0,
    name: 'Panama',
    tax: '1%',
    deposit: function(amount) {
        this.cash += amount * (1 - parseInt(this.tax) * 0.01);
    },
}

const Cyprus = {
    cash: 500,
    name: 'Cyprus',
    tax: '5%',
    deposit: function(amount) {
        this.cash += amount * (1 - parseInt(this.tax) * 0.01);        
    },
}

const Shuffler = {
    cash: 10000,
    pick: function(person) {
        this.cash -= 1000;
        person.deposit(1000);
        console.log(`${person.name} got 1000`);
        
    }
}

Shuffler.pick(Panama) // prints Panama got 1000
Shuffler.pick(Cyprus) // prints Cyprus got 1000
Shuffler.pick(Panama) // prints Panama got 1000
Shuffler.pick(Cyprus) // prints Cyprus got 1000

console.log( Panama.cash ) // 2000 
console.log( Cyprus.cash ) // 2000 