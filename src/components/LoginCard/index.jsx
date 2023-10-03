import { useState } from 'react'
import env from 'react-dotenv'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

import './styles.css'

function base64Encode (string) {
  return Buffer.from(string, 'utf-8').toString('base64')
}

export const LoginCard = () => {
  const urlBackend = env.URL_BACKEND
  const [login, setLogin] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  const handleLogin = async () => {
    // Base64 encode o login e a senha
    const base64EncodedLoginPassword = base64Encode(`${login}:${password}`)

    try {
      // Fazer a chamada à API
      const response = await axios.get(`${urlBackend}/login`, {
        headers: {
          Authorization: `Basic ${base64EncodedLoginPassword}`
        }
      })

      // Se a chamada for bem-sucedida, redirecionar para a tela home
      if (response.status === 200) {
        navigate('/home')
      }
    } catch (error) {
      // Se a chamada falhar, exibir um alert de erro
      console.log(`ERRO ===>>> ${error}`)
      alert('Ocorreu um erro ao tentar fazer login.')
    }
  }

  return (
    <div className="base-card login-card">
      <div className="input-container">
        <label htmlFor="login">Login</label>
        <div className="input-icon">
          <i className="fa fa-user"></i>
          <input
            type="text"
            id="login"
            value={login}
            onChange={(e) => setLogin(e.target.value)}
          />
        </div>
      </div>
      <div className="input-container">
        <label htmlFor="password">Password</label>
        <div className="input-icon">
          <i className="fa fa-key"></i>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
      </div>
      <div className="forgot-password">
        <a href="#">Esqueceu sua senha?</a>
      </div>
      <div className="btn-container">
        <button className="btn btn-primary" onClick={handleLogin}>
          <h6>Entrar</h6>
        </button>
      </div>
    </div>
  )
}
