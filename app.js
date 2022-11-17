import { initializeApp } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js";
import {
    getAuth, 
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword, 
    onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/9.14.0/firebase-auth.js";



const firebaseConfig = {
    apiKey: "AIzaSyBk0z-HnPdl8DceZjh6DGjyIJsjmG0tv-4",
    authDomain: "quiz-app-8dfe7.firebaseapp.com",
    projectId: "quiz-app-8dfe7",
    storageBucket: "quiz-app-8dfe7.appspot.com",
    messagingSenderId: "121004155127",
    appId: "1:121004155127:web:26094c43a964f4dc3833f2",
    measurementId: "G-BYY18EWFXE"
  };

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

let loginBtn = document.getElementById('login')
loginBtn.addEventListener('click', () => {
    loginBtn.style.opacity = '0.5';
    loginBtn.innerHTML = '';
    let loginEmail = document.getElementById('login_username').value;
    let loginPassword = document.getElementById('login_password').value;
    signInWithEmailAndPassword(auth, loginEmail, loginPassword)
        .then((userCredential) => {

            const user = userCredential.user;
            if(user){
                window.location.href = 'admin.html';
                console.log(user)
                loginBtn.style.opacity = '0.5';

            }
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(error.message)
        });
})
