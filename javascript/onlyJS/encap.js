class Student{
    constructor(fname,marks)
    {
       var fname;
       var marks;
    }
    getName()
    {
        return this.fname;
    }
    setName(fname)
    {
        this.fname=fname;
    }
    getMarks()
    {
        return this.marks;
    }

    setMarks(marks){
        if(marks<0 || marks>100)
        {
            console.log("invalid marks")
        }
        else
        {
            this.marks=marks;
        }
    }
}
var students=new Student();
students.setName("Barathi")
students.setMarks(100)
console.log(students.getName()+" "+students.getMarks())