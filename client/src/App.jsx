import { useState } from 'react'
import SignupForm from './auth/SignUpForm'
import LogInForm from './auth/LogInForm'


function App() {
  const [count, setCount] = useState(0)
  const [showLogin, setShowLogin] = useState(false)

  return (
    <>
    {showLogin ? <LogInForm /> : <SignupForm />}
    <button onClick={() => setShowLogin(!showLogin)}>
      {showLogin ? "Switch to Sign Up" : "Switch to Log In"}
    </button>
    </>
  );
}

export default App
