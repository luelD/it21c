class Person{

    //Private Fields
    #name;
    #age;
    #occupation;
    #hobby;
    #motto;

    constructor(name, age, occupation, motor, ambition){
        this.#name = name;
        this.#age = age;
        this.#occupation = occupation;
        this.#hobby = hobby;
        this.#motto = motto;
    }

    //Getters
    get name(){
        return this.#name;
    }

    get age(){
        return this.#age;
    }

    get occupation(){
        return this.#occupation;
    }

    get motor(){
        return this.#hobby;
    }

    get ambition(){
        return this.#motto;
    }

    // Method to display person information in the console
    displayInfo() {
        console.log("Name: " + this.name);
        console.log("Age: " + this.age);
        console.log("Occupation: " + this.occupation);
        console.log("Hobby: " + this.hobby);
        console.log("Motto" + this.motto);
    }

    // Method to display person information in the HTML
    displayInfoHTML() {
        const personElement = document.getElementById('personOne');
        personElement.innerHTML = `
            <strong>Name:</strong> ${this.name}<br>
            <strong>Age:</strong> ${this.age}<br>
            <strong>Occupation:</strong> ${this.occupation}<br>
            <strong>Hobby:</strong> ${this.hobby}<br>
            <strong>Motto:</ambition> ${this.motto}<br>
        `;
    }
}

class Student extends Person {
    constructor(name, age, occupation, hobby, motto, major) {
        super(name, age, occupation, hobby, motto);
        this.major = major;
    }

    // Overriding the displayInfo method
    displayInfo() {
        super.displayInfo();
        console.log("Major: " + this.major);
    }

    // Extending the displayInfoHTML method
    displayInfoHTML() {
        super.displayInfoHTML();
        const personElement = document.getElementById('personOne');
        personElement.innerHTML += `<br><strong>Major:</strong> ${this.major}`;
    }
    }

    // Creating an instance of the Student class
    const studentOne = new Student('Luel Dawn T. Cagay', 20, 'student', 'playing mobile games', 'if you dont take a risk, you cant create a future', 'Information Technology');

    // Calling methods
    studentOne.displayInfo();