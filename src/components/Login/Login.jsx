import { FaUser, FaLock } from 'react-icons/fa';

import { useState } from 'react';
import './Login.css';

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

const handleSubmit = (event) =>{
    event.preventDefault();
    
    alert("enviando os dados :" + username + " - " + password );
};


    return (
        <div className="container">
            <form onSubmit={handleSubmit} >
                <h1>Acesse o sistema</h1>
                <div className="input-field">
                    <input type="email" placeholder='E-mail' onChange={(e) => setUsername(e.target.value)} />
                    <FaUser className="icon" />
                </div>
                <div className="input-field">
                    <input type="password" placeholder='Senha' onChange={(e)=> setPassword(e.target.value)}/>
                    <FaLock className="icon" />
                </div>
                <div className='recall-forget'>
                    <label >
                        <input type="checkbox" />
                        manterme conectado ?
                    </label><br />
                    <a href="#">esqueceu a senha ?</a> 
                </div>
                <button type="submit">Entrar</button>

                <div className="signup-link">
                    <p>não tem uma conta ? <a href="#">Resgistrar</a></p>
                </div>
            </form>
        </div>
    )
}

export default Login