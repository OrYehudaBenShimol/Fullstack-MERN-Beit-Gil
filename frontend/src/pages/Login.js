import { useState } from "react"
import { useLogin } from "../hooks/useLogin"


const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const {login,error,isLoading} = useLogin();

  const handleSubmit = async (e) => {
    e.preventDefault()

    await login(email,password);
}

  return (
    <form className="login" onSubmit={handleSubmit}>
      <h3 className="h3-login-page">התחברות למערכת</h3>
      
      <label>:אימייל</label>
      <input 
        type="email" 
        onChange={(e) => setEmail(e.target.value)} 
        value={email} 
      />
      <label>:סיסמא</label>
      <input 
        type="password" 
        onChange={(e) => setPassword(e.target.value)} 
        value={password} 
      />

      <button className="login-btn-login-page" disabled={isLoading}>Log in</button>
      {error && <div className="error">{error}</div>}

    </form>
  )
}

export default Login