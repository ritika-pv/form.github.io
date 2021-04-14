function validation() {
    //validation for name
    var error = false;
    var name = document.getElementById('name').value;
    var n = name.trim();
    if (n == "") {
        error = true;
        document.getElementById('sname').innerHTML = "**Please fill the name field**";

    }

    if (!isNaN(n)) {
        error = true;
        document.getElementById('sname').innerHTML = "**Wrong Data Inserted**";

    }
    if (n.length < 3)
    {
        error = true;
        document.getElementById('sname').innerHTML = "**There must be minimum 3 characters in your name**";

    } else {
        document.getElementById('sname').innerHTML = "";
    }


    //validations for age        
    var age = document.getElementById('age').value;
    var a = age.trim();
    if (a == "") {
        error = true;
        document.getElementById('sage').innerHTML = "**Please fill the age field**";

    } else if (!((a > 0) && (a < 120))) {
        error = true;
        document.getElementById('sage').innerHTML = "**Wrong Data Inserted**";

    } else {
        error = true;
        document.getElementById('sage').innerHTML = "";
    }


    //validations for contact
    var cont = document.getElementById('contact').value;
    var ct = cont.trim();
    if (ct == "") {
        error = true;
        document.getElementById('scontact').innerHTML = "**Please fill the contact field**";

    }
    if (isNaN(ct)) {
        error = true;
        document.getElementById('scontact').innerHTML = "**Contact No. must have digits only **";

    }
    if (ct.length != 10) {
        error = true;
        document.getElementById('scontact').innerHTML = "**Contact No. must have 10 digits **";

    } else {
        document.getElementById('scontact').innerHTML = "";
    }


    //validations for email     
    var email = document.getElementById('email').value;
    var e = email.trim();
    if (e == "") {
        error = true;
        document.getElementById('semail').innerHTML = "**Please fill the email field**";

    } else {
        document.getElementById('semail').innerHTML = "";
    }


    //validations for password   
    var pass = document.getElementById('pass').value;
    var p = pass.trim();
    if (p == "") {
        error = true;
        document.getElementById('spassword').innerHTML = "**Please fill the password field**";

    }
    if (p.length < 8) {
        error = true;
        document.getElementById('spassword').innerHTML = "**password must be atleast 8 characters long**";

    } else {
        document.getElementById('spassword').innerHTML = "";
    }

    // validations for confirm password
    var cpass = document.getElementById('cpass').value;
    var cp = cpass.trim();
    if (cp == "") {
        error = true;
        document.getElementById('sconfirmpassword').innerHTML = "**Please fill the confirm password field**";

    }
    if (cp != p) {
        error = true;
        document.getElementById('sconfirmpassword').innerHTML = "**Oops!...Wrong Password **";

    } else {
        document.getElementById('sconfirmpassword').innerHTML = "";
    }


    //validations for address     
    var address = document.getElementById('address').value;
    if (address == "") {
        error = true;
        document.getElementById('saddress').innerHTML = "**Please fill the confirm address field**";

    }
    if ((address.length > 200) && (address.length < 500)) {
        document.getElementById('saddress').innerHTML = "";

    } else {
        error = true;
        document.getElementById('saddress').innerHTML = "**Length of the address must be between 200 and 500 characters**";
    }
    //validations for checkbox 

    var city = document.getElementById("form-city").value;
    if (city === "") {
        error = true;
        document.getElementById('scity').innerHTML = "**please select a city**";
    }


    /* Hobby Validation */
    var hobbies = document.getElementsByName("hobbies");
    var hobbyCheck = false;
    for (var i = 0; i < hobbies.length; i++) {
        if (hobbies[i].checked == true) {
            hobbyCheck = true;
            break;
        }
    }
    if (!hobbyCheck) {
        error = true;
        document.getElementById('shobby').innerHTML = "**please select atleast one hobby**";
    }
    //gender validation
    var gender = document.getElementsByName("gender");
    var genderCheck = false;
    for (var i = 0; i < gender.length; i++) {
        if (gender[i].checked == true) {
            genderCheck = true;
            break;
        }
    }
    if (!genderCheck) {
        error = true;
        document.getElementById('sgender').innerHTML = "**please select gender**";
    }


    if (error)
    {
        return false;
    }







    return true;

}
                                    