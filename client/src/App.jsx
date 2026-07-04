import { useState } from 'react'
import SignupForm from './auth/SignUpForm'
import LogInForm from './auth/LogInForm'


function App() {
  const [showLogin, setShowLogin] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);

  const [signedUp, setSignedUp] = useState(false);

  const [session, setSession] = useState(null);

  if (session) {
    return (
      <h1>Hello, Welcome!</h1>
    )
  }

  let toggleButton = (
    <button onClick={() => setShowLogin(!showLogin)}>
      {showLogin ? "Switch to Sign Up" : "Switch to Log In"}
    </button>
  )

  if (signedUp) {
    toggleButton = null // Hide the toggle button if the user has signed up
  }

  return (
    <>
    {showLogin ? <LogInForm setSession={setSession} /> : <SignupForm signedUp={signedUp} setSignedUp={setSignedUp} setShowLogin={setShowLogin} />}
    {toggleButton}
    </>
  );
}

export default App
