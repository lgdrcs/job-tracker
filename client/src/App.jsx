import { useState } from 'react'
import SignupForm from './SignUpForm'


function App() {
  const [count, setCount] = useState(0)

  return (
    <SignupForm />
  );
}

export default App
