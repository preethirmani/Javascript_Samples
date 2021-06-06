//Function Constructor
// always capticalize function constructor name

function Circle(radius) {
	this.radius = radius;
}

Circle.prototype.getArea = function() {
	return Math.PI*Math.pow(this.radius, 2);
}

var cir = new Circle(10);
console.log(cir.getArea());

function Dog(name) {
  this.name = name;
}

Dog.prototype.bark = function () {
  console.log(this.name + " likes barking! Bark!");
}

var max = new Dog("Max", "Buddy", "tom");
max.bark();


var counter = 0;
var myArray = ["Yaakov", 2, {handle: "yaakovchaikin"}];
for (var i = 0; i < myArray.length; i++) {
  counter++;
}
console.log(counter);