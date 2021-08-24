class ourStudent {
    constructor(name, id, university) {
        this.name = name
        this.id = id
        this.university = university
    }
}


// Inheritance
class ourTeacher extends ourStudent{
    constructor(name, id, university, subject) {
        super(name, id, university)
        this.subject = subject // You Can Also Add An Extra  Variable For The ourTeacher Class
    }
}



const student = new ourStudent("Mark", 123, "GreenWhich")
const teacher = new ourTeacher("Jon", 321, "Deff", "CSE")
console.log(student);
console.log(teacher);