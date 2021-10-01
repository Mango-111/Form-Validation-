function seterror(id, error)
{
    element = document.getElementById(id);
    element.getElementsByClassName('formerror').innerHTML = error;
}



function validate()
{
    /* validation for phone number*/
    var returnval= true;
    var Mobile = document.getElementById("mobno").value;
    var regx = /^([0-9\.-]){10}$/;
        if (regx.test(Mobile))
        {
        }
        else {
            seterror("mobno","*Invalid Mobile number");
            return false;
        }

    /*validation for mail id*/
    var mailid = document.getElementById("mail").value;
        var regx1 = /^([a-zA-Z0-9\.-])+@([a-zA-Z0-9-]+).([a-z]{2,20})$/;
        if (regx1.test(mailid)) 
        {
        }
        else {
            seterror("mail","*Please Enter emailid in correct format");
            returnval = false;
        }

    /*validation for the password */
    var pass = document.getElementById("pass").value;
    var regx2 =/^([a-zA-Z0-9\.-]{8,12})$/;
    if (regx2.test(pass))
    {
    }
    else {
        seterror("pass","*Please Enter correct password");
        returnval = false;
    }


}
/*Function to clear error when correct data is entered */
function clearError()
{
    errors = document.getElementsByClassName("formerror");
    for(let item of errors)
    {
        item.innerHTML="";
    }
   
}
/*  var Bday = document.getElementById("Day").value;
var Bmonth =document.getElementById("Month").value;
var Byear = document.getElementById("Year").value;
var Message = document.getElementById("age_msg");

switch(document.getElementById("Month").value)
{
    case "jan" : Bmonth=1;
                 break;
    case "feb" : Bmonth=2;
                 break;
    case "march": Bmonth=3;
                 break;
    case "april" : Bmonth=4;
                  break;
    case  "may" :Bmonth=5;
                 break;  
    case "june" :  Bmonth=6;
               break;
    case "july" :  Bmonth=7;
               break;
    case "aug" :  Bmonth=8;
               break;
    case "sep" :  Bmonth=9;
               break;
    case "oct" :  Bmonth=10;
               break;
    case "nov" :  Bmonth=11;
               break;
    case "dec":Bmonth=12;
               break;
}
if (Bday || Bmonth || Byear != '') {
    const inputDate = new Date();
    date2 =(Bday.value + '/' + Bmonth.value + '/' + Byear.value);
    console.log(date2);

    const currentDate = new Date();
    date1 = currentDate.getDate() + '/' + (currentDate.getMonth() + 1) + '/' + currentDate.getFullYear();
    console.log(date1);
    const New_Age =currentDate.getFullYear()-Byear;
    console.log("age",New_Age);

    const age_year = Math.abs((currentDate.getFullYear())-(Byear.value));
    console.log("age", age_year);

    const Age1 = document.getElementById('age').value;
    const currentAge = (age / (1000 * 60 * 60 * 24)) / 365;
    console.log(currentAge);
    Age1 = parseFloat(currentAge);
    return true;
}
else {
    alert("Please enter the DOB");
    Age1.style.border.color = "red";
}
}*/

// else if(Name.value == '@'||'!'||'#'||'$'||'%'||'^'||'&'||'*'||'()'||'.'||'<>')
    // {
    //     document.getElementById('error_msg').innerHTML = "special characters are not allowed";
    //     document.getElementById('error_msg').style.color = "red";
    //     return false;
    // }
    // else if(Name.value == '0'||'1'||'2'||'3'||'4'||'5'||'6'||'7'||'8'||'9')
    // {
    //     document.getElementById('error_msg').innerHTML = "Numbers are not allowed";
    //     document.getElementById('error_msg').style.color = "red";
    //     return false;
    // }