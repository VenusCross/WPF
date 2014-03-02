//Venus Cross February 22, 2014...due date February 13,2014..Assignment Expression Worksheet
// this worksheet was done before Crystal Silvestro help 
//Dog Years

var sparkyAge=7;
var sparkyAge = sparkyAge + 7;
 console.log(sparkAge);


// Slice of Pie Part 1


var numOfSlices = 8;
var numOfPeople	= 12;
var numOfPizzas = 5;
var  total=numOfSlices * numOfPizzas/12;
 console.log(total);


// Slice of Pie Part II

var remainder= 40 % 12;
 console.log(remainder);

// Average shopping Bill

var groceryList= [70,50,95,87,99];
var total= groceryList[0]+groceryList[1]+groceryList[2]+groceryList[3]+groceryList[4]/5;
console.log(total);

//Discounts
var blousePrice= 75.00
var discPercentage=15
var salesTax=8
var salesTotal=blousePrice * discPercentage
var total=salesTotal * salesTax
var result= total*salesTax
console.log(total)
console.log(result)

// Conditional Logic - Logic Operators using the || operator

var budget = 100;
var iPhonePrice = 199.99;
var wonLottery = true;

//if the price of the phone is less our budget AND if our paycheck is over 300
if( iPhonePrice < budget || wonLottery ){
	console.log("We can buy the phone!");
}else{
	console.log ("No phone for you");
}	
	//Logical operators
	
var budget = 300;
var iPhonePrice= 199.99;
var paycheck= 200;
	
//(if the price of the phone is less our budget AND if our paycheck is over 300
if(iPhonePrice < budget && paycheck > 300){
	console.log("We can buy the phone!");
}else{
	console.log("No phone for you");
	
}	
	
// Conditional Logic Ternary Operators
if(condition){
	do if true

}else{do if false
	
}

// ternary looks like this

(condition)? do if true : do if false;


// conditional logic ternary practice from video

var gpa = 48;

// if the gpa is over the min 2.0 score , the student can graduate
/*if(gpa . 2.0){
	console.log("you can graduate!");
	
}else{
	console.log("GPA is too low");
}*/

(gpa > 2.0)? console.log("you can graduate") : console.log("GPA too low!");


var age = 11;
var book;


// if the child is under 10, they get Green Eggs and Ham, otherwise they get The Time Machine
/*if(age <10){
	book = "Green Eggs and Ham";		
}else{
	book = "The Time Machine";
	
}
console.log(book);*/

book = (age < 10)? "Green Eggs and Ham" : "The Time Machine";
console.log(book);

