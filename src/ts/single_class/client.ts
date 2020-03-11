'use strict';

class Greeter {
    greeting: string;
    constructor(message: string) {
        this.greeting = message;
    }
    greet(): Promise<Response> {
        return "Hello, " + this.greeting;
    }
}

const greeter = new Greeter("world");
greeter.greet(); // no-floating-promises erorr

