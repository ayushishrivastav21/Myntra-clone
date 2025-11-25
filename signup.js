const email = document.getElementById('email');
const password = document.getElementById('password');
// const error = document.getElementById('error');
const form = document.querySelector('form');

form.addEventListener('submit' , function(e){
    e.preventDefault();
    let user ={
        email : email.value ,
        password: password.value ,
        isLoggedIn : false
    }

    try {
        localStorage.setItem('user' , JSON.stringify(user))
    // localStorage.setItem('password' , password.value)
    email.value = '';
    password.value = '';
    window.location.href = 'http://127.0.0.1:5501/pages/login.html'
    }
    catch (error){
        alert(error.message)
    }})
