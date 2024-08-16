import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-app.js";
import { getAuth,createUserWithEmailAndPassword,signInWithEmailAndPassword,onAuthStateChanged,signOut,sendPasswordResetEmail} from "https://www.gstatic.com/firebasejs/10.13.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyA3vtip_C7I2JlQQH9M7R7c7AVOFuCk_lQ",
  authDomain: "signup-form-1c26d.firebaseapp.com",
  projectId: "signup-form-1c26d",
  storageBucket: "signup-form-1c26d.appspot.com",
  messagingSenderId: "300560589147",
  appId: "1:300560589147:web:0883e641d2da5ffde4ba7e",
  measurementId: "G-05J4KE5Y9C"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth,createUserWithEmailAndPassword,signInWithEmailAndPassword,onAuthStateChanged,signOut,sendPasswordResetEmail }