import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyDxcy7NYWdOPyEDdaBWpBrg-96cEw-cCBo",
  authDomain: "auth-login-ee603.firebaseapp.com",
  projectId: "auth-login-ee603",
  storageBucket: "auth-login-ee603.appspot.com",
  messagingSenderId: "186838033772",
  appId: "1:186838033772:web:8b2c2e66d4a8ac5c0ebf49"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)

export default auth;