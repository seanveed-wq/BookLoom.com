import { auth, db } from "./firebase-config.js";
import { 
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

import {
  doc,
  setDoc
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

// Signup
export async function signupUser(email, password) {
  const userCred = await createUserWithEmailAndPassword(auth, email, password);

  // Save user data in Firestore
  await setDoc(doc(db, "users", userCred.user.uid), {
    email: email,
    isPaid: false,
    requestsCount: 0
  });

  alert("Signup successful!");
}

// Login
export async function loginUser(email, password) {
  await signInWithEmailAndPassword(auth, email, password);
  alert("Login successful!");
}
