class StaticMethod {
    constructor(name, id, aim){
        this.name = name
        this.id = id
        this.aim = aim
    }
    static staticMeth(){
        console.log(`I'm A Static Method`);
    }
}


const statics = new StaticMethod("Mark", 123, "Programmer")
console.log(StaticMethod.staticMeth()); // staticMeth can only be called by StaticMethod not with the object created from StaticMethod
console.log(statics);