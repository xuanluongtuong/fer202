//phuong phap truyen thong
function Add(a, b) {
    return a + b;
}

//su dung arrow function
let Add1 = (a, b) => a + b;

let Add2 = (a, b) => {
    if (a <= 0 || b <= 0) {
        console.log("a, b must be greater than zero");
    } else {
        return a + b;
    }
}

let showName = () => {
    let name = "Tuong Xuan Luong";
    console.log("Name is: " + name);
}

console.log("Add = " + Add(10, 20));
console.log("Add = " + Add1(10, 20));
console.log("Add = " + Add2(10, 20));

showName();

let getAge = age => console.log("Age is: " + age);

//Arrow function within Object literal
let person = {
    fName: "Tho",
    lName: "Pham Ngoc",
    fullName: function () {
        console.log(`Full name is:${this.fName} ${this.lName}`)
    }
};

getAge(25);
person.fullName()

