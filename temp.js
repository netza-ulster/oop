var myvariable = 'something';
console.log(myvariable);
console.log(typeof myvariable);

var x = new String('something else');
console.log(x);
console.log(typeof x);

var computerA = {
    make: 'apple',
    wight: '2.5kg',
    year:2013
};

var computerB = {
    make: 'apple',
    wight: '2.5kg',
    year:2013
};

console.log(computerA);
console.log(typeof computerA);

var computerB = new Object();

computerB.make = 'apple';
computerB.weight = '2.5kg';
computerB.year = 2013;

console.log(computerB);
console.log(typeof computerB);

function Computer(){};

Computer.prototype.make = "Defatuls Make";
Computer.prototype.weight = "Defauls weight";
Computer.prototype.year = 1923;
Computer.prototype.software = ['visual studio code', 'keynote'];

Computer.prototype.getInfo = function(){
    console.log(this.make + ' / ' + this.weight + ' / ' + this.year);
}

var computerC = new Computer();
console.log(computerC.getInfo());

console.log(computerB === computerA);
console.log(computerB == computerA);

var computerC = computerB;
console.log(computerB === computerC);
console.log(computerB == computerC);

var basicObject = {x:1}

var inheritObject = Object.create(basicObject);
inheritObject.y = 2;

console.log('------')
console.log("x" in inheritObject);
console.log("y" in inheritObject);
console.log("z" in inheritObject);
console.log('------')
console.log(inheritObject.hasOwnProperty("x"));
console.log(inheritObject.hasOwnProperty("y"));
console.log('------')
console.log(basicObject.hasOwnProperty("x"));
console.log(basicObject.hasOwnProperty("y"));
