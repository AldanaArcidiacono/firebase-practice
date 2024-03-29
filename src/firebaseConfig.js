// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
//
import { getAuth } from 'firebase/auth';
//
// Get our collections from FireStore
// For a compact library with REST/CRUD, we use FireStore Lite SDK. Available only via npm.
import { getFirestore } from 'firebase/firestore/lite';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDzjUFred-oLcIIPUnZ5CEvmw-vzJ4VrxM',
  authDomain: 'test-95e6e.firebaseapp.com',
  projectId: 'test-95e6e',
  storageBucket: 'test-95e6e.appspot.com',
  messagingSenderId: '868732128647',
  appId: '1:868732128647:web:53e2583f59a9bc396a9722',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// User login & register config
const auth = getAuth();
// DB config
const db = getFirestore();

export { auth, db };
