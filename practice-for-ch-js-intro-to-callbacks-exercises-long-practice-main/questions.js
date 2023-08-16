class Clock {
    constructor() {
        let date = new Date;
        this.hours = date.getHours();
        this.minutes = date.getMinutes();
        this.seconds = date.getSeconds();
        setInterval(this._tick.bind(this), 1000);
        // setInterval(() => _tick(), 1000); look this up to make sure 
    
    };

    printTime() { 
        let time = `${this.hours}:${this.minutes}:${this.seconds}`;
        console.log(time);
    };

    _tick() {
        this.seconds += 1;
        if (this.seconds === 60) {
            this.seconds = 0 
            this.minutes += 1
        };
        if (this.minutes === 60 ) {
            this.minutes = 0
            this.hours += 1
        };
        if (this.hours === 24 ) {
            this.hours = 0
        };
        this.printTime()
    };

}

//const clock = new Clock()




//ADDNUMBERS
const readline = require("readline")
const reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function addNumbers(sum, numsLeft, completeionCallback) {
    if (numsLeft > 0) { 
        reader.question("Enter a Number: ", inputNum => {
            sum += parseInt(inputNum);
            console.log(`The current sum is ${sum}!`);
            numsLeft--;
            addNumbers(sum, numsLeft, completeionCallback);
    })
    } else { 
        completeionCallback(sum)
    };
};

addNumbers(0, 3, sum => console.log(`Total Sum: ${sum}`));

