// Class
class ourTeacher {
    constructor(name, job, place, id, subject, aim, university){
        this.name = name
        this.job = job
        this.place = place
        this.id = id
        this.subject = subject
        this.aim = aim
        this.university = university
    }
}

// Inheritance
class ourStudent extends ourTeacher {
    constructor(name, job, place, id, subject, aim, university, house){
        super(name, job, place, id, subject, aim, university)
        this.house = house  // You Can Also Add An Extra  Variable For The ourTeacher Class
    }
}


// Creating New Objects Form Class
const teacher = new ourTeacher("Mark", "Banker", "Dhaka", 123, "CSE", "Programmer", "GreenWhich")
const student = new ourStudent("Jon", "Student", "America", 321, "CCC", "Coder", "Oxford", "ManVilla House")
const employee = new ourStudent("Tiger", "Employee", "London", 234, "BSC", "Businessman", "ParisUniversity", "sunVilla House")
console.log(student);
console.log(teacher);
console.log(employee);