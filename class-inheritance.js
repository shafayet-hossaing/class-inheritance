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

class ourStudent extends ourTeacher {
    constructor(name, job, place, id, subject, aim, university){
        super(name, job, place, id, subject, aim, university)
    }
}



const teacher = new ourTeacher("Mark", "Banker", "Dhaka", 123, "CSE", "Programmer", "GreenWhich")
const student = new ourStudent("Jon", "Student", "America", 321, "CCC", "Coder", "Oxford")
const employee = new ourStudent("Tiger", "Employee", "London", 234, "BSC", "Businessman", "ParisUniversity")
// console.log(student);
// console.log(teacher);
console.log(employee);