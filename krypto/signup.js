const firebaseConfig = {
    apiKey: "AIzaSyBk_F0s6ZAYQP2js0Tf9SdeX0TXZiBfkw8",
    authDomain: "krypto-25d5e.firebaseapp.com",
    databaseURL: "https://krypto-25d5e-default-rtdb.firebaseio.com",
    projectId: "krypto-25d5e",
    storageBucket: "krypto-25d5e.appspot.com",
    messagingSenderId: "413009020536",
    appId: "1:413009020536:web:9bd3c5a50ec19b2164cf8d",
    measurementId: "G-ZFWXEB4S9Z"
};

// initializing firebase
firebase.initializeApp(firebaseConfig);

// reference to database
var contactFormDB = firebase.database().ref('form');

document.getElementById('signuppage').addEventListener('submit', submitForm);

function submitForm(e) {
    e.preventDefault();

    var email = getElementById('email').value;
    var password = getElementById('password').value;
    var confirmPassword = getElementById('confirmPassword').value;
    console.log(email, password, confirmPassword);

    if (email === "pradnyeshbhalekar78@gmail.com" && password === "123456789") {
        window.location.href = 'afterlogin.html';
    }
    else if(password==confirmPassword){
        document.getElementById('email-password-error-message').innerText="Create a strong password with letters, numbers, and symbols."
        setTimeout(function(){
             document.getElementById('email-password-error-message').innerText=' ';    
        },5000)
    }
    else{
        document.getElementById('email-password-error-message').innerText="Invalid email or password! Try Again!!"
        setTimeout(function(){
             document.getElementById('email-password-error-message').innerText=' ';    
        },5000)
    }
};

function getElementById(id) {
    return document.getElementById(id);
}
