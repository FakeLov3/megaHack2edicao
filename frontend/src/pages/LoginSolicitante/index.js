import React, { useState } from 'react';
import {useAuth} from '../../contexts/auth';
import { Link } from 'react-router-dom';

import './styles.css';

export default function LoginSolicitante() {


  const { signInSolicitante } = useAuth();

  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  async function handleSignIn(e) {
    e.preventDefault();

    try {
      //const response = await api.post('sessions', { email });

      signInSolicitante();
    } catch (err) {
      alert('Falha no login, tente novamente.');
    }
  }

  return (
    <div className="login-container">
    <section className="form">

        <form onSubmit = { handleSignIn } >
          <h2 className="logo">Sistema de Consulta de Matrículas</h2>
          <p>Login Solicitante</p>

          <input 
            placeholder = "E-mail" 
            type = "email"
            value = {email} 
            onChange = {e => setEmail(e.target.value) }
          />

          <input 
            placeholder = "Senha" 
            type = "password"
            value = {password}
            onChange = {e => setPassword(e.target.value) }
          />

          <button className="button" type="submit">Entrar</button>

        </form>

        <Link type="button" className="buttonClean" to="/solicitante/cadastro">
          Cadastre-se
        </Link>

        <Link className="back-link" to="/">
          Voltar
        </Link>

    </section>
  </div>
  )

};
