// src/Signup.js

import React, { useState } from 'react';
import { auth, db } from '../firebaseConfig'; // Import auth and db
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore'; // Import Firestore functions

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState(''); // Added name field

  const handleSignup = async (e) => {
    e.preventDefault(); // Prevent form from refreshing the page
    
    if (!name) {
      alert('Please enter your name.');
      return;
    }

    try {
      // 1. Create the user in Firebase Auth
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // 2. Create a user document in the 'users' collection (from Step 1)
      // The document ID will be the user's unique UID from Firebase Auth
      await setDoc(doc(db, "users", user.uid), {
        uid: user.uid,
        name: name, // Save the user's name
        email: user.email,
        role: "patient" // Default role for all new signups
      });

      alert('Signup successful! You are now logged in.');
      
      // Clear the form
      setName('');
      setEmail('');
      setPassword('');

    } catch (error) {
      console.error("Error signing up: ", error);
      alert(error.message); // Show a user-friendly error
    }
  };

  return (
    <div>
      <h2>Sign Up</h2>
      <form onSubmit={handleSignup}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Your Name"
          required
        />
        <br />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          required
        />
        <br />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password (min. 6 chars)"
          required
        />
        <br />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default Signup;