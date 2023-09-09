import { initializeApp } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-app.js";
  
  const firebaseConfig = {
    apiKey: "AIzaSyB26NCFqNyBu32p3A3FNcrj2HQ8qBbykb8",
    authDomain: "hackathon-practice-8b5f5.firebaseapp.com",
    databaseURL: "https://hackathon-practice-8b5f5-default-rtdb.firebaseio.com",
    projectId: "hackathon-practice-8b5f5",
    storageBucket: "hackathon-practice-8b5f5.appspot.com",
    messagingSenderId: "510236711309",
    appId: "1:510236711309:web:2119dcfcec30b263a1c5c4",
    measurementId: "G-EFHDT4PS4W"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);