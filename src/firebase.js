import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyCzUYrfhWIYsdJcQh1qaaDJ7MqflW3LHd0",
  authDomain: "reddit-69353.firebaseapp.com",
  projectId: "reddit-69353",
  storageBucket: "reddit-69353.appspot.com",
  messagingSenderId: "659104844957",
  appId: "1:659104844957:web:5b3237e5053ced92365874"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)