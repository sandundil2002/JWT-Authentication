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
            console.log(response);
            console.log(response.data.token);
        },
        
        error: function (error) {
            console.log(error);
        }
    });
}