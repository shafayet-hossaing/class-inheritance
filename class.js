// Class In ES5
const ChildES5 = function(name, job, year){
    this.name = name,
    this.job = job,
    this.job = year
}

// Pushing A Function Into ES5 Class
ChildES5.prototype.text = function(){
    console.log("I'm 23 Years Old");
}
// Pushing A Property Into ES5 Class
ChildES5.prototype.year = "2022"

const jon = new ChildES5("Jon", "Web Developer");
// console.log(jon.year);








// Class In ES6
class ChildES6 {
    constructor(name, job, year){
        this.name = name,
        this.job = job,
        this.year = year
    }
}

// Pushing A Function Into ES6 Class
ChildES6.prototype.text = function(){
    console.log("I'm 23 Years Old");
}
// Pushing A Property Into ES6 Class
ChildES6.prototype.year = "2022" // Problem

const mark = new ChildES6("Mark", "Web Dev")
console.log(mark.text());

