function validateform() {
    var email = document.forms["Form"]["form-email"].value;
    if(email == "" || email == null) {
        alert("E-mail Address Must be Filled Out");
        return false;
    }

    var password = document.forms["Form"]["form-password"].value;
    if(password == "" || password == null) {
        alert("Password Must be Filled Out");
        return false;
    }

    var confirmpassword = document.forms["Form"]["form-confirmpassword"].value;
    if(confirmpassword == "" || confirmpassword == null) {
        alert("You Must Confirm your Password before Continuing");
        return false;
    }

    if(confirmpassword != password || confirmpassword == null) {
        alert("Your Passwords do not Match!");
        return false;
    }

    else {
        alert("Thank You for Signing Up for our Newsletter");
        return true;
    }
}
