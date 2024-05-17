//khai bao 1 doi tuong
const student = {
    fName : "Dung",
    lName : "Nguyen Thi",
    age : 20
};

//khai bao 1 mang
const course = ["FER202", "SDN301", "WDP301", "MMA302"];

//phan ra doi tuong va mang
const {fName, lName, age} = student;
console.log(`Info: ${fName} ${lName} - ${age}`);

const[c1, c2, ...c3] = course;
console.log(`List of courses: ${c1}, ${c2}, ${c3}`)

// Đối tượng
const person = {
    name: 'John Doe',
    age: 30,
    city: 'New York'
};

// Destructuring
const { name, age, city } = person;

console.log(name); // 'John Doe'
console.log(age); // 30
console.log(city); // 'New York'