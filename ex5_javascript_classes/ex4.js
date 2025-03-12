"use strict";

class CircularBuffer{

    #size;
    #free;

    constructor(size){
        this.array = new Array(size);
        this.#free = 0;
        this.position = 0;
        this.#size = size;

    }

    toString = function(){
        let retorno = [];
        for (let i = 0; i < this.size; i++) {
            retorno[i] =  this.array[i];
        }
        return retorno;
    } 
    
    get size() {
        return this.#size;;
    }

    get free() {
        return this.#free;
    }

    put(x){
        if(this.position == 5){
            this.pop();
        }
        this.array[this.position] = x;
        this.position++;
        this.#free = this.position;
        return this;
    }

    pop(){
        if (this.position != 0){
            this.position--;
            return this.array.shift(this.#free+1);
        }else{
            console.error("Error: Circular buffer is empty.")
        }
    }
    
}

const buffer = new CircularBuffer(5);
console.log(buffer.size);
try { buffer.size = 9;} catch(e){console.log(e)};
buffer.put(8).put('a').put(3);
console.log(buffer.toString());
console.log(buffer.pop() + ' free: ' + buffer.free); // 8 free: 3
console.log(buffer.toString());
buffer.put(4).put(5).put(6).put(7);
console.log(buffer.toString());
buffer.pop();buffer.pop();buffer.pop();
buffer.pop();buffer.pop();
buffer.pop(); // Error: Circular buffer is empty.
