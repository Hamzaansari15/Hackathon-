import { initializeApp } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js";
import {
    getAuth, 
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword, 
    onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/9.14.0/firebase-auth.js";



const firebaseConfig = {
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

let loginBtn = document.getElementById('login')
loginBtn.addEventListener('click', () => {
    let loginEmail = document.getElementById('login_username').value;
    let loginPassword = document.getElementById('login_password').value;

    signInWithEmailAndPassword(auth, loginEmail, loginPassword)
        .then((userCredential) => {

            const user = userCredential.user;
            if(user){
                window.location.href = 'admin.html';
                console.log(user)
            }
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(error.message)
        });
})
