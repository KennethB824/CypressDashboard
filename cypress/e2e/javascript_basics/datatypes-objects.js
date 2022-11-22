var name = 'James'
var age = 32
var name_object = {firstName : 'James', lastName: 'Bond'}
var truth = true
var sheets = ['HTML', 'CSS']
var a = null

var students = {
    firstName : 'Harry',
    lastName : 'Potter',
    age : 18,
    height : 180,

    fullName : function(){
        return this.firstName + " " + this.lastName
    }

}

const ageValue = students.age

console.log(ageValue);
console.log(students.fullName());