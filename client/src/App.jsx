import { useState } from 'react'
import { supabase } from './supabaseClient'
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
    <button onClick={() => setShowLogin(!showLogin)}>
      {showLogin ? "Switch to Sign Up" : "Switch to Log In"}
    </button>
    </div>
  )

  if (signedUp) {
    toggleButton = null // Hide the toggle button if the user has signed up
  }

  return (
    <>
    <div>
    {showLogin ? <LogInForm setSession={setSession} /> : <SignupForm signedUp={signedUp} setSignedUp={setSignedUp} setShowLogin={setShowLogin} />}
    {toggleButton}
    </div>
    </>
  );
}

export default App
