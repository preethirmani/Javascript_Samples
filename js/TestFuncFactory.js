
//Creating Factory of Functions


function makeMultiplier(multipler) {
	// here value of myFunc is function itself
	var myFunc = function(x) {
		return multipler * x;
	};
	return myFunc;
}


// result is a reference for myFunc
// result is assigned the value of my Func i.e function(x) {return 3 * x}

var result = makeMultiplier(3); 
console.log (result);  
console.log(result(10)); //to incoke myFunc();


//passing function as value

function doOperation(funcName, arg) {
	return funcName(arg);
}

var product = doOperation(result, 20);
console.log(product);
console.log(doOperation);

