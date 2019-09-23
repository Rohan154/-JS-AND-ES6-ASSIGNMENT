class stud{
    constructor(name,rollno,age){
      this.name=name;
      this.roll=rollno;
      this.age=age;
    }
}


//the use of inheritence starts here
class programmer extends stud{
    constructor(name,rollno,age,subject){
        super(name,rollno,age); // super is a keyword when you call any class through extends this will get the constructor defined in that class.
        this.subject=subject;
    }
 favouriteSubject() {
      if(this.subject=='english')
          return 'english';
       else
       return 'maths';
}
static mul(a,b){
    return a*b;
    
}
}



student=new programmer("rohan",27,20,"english");
console.log(student);
console.log(student.favouriteSubject());
console.log(programmer.mul(3,5));