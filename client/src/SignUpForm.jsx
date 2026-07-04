import { useState } from "react";
import { supabase } from "./supabaseClient";

function SignupForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  async function handleSubmit(e) {
    e.preventDefault();

    const { data, error } = await supabase.auth.signUp({
        email,
        password,
    });

    if (error) {
        console.error("Error signing up:", error.message);
    } else {
        console.log("User signed up:", data);
    }
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