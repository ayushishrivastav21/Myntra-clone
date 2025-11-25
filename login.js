
let user=JSON.parse(localStorage.getItem('user'))
if(user.isLoggedIn===true){
     window.location.href = 'http://localhost:5500/index.html';
}
else{


const email = document.getElementById('email');
const password = document.getElementById('password');
const error = document.getElementById('error');
const form = document.querySelector('form');

form.addEventListener('submit' , function(e){
    e.preventDefault(); 

    // let user = JSON.parse(localStorage.getItem('user'));


    let signedUpEmail = user.email
    let signedUpPassword = user.password;

    // const credentials = {
    //     email : localStorage.getItem('email') ,
    //     password : localStorage.getItem('password')
    // }

    let userTypedEmail = email.value;
    let userTypePassword = password.value; 

    if (userTypedEmail === signedUpEmail && userTypePassword === signedUpPassword) {
        user.isLoggedIn = true;
        localStorage.setItem('user' , JSON.stringift('user')) 
        window.location.href = 'http://localhost:5500/index.html'
    } else {
        email.value = '';
        password.value = '';
        error.innerText = 'Invalid Credentials';
    }
})
}
