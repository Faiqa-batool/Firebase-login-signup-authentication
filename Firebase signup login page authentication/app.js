import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-auth.js";

const auth = getAuth();

const signup = () => {
    let username = document.getElementById("username");
    let email = document.getElementById("signup-email");
    let password = document.getElementById("signup-password");

    createUserWithEmailAndPassword(auth,email.value, password.value)
        .then((resolve) => {
            alert("Successfully Signup! Now login to your account.");
        })
        .catch((reject) => {
            alert("Signup Failed! Try Again.");
        });

}

// let signup_btn = document.getElementById("signup-btn");
document.getElementById("signup-btn").addEventListener("click", signup);
  

const login = () => {
    let email = document.getElementById("login-email");
    let password = document.getElementById("login-password");

    signInWithEmailAndPassword(auth, email.value, password.value)
        .then((resolve) => {
            alert("Successfully Login!");
            window.location.href = './home.html';
        })
        .catch((reject) => {
            alert("Login Failed!");
        });

}

document.getElementById("login-btn").addEventListener("click", login);