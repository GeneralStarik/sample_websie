// lokale Variablen in JS
var testVariable;       // definiert eine Variable
var testName = 'Peter'; // weist einer Variable direkt einen Wert zu

// Scope der Variablen ist lokal --> somit auch in der gesamten Funktion
for (var myVariable = 0; myVariable < 5; myVariable++) {
    print(myVariable);
}

// block-level Variablen in JS
for (let myVariable = 0; myVariable < 5; myVariable++) {
    print(myVariable);
}

// Konstanten in JS
const Pi = 3.14;



var name = 'kittens';
if (name == 'puppies') {
    name += ' woof';
} else if (name == 'kittens') {
    name += ' meow';
} else {
    name += '!';
}

name == 'kittens meow';


var counter = 1;
while (counter < 6) {
    print(counter);
    counter++;
}


var input;
do {
    input = get_input();
} while (inputIsNotValid(input));


for (var index = 0; i < 5; i++) {
    print('Der aktuelle Index lautet: ' + index);
}


var array = [1, 2, 3];
for (let value of array) {
    print('Der aktuelle Wert des Arrays ist: ' + value);
}


// logische Operatoren

// weist 'name' den Wert von 'varName' zu und lädt dann über die Funktion 'getName()' einen neuen Wert in 'varName'
var name = varName && varName.getName();

// weist 'name' entweder den Wert von 'cachedName' zu, oder führt die Funktion 'getName()' auf 'cachedName' aus, falls der Wert ungültig ist
var name = cachedName || (cachedName = getName());

// konditionale Operation mit ternärem Operator: falls '(age > 18) == true' weise allowed den Wert 'yes' zu, sonst weise den Wert 'no' zu
var allowed = (age > 18) ? 'yes' : 'no';

// Fallunterscheidung mit switch
switch (action) {
    case 'draw':
        drawGun();
        break;
    case 'holster':
        holsterGun();
        break;
    default:
        doNothing();
}


// Objekte in JS

// neues (leeres) Objekt erstellen
var objectName = {};

// neues Objekt erstellen
var car = {
    manufacturer: 'Audi',
    model: 'A6',
    for: 'me',
    options: {
        color: 'black',
        engine: '3.0 TDI',
        cylinders: 6,
        power: 286,
        torque: 620
    }
};

// auf Attribute des erstellten Objekts zugreifen
car.options.cylinders;      // 6
car['options']['power'];    // 286


// Prototypen und Instanziierung
// Prototyp eines Objekts mit Attributen definieren
function Person(name, age, height, gender) {
    this.name = name;
    this.age = age;
    this.heigt = height;
    this.gender = gender;
}

// Instanz des Prototypen mit eigenen Attributen erzeugen
var myself = new Person('Florian', 31, 183, 'male');    // neue Person

// statt eines Prototypen kann auch eine Objektklasse definiert werden
class Person {
    constructor(name, age, height, gender) {
        this.name = name;
        this.age = age;
        this.heigt = height;
        this.gender = gender;
    }
}


// Arrays

// ein neues Array anlegen und Werte setzen
var myArray = new Array();
myArray[0] = 'apple';
myArray[1] = 'pear';
myArray[2] = 'banana';
myArray[3] = 'orange';
myArray[4] = 'lemon';
// alternative Art zum Anlegen eines Arrays
var myArray = ['apple', 'pear', 'banana', 'orange', 'lemon'];

myArray.length;     // 5

// Objekt am Ende des Arrays einfügen
myArray.push('melon');


