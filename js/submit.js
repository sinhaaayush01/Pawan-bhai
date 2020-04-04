function submitForm(event) {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    event.preventDefault();
    if (validateEmail())
    {
        alert("Email: " + email + " Password: " + password + " Form Submitted Successfully!!");
        // Yaha pr API call krnge and based on true or false niche wala kam krnge
        // API Call
        if (true) {
            window.location.href = "https://www.google.com";
        } else {
            window.location.href = "https://www.facebook.com"
        }
    }
}

function validateEmail() {
    var password = document.getElementById("password").value;
    var email = document.getElementById("email").value;
    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    console.log(password, email, emailPattern.test(email));
    if (password === '' || email === '') {
        alert("Fields r empty Sir !!");
        return false;
    } else if (!emailPattern.test(email)) {
        alert("Email bekar h !!");
        return false;
    } else {
        return true;
    }
}