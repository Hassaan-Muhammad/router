import { useState } from "react";
import "./login.css"
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

function Login() {
 
  const [Email, setEmail] = useState("")
  const [Password, setPassword] = useState("")


  const LoginHandler = (e) => {
    e.preventDefault();


    const auth = getAuth();
    signInWithEmailAndPassword(auth, Email, Password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        console.log("Login succesful",user)
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log("Firebase login error",errorCode,errorMessage)
      });


    // e.reset();
  }


  return (
    <div>
      <p>This is Login Page</p>

      <form onSubmit={LoginHandler}>
        
        <input type="email" name="email" placeholder="email" autoComplete="on" onChange={(e) => { setEmail(e.target.value) }} />
        <br />
        <input type="Password" name="current-password" autoComplete="current-password" placeholder="password" onChange={(e) => { setPassword(e.target.value) }} />
        <br />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;