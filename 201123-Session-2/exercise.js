// Create an Animal, containing species, colour, numberOfLegs, gender, and name
// and the following methods
// eat => `${name} is eating.`
// speak => `${name} is speaking.`
// isDangerous => numberOfLegs > 4 or numberOfLegs === 0 -> dangerous, console.log if they are dangerous or not

class Animal {
  constructor(species, colour, numberOfLegs, gender, name) {
    this.species = species
    this.colour = colour
    this.numberOfLegs = numberOfLegs
    this.gender = gender
    this.name = name
  }

  eat() {
    console.log(`${this.name} is eating.`)
  }

  speak() {
    console.log(`${this.name} is speaking.`)
  }

  isDangerous() {
    this.numberOfLegs > 4 || this.numberOfLegs === 0
      ? console.log(`${this.name} is dangerous.`)
      : console.log(`${this.name} is not dangerous.`)
  }
}

const octopus = new Animal("octopus", "black", 8, "m", "Michael")
octopus.isDangerous()
const snake = new Animal("snake", "black", 0, "f", "Susan")
snake.isDangerous()
const cat = new Animal("cat", "black", 4, "f", "Lola")
cat.isDangerous()

// class Dog extends Animal

class Dog extends Animal {
  constructor(colour, gender, name) {
    super("dog", colour, 4, gender, name)
  }

  speak() {
    console.log(`${this.name} says "Woof Woof!"`)
  }
}

const myDog = new Dog("white", "female", "Gureum")
myDog.speak()
