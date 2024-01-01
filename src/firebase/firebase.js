// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBuHB2uelJ_emeGl4Pvu9pUZq0m0oh4Z-A",
  authDomain: "dragon-news-bb78c.firebaseapp.com",
  projectId: "dragon-news-bb78c",
  storageBucket: "dragon-news-bb78c.appspot.com",
  messagingSenderId: "578782811863",
  appId: "1:578782811863:web:23348c6a2169c87ef04292"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app