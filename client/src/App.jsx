import { useState } from 'react'
import { supabase } from './supabaseClient'
import { Routes, Route, Link } from 'react-router'
import SignupForm from './auth/SignUpForm'
import LogInForm from './auth/LogInForm'


function App() {
  const [showLogin, setShowLogin] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);

  const [signedUp, setSignedUp] = useState(false);

  const [session, setSession] = useState(null);

  async function handleLogout() {
    const { error } = await supabase.auth.signOut();
    if (error) {
      console.error('Error signing out:', error);
    } else {
      setSession(null);
    }
  }

  if (session) {
    return (
      <div>
      <h1>Hello, Welcome!</h1>
      <button onClick={handleLogout}>Log Out</button>
      </div>
    )
  }

  let toggleButton = (
  <div>
    <Link to="/signup">Sign Up</Link>
    {" | "}
    <Link to="/login">Log In</Link> 
  </div>
)

  if (signedUp) {
    toggleButton = null // Hide the toggle button if the user has signed up
  }

  return (
    <>
    <div>
    <Routes>
      <Route path="/signup" element={<SignupForm signedUp={signedUp} setSignedUp={setSignedUp} setShowSignUp={setShowSignUp} setShowLogin={setShowLogin}  />} />
      <Route path="/login" element={<LogInForm setSession={setSession} /> } />
    </Routes>
     {toggleButton}
    </div>
    </>
  );
}

export default App
