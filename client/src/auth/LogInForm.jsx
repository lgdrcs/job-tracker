import { useState } from "react"
import { supabase } from "../supabaseClient"

function LogInForm() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  
  async function handleSubmit(e) {
    e.preventDefault()
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      console.error("Error logging in:", error.message)
    } else {
      console.log("User logged in:", data)
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <h1> Log In</h1>
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
      <button type="submit">Log In</button>
    </form>
  );
}

export default LogInForm