function userRegistration() {
    //define variables
    let name = $('#name').val();
    let email = $('#email').val();
    let company = $('#company').val();
    let password = $('#password').val();

    //create ajax request
    $.ajax({
        url: 'http://localhost:8080/api/v1/auth/register',
        method: 'POST',
        contentType: 'application/json',
        "data" : JSON.stringify({
            "name": name,
            "email": email,
            "company": company,
            "password": password
        }),
        
        success: function (response) {
            localStorage.setItem('token', response.data.token);
            swal("Good job!", "User Registration Successful!", "success");
        },
        
        error: function (error) {
            console.log(error);
        }
    });
}

function userLogin() {
    let email = $('#email').val();
    let password = $('#password').val();

    $.ajax({
        url: 'http://localhost:8080/api/v1/auth/authenticate',
        method: 'POST',
        contentType: 'application/json',
        "data" : JSON.stringify({
            "email": email,
            "password": password
        }),

        success: function (response) {
            swal("Good job!", "User Login Successful!", "success");
            localStorage.setItem('token', response.data.token);
            window.location.href = 'dashboard.html';
        },

        error: function (error) {
            console.log(error);
        }
    });
}
