class Clock {
    constructor() {
        let date = new Date;
        this.hours = date.getHours();
        this.minutes = date.getMinutes();
        this.seconds = date.getSeconds();
        setInterval(this._tick, 1000);
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

const clock = new Clock()
