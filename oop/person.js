const Person = function (firstName, lastName, age, likes = []) {
    this.firstName = firstName
    this.lastName = lastName
    this.age = age
    this.likes = likes
}

// Prototypal inheritance
// Prototype is an object on this object.

// We put everything that we want to share with the instances of this constructor function.
Person.prototype.getBio = function () {
    let bio = `${this.firstName} is ${this.age}`

    this.likes.forEach((like) => {
        bio += ` ${this.firstName} likes ${like}.`
         })
    return bio
}
Person.prototype.setName = function (fullName) {
    const names = fullName.split(' ')
    this.firstName = names[0]
    this.lastName = names[1]
}

// functions that ues the new word are constructor functions. at first they print the function name and parens 
const me = new Person('Andrew', 'Young', 27, ['Teaching', 'Biking'])
me.setName('Alexis Turner')
console.log(me.getBio())



const person2 = new Person('Clancey', 'Toms', 55)
console.log(person2.getBio())