//Copyinb By Value

var a = 7;
var b = a; // assigning the value of a to b

console.log ("a and b ::"+ a + " " + b);

//changing the value of b will not affect a

b = 9;
console.log ("a and b after update ::" + a + "  " + b);

// Copying by Reference

var obj1 =  { x : 'a'};
var obj2 = obj1; // assigning the object 2 to object 1 this means both these objects 
//points to  the same memory location that has x:a  but not the actual value


console.log("Obj1 :: " + obj1.x) ;
console.log("Obj2 ::  " + obj2.x);



console.log("After updating the value of obj2.x");
obj2.x = 7;

console.log("Obj1 :: " + obj1.x) ;
console.log("Obj2 :: " + obj2.x);

// Pass by Value

function testPassByValue(val) {
	console.log("************PASS BY VALUE****************");
	var temp = val;
	console.log("Values after assigning::");
	console.log("val :: "+ val);
	console.log("temp ::" + temp);

	temp = 54;

	console.log("Values after changing ::");
	console.log("val :: " + val);
	console.log("temp :: " + temp);

}

//invoking the function
testPassByValue(10);

//Pass by reference

function testPassByReference(ref) {
	console.log("**********PASS BY REFERENCE **********");
	var obj = ref;

	console.log("Values after assigning::");
	console.log("ref :: "+ ref.x);
	console.log("obj ::" + obj.x);

	obj.x = 54;

	console.log("Values after changing ::");
	console.log("ref :: " + ref.x);
	console.log("obj :: " + obj.x);
}

//invoking the function
var testObj = {x : 'a'};
testPassByReference(testObj);





