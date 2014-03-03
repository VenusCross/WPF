// Venus Cross March 2, 2014 Conditional Industry Assignment

//  Criteria for Who Should Get Vaccinated Against Influenza

var fluAge = prompt("Enter your Age","");
var fluShotAge = true; // boolean true or false
if (fluShotAge && fluShotAge=="")// this is suppose to be validator
{alert("Please enter your age")
	
}
if (fluShotAge && fluShotAge <=4)
{ alert("Parent get your child the flu shot NOW your baby is at RISK ");
} if(fluAge >=50){
	alert("Call your Doctor make an Appointment now flu shot You are at RISK!");
}else
	if(fluAge <=49){ 
	alert("you may or may not need injection");
}