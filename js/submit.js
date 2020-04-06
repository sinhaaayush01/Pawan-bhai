function submitForm(event) {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    event.preventDefault();
    if (validateEmail())
    {
        alert("Email: " + email + " Password: " + password + " Form Submitted Successfully!!");
        // API Call
        fetch('http://localhost:9090/validateUser', {
                method: 'POST',
                headers : {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({email: email, password: password})
            }).then((res) => res.json())
            .then((data) =>  {
                console.log(data);
                if (data.status) {
                    window.location.href = "http://localhost:8080/success.html";
                } else {
                    window.location.href = "http://localhost:8080/error.html"
                }
            }).catch((err) => console.log(err))
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