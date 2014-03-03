// Venus Cross March 2, 2014 Functions Personal Assignment

//My bills for eight months

function myDebt()
{ 
	var myMonthlyDebt = 1;
	var myDebtarray = [];
  
	for (myMonthlyDebt; myMonthlyDebt <+ 9; myMonthlyDebt++)
  {	
  	var myDebtnum = prompt(" Please tell me bill #" + myMonthlyDebt);
  	myDebtarray.push(myDebtnum);
 }
 return myDebtarray;
}

console.log(myDebt());