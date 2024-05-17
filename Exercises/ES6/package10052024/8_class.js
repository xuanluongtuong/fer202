class Student {
    // constructor
    constructor(fName, lName) {
        this.fName = fName;
        this.lName = lName;
    }

    //method show info
    showInfo() {
        console.log(`Full name is: ${this.fName} ${this.lName}`);
    }
}

// Initialization: new Object
stu = new Student("Tho", "Pham Ngoc");
stu.showInfo();
