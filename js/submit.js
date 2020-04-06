function submitForm(event) {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var count = 0;
    event.preventDefault();
    if (validateEmail(email, password))
    {
        // API Call
            fetch('http://localhost:9090/addUser')
                .then((response) => {
                    return response.json();
                })
                .then((data) => {
                    console.log(data);
                    data.forEach(element => {
                        if (element.email === email && element.password === password) {
                            count++;
                       }
                    });
                    if (count === 0) {
                        console.log("Login Failed");
                        window.location.href = "http://localhost:8080/error.html";
                    } else {
                        console.log("Login Passed");
                        window.location.href = "http://localhost:8080/success.html";
                    }
                });
    }
}

function submitSignInForm(event) {
    var fname = document.getElementById("fname").value;
    var lname = document.getElementById("lname").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    event.preventDefault();
    if (validateEmail(email, password, fname, lname))
    {
        let myHeaders = new Headers();
        myHeaders.append('Content-Type', 'application/json');
        // API Call
            fetch('http://localhost:9090/addUser', {
                method: 'POST',
                headers : myHeaders,
                body: JSON.stringify({name: `${fname} ${lname}`, email: email, password: password})
            }).then((res) => res.json())
            .then((data) =>  {
               alert('Successfully registered, Please proceed to login');
               window.location.href = "http://localhost:8080/login.html";
            }).catch((err) => console.log(err))
    }
}

function validateEmail(email, password, fname, lname) {
    var password = document.getElementById("password").value;
    var email = document.getElementById("email").value;
    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (password === '' || email === '' || fname === '' || lname === '' ) {
        alert("Fields r empty Sir !!");
        return false;
    } else if (!emailPattern.test(email)) {
        alert("Email bekar h !!");
        return false;
    } else {
        return true;
    }
}