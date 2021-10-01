let mon = document.getElementById('Month')
let day = document.getElementById('Day')
let year = document.getElementById('Year')
let age = document.getElementById('age')
let blabel = document.getElementById('DOB')
/**
 * 
 * @author Ambika Hadapad
 * @description validation for the first Name field 
 * @returns Boolean based on the input validation.
 */
function fnameValidate() {
    var Name = document.getElementById("FName");
    var error = document.getElementById("error_msg");
    var Test_Name = /^[A-Za-z]{3,15}$/;
    if (Name.value == '') {
        error.innerHTML = "* Please fill out this field";
        error.style.color = "red";
        error.style.visibility="visible";
        return false;
    }
    else if (Name.value.match(Test_Name)) {
        return true;
    }
    else {
        document.getElementById('error_msg').innerHTML = "Numbers and special characters are not allowed";
        document.getElementById('error_msg').style.color = "red";
        error.style.visibility="visible";
        return false;
    }
}

//Validation For Last Name//

function lnameValidate() {
    var lastName = document.getElementById("Lname");
    var Error = document.getElementById("error_msg1");
    var Test_Lname = /^([A-Za-z]{3,15})$/;
    var Test_Lname1 = /([@#$%^*\.-_0-9])/;

    if (lastName.value == '') {
        Error.innerHTML = "* Please fill out this field";
        Error.style.color = "red";
        Error.style.visibility = "visible";
        return false;
    }
    else if (lastName.value == Test_Lname1.value) {
        Error.innerHTML = "* Numbers and special characters are not allowed";
        Error.style.color = "red";
        Error.style.visibility = "visible";
        return false;
    }
    else if (lastName.value.match(Test_Lname)) {
        return true;
    }
    else {
        document.getElementById('error_msg1').innerHTML = "Numbers and special characters are not allowed";
        document.getElementById('error_msg1').style.color = "red";
        Error.style.visibility = "visible";
        return false;
    }
}

//Validation For Phone Number/

function mobNumber() {
    var moNumber = document.getElementById("mobno");
    var Error1 = document.getElementById("error_msg2");
    var Test_mNo = /^([0-9]{10})$/;
    var Test_mNo1 = /([A-Za-z@#$%^&*\.-])/;

    if (moNumber.value == '') {
        Error1 = document.getElementById("error_msg2");
        Error1.innerHTML = "* Please fill out this field";
        Error1.style.visibility="visible";
        Error1.style.color = "red";
        return false;
    }
    else if (moNumber.value.match(Test_mNo)) {
        return true;
    }
    else if (moNumber.value.match(Test_mNo1)) {
        Error1 = document.getElementById("error_msg2");
        Error1.innerHTML = "* Letters and special characters are not allowed";
        Error1.style.color = "red";
        Error1.style.color = "visible";
        return false;
    }
    else {
        document.getElementById('error_msg2').innerHTML = "Please Enter 10 digit number";
        document.getElementById('error_msg2').style.color = "red";
        Error1.style.color = "visible";
        return false;
    }

}

//Validation For Office Number//

function phoneValidate() {
    var phNumber = document.getElementById('phNumber');
    var Error3 = document.getElementById('error_msg3');
    var test_ph = /^([0-9]{10,12})$/;
    var test_ph1 = /([A-Za-z@#$%^&*\.-])/;

    if (phNumber.value == '') {
        Error3.innerHTML = "This field cannot be blank";
        Error3.style.color = "red";
        Error3.style.color = "visible";
        return false;
    }
    else if (phNumber.value.match(test_ph1)) {
        Error3 = document.getElementById("error_msg2");
        Error3.innerHTML = "* Letters and special characters are not allowed";
        Error3.style.color = "red";
        Error3.style.color = "visible";
        return false;
    }
    else if (phNumber.value.match(test_ph)) {
        return true;
    }
    else {
        Error3.innerHTML = "* Only 10 digit and 12 digit numbers are allowed";
        Error3.style.color = "red";
        Error3.style.color = "visible";
        return false;
    }
}

//Validation For EmailId//

function emailValidate() {
    var emailId = document.getElementById("mail");
    var Error4 = document.getElementById("error_msg4");
    var test_email =/^([a-zA-Z0-9\.-]{2,5})+@([a-zA-Z0-9-]{2,8}+).([a-z]{2,20})$/;

    if (emailId.value == '') {
        Error4.innerHTML = "Please fill out this field";
        Error4.style.color = "red";
        Error4.style.visibility = "visible";
        return false;
    }
    else if (!emailId.value.match(test_email)) {
        Error4.innerHTML = "You have entered wrong email id";
        Error4.style.color = "red";
        Error4.style.visibility = "visible";
        return false;
    }
    else {
        Error4.innerHTML = "";
        return true;
    }
}
//Validation For Password//

function passValidate() {
    var Password = document.getElementById("pass"); d
    var Error5 = document.getElementById("error_msg5");
    var test_pass = /^([a-zA-z0-9]{8,12})$/;

    if (Password.value == '') {
        Error5.innerHTML = "Please fill out this field";
        Error5.style.color = "red";
        Error5.style.visibility = "visible";
        return false;
    }
    else if (Password.value.match(test_pass)) {
        return true;
    }
    else if (Password.value.length < 8) {
        Error5.innerHTML = "Minimum password length should be 8";
        Error5.style.color = "red";
        Error5.style.visibility = "visible";
        return false;
    }
    else {
        Error5.innerHTML = "Password cannot have length more than 12";
        Error5.style.color = "red";
        Error5.style.visibility = "visible";
        return false;
    }
}

//Validation For Confirm Password//
function conPassword() {
    var coPassword = document.getElementById('conPass');
    var Error6 = document.getElementById('error_msg6');
    var pass1 = document.getElementById('pass');
    if (coPassword.value == '') {
        Error6.style.visibility ="visible";
        Error6.innerHTML = "Password cannot be blank";
        Error6.style.color = "red";
       // Error6.style.visibility ="visible";
        return false;
    }
    else if (coPassword.value != pass1.value) {
        Error6.style.visibility= "visible";
        Error6.innerHTML = "* Password not Matched";
        Error6.style.color = "red";
       // Error6.style.visibility= "visible";
        return false;
    }
    else {
        return true;
    }
}

//Validation For Radio button//
function radioValidation() {
    console.log("Choose the option");
    var Gender = document.getElementsByName("radio");
    Error_Msg = document.getElementById('radio1');
    var i = 0;
    for (i = 0; i <= Gender.length; i++) {
        if (Gender[i].checked) {
            Error_Msg.innerHTML = "";
            //  Error_Msg.style.color = "green";
            return true;
        }
        else if (Gender[i + 1].checked) {
            Error_Msg.innerHTML = "";
            // Error_Msg.style.color = "green";
            return true;
        }
        else (!Gender[i].checked || !Gender[i].checked)
        {
            Error_Msg.innerHTML = " * Please select at least one option";
            Error_Msg.style.color = "red";
            Error_Msg.style.visibility ="visible";
            return false;
        }
    }
}

//Validation For CheckBox//
function chceckValidate() {
    var Checkbox1 = document.getElementById("checkbox_sample18");
    var Checkbox2 = document.getElementById("checkbox_sample19");
    var Checkbox3 = document.getElementById("checkbox_sample20");
    var check_error = document.getElementById("check");
    if (Checkbox1.checked == true) {
        check_error.innerHTML = "";
        return true;
    }
    else if (Checkbox2.checked == true) {
        check_error.innerHTML = "";
        return true;
    }
    else if (Checkbox3.checked == true) {
        check_error.innerHTML = "";
        return true;
    }
    else {
        check_error.innerHTML = "* Please Select at least one option";
        check_error.style.color = "red";
        check_error.style.visibility="visible";
        return false;
    }
}

//Validation for Age//
function ageCalculator() {
    if (mon.value != '' && day.value != '' && year.value != '') {

        var today = new Date();
        console.log("today", today);

        blabel.style.color = "";
        const date1 = new Date(mon.value + '/' + day.value + '/' + year.value);
        const date2 = new Date(today.getMonth() + 1 + '/' + today.getDate() + '/' + today.getFullYear());
        console.log(date1, date2);
        const diff = Math.abs(date2 - date1);
        console.log(diff);
        const currentAge = (diff / (1000 * 60 * 60 * 24)) / 365
        age.value = parseFloat(currentAge)
        age.style.border = '2px solid green'

        return true

    } else {
        age.value = "";
        alert("please select birthdate to calculate age")
        age.style.border = '2px solid red';
        blabel.style.color = "red";
        return false
    }
}
//validation For About Field//

function aboutValidate() {
    var About = document.getElementById('about');
    var Error9 = document.getElementById('error_msg9');

    if (About.value == '') {
        Error9.innerHTML = "* Please fill out this field";
        Error9.style.color = "red";
        Error9.style.visibility ="visible";
    }
}

function validate() {
    let f1 = radioValidation();
    let f2 = chceckValidate();
    /*if(f1 && f2)
    {
        alert("Form submitted");
    }
    else{
        alert("please fill all the fields");
    }*/
    
    if (document.getElementById('FName').value == '') {
        alert("First name cannot be blank");

    }
    else if (document.getElementById('Lname').value == '') {
        alert("Last name cannot be blank");
    }
    else if (document.getElementById('mobno').value == '') {
        alert("Mobile Number cannot be blank");
    }
    else if (document.getElementById('phNumber').value == '') {
        alert("Office number cannot be blank");
    }
    else if (document.getElementById('mail').value == '') {
        alert("Email cannot be blank");
    }
    else if (document.getElementById('pass').value == '') {
        alert("Password field cannot be blank");
    }
    else if (document.getElementById('conPass').value == '') {
        alert("Confirm Password fieldcannot be blank");
    }
    else if (document.getElementById('DOB').value == '') {
        alert("Birth date cannot be blank");
    }
    else if (f1 == false) {
        alert("Please select gender");
    }
    else if (f2 == false) {
        alert("Please select interest");
    }
    else if (document.getElementById('about').value == '') {
        alert("About field cannot be blank");
    }
    else {
        alert("Form submitted Successfully!");
    }

}