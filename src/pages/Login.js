import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css'; 
import logo from "../assets/Logo.png"; 
import background from "../assets/masuk.jpeg";

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    
    // Validasi sederhana
    if (!username || !password) {
      setError('Semua field harus diisi');
      return;
    }
    
    console.log('Login berhasil:', { username, password });
    
    // Arahkan ke halaman Beranda
    navigate('/beranda');
  };

  return (
    <>
     <div className="cover" style={{backgroundImage: `url(${background})`}}></div>
      <div className="container"></div>
    <div className="login-container">
      <div className="login-box">
         <div className="logo-container">
            <img src={logo} alt="Chill" className="centered-logo" />
          </div>
        <h2>Masuk</h2>
        <p>Selamat datang kembali!</p>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder="Kata Sandi"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit" className="login-button">Masuk</button>
        </form>
        <div className="divider">
          <span>Atau</span>
        </div>
        <p>lupa kata sandi?</p>
         <a href="/daftar" className="daftardisini">Belum punya akun? daftar disini</a>
        <button className="google-login">
          <img src="https://www.google.com/images/branding/product/ico/googleg_lodp.ico" alt="Google" />
          Masuk dengan Google
        </button>
      </div>
    </div>
    </>
  );
}

export default Login;