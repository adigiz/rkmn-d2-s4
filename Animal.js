class Animal {
    #age;
    constructor(name, food, energy, canReproduce, age) {
      this.name = name;
      this.food = food;
      this.energy = energy;
      this.canReproduce = canReproduce;
      this.#age = age;
    }
  
    getAge() {
      return this.#age;
    }
  
    // Tell Don't Ask
    isAdult() {
      return this.#age > 18;
    }
  }
  
  export default Animal;
  