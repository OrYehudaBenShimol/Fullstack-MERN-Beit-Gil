import { useState } from "react"
import { useLogin } from "../hooks/useLogin"
import Loading from '../components/loading';

// This component is used to show the login page.
const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const {login,error,isLoading} = useLogin();

  const handleSubmit = async (e) => {
    e.preventDefault()
    // wait for the login function to finish
    await login(email,password);
}

  return (
    <div className="App">
      {isLoading && <Loading /> }
    <form className="login" onSubmit={handleSubmit}>
      <h3 className="h3-login-page">התחברות למערכת</h3>
      
      <label>: אימייל</label>
      <input 
        type="email" 
        onChange={(e) => setEmail(e.target.value)} 
        value={email} 
      />
      <label>: סיסמא</label>
      <input 
        type="password" 
        onChange={(e) => setPassword(e.target.value)} 
        value={password} 
      />

      <button className="login-btn-login-page" disabled={isLoading}>התחבר </button>
      {error && <div className="error">{error}</div>}

    </form>
    </div>

  )
}

export default Login