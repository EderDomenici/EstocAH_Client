import { useState } from "react"


export function Login(){

    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [token, setToken] = useState('');

    function hendleLogin(e){
        e.preventDefault();

        if(!login || !password){
            alert('Login ou Senha ausente!')

            setLogin('')
            setPassword('')
        }
    }

    return(
        <div>
            <form onSubmit={hendleLogin}>
                <input
                 type="text"
                 placeholder="Login"
                 onChange={(e)=> setLogin(e.target.value)}
                 value={login}/>

                 <input
                  type={"password"}
                  placeholder="Senha"
                  onChange={(e)=> setPassword(e.target.value)}
                  value={password}/>
            </form>
        </div>
    )
}