function validname(name){
	
	var regex=/^[a-zA-Z]+$/;
    if (!regex.test(name))
    {
        alert("Must input name in alphabets");
        return false;
    }
    else
     return true;
}	
function validnumber(number)
{
	if(number.length>10||number.length<10)
		{alert("Please enter valid mobile number");
	     return false;
	    }
	else if(number.length===10 && isNaN(number))
		{alert("Please input numbers only on Mobile No. field");
	     return false;
	    }
	else 
		return true;
}

function check()
{
	var fname=document.getElementById("fname");
    var lname=document.getElementById("lname");
    var number=document.getElementById("number");
    
    
	if(validname(fname.value)===true && validname(lname.value)===true&& validnumber(number.value)===true)
		alert("Thanks for contacting us!");
	else
		alert("Not Submitted");
}



	


