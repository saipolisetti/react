function Student() {
    this.name = 'John';
    this.gender = 'M';
}
Student.prototype={age:23};
var studObj = new Student();
var studObj1 = new Student();
Student.prototype={age:24};
var studObj2 = new Student();
console.log( Student.prototype); // object
console.log(studObj.prototype); // undefined
console.log(studObj.__proto__); // object
console.log(studObj.age);
console.log(studObj1.age);
console.log(studObj2.age);
console.log(typeof Student.prototype); // object
console.log(typeof studObj.__proto__); // object

console.log(Student.prototype === studObj.__proto__ ); // true
console.log(typeof Student);
console.log( Student instanceof Function);
console.log(studObj instanceof Object);
console.log( Student instanceof Object);