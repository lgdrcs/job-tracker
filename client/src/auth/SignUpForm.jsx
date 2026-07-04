import { useState } from "react";
import { supabase } from "../supabaseClient";

function SignupForm(props) {
  const [email, setEmail] = useState(""); // State to hold the email and password input values
  const [password, setPassword] = useState(""); // State to hold the email and password input values
  
  async function handleSubmit(e) { // Function to handle form submission
    e.preventDefault();

    const { data, error } = await supabase.auth.signUp({        // Call the Supabase signUp method with the email and password
        email,
        password,
    });

    if (error) {
        console.error("Error signing up:", error.message);
    } else {
        console.log("User signed up:", data);
        props.setSignedUp(true);  // shows success screen, no switch yet
    }
  }

  if (props.signedUp) {
    return (
      <div>
        <h1>Sign Up Successful!</h1>
        <p>Please confirm email address and log in.</p>
        <button onClick={() => { props.setShowLogin(true); props.setSignedUp(false);}}>Go to Log In</button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit}>
        <h1> Sign Up</h1>
    <input 
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
    />
    <input 
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
    />
    <button type="submit">Sign Up</button>
    </form>
  );
}

export default SignupForm;