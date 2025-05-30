  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.8.1/firebase-app.js";
  import {sendEmailVerification, getAuth, signInWithPopup, 
    createUserWithEmailAndPassword, signInWithEmailAndPassword,  
    onAuthStateChanged} from 'https://www.gstatic.com/firebasejs/11.8.1/firebase-auth.js';

  const firebaseConfig = {
    apiKey: "AIzaSyAZUWYFxR32I946-OS4qIngOQihJ-e7OuI",
    authDomain: "phishingdb-7f705.firebaseapp.com",
    projectId: "phishingdb-7f705",
    storageBucket: "phishingdb-7f705.firebasestorage.app",
    messagingSenderId: "925441434442",
    appId: "1:925441434442:web:d7f9f9f8e48b1142aad7b3"
  };

  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);

  registro.addEventListener('click', (e) =>{
    var email=document.getElementById('email').value;
    var password=document.getElementById('password').value;

    createUserWithEmailAndPassword(auth, email, password).then(cred =>{
        alert("Usuario creado")
    }).catch(error => {
        const errorCode = error.code;
    });
  });
