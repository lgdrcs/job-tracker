import { useState } from 'react'
import SignupForm from './auth/SignUpForm'
import LogInForm from './auth/LogInForm'


function App() {
  const [showLogin, setShowLogin] = useState(false)
  const [session, setSession] = useState(null)

  if (session) {
    return (
      <h1>Hello, Welcome!</h1>
    )
  }

  return (
    <>
    {showLogin ? <LogInForm setSession={setSession} /> : <SignupForm />}
    <button onClick={() => setShowLogin(!showLogin)}>
      {showLogin ? "Switch to Sign Up" : "Switch to Log In"}
    </button>
    </>
  );
}

export default App
