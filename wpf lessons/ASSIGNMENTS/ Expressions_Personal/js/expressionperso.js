// Venus Cross 3/1/2014 Expression Personal Assignment

Date()



/*//Weightloss Fatburner pills ...  There are 30pills in one bottle. 
A half of pill is taken daily. There are 365 days in a year.  How many pills have been taken from January 1, 2013 to today date?*/
// Part II: How many pills left in bottle for  a month?

var bottle = 30 // number of capsules a bottle
var prescribed = .5 ;// amount prescribed 
var daysInYear = 365; // number of days in a year
var total = prescribed * daysInYear // calculations for answer 
var totalHalfMonth = bottle / prescribed;
var daysInMonth = 30;
var yearFourteen = daysInMonth * 2 + daysInYear;
var totalNow= daysInYear + yearFourteen;
console.log(total);
console.log (totalHalfMonth);
console.log(yearFourteen);