import axios  from 'axios';
import {useEffect, useState} from "react";
import './assets/scss/style.css';

function Login (){
    // const [username,setUsername] = useState('');

    const loginHandler = (e) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        const {username, password} = Object.fromEntries(formData);

        let userData = {
            username: username,
            password: password
        }
        userData = JSON.stringify(userData);

        axios.post('http://localhost:8090/react-to-do-app/backEnd/HttHandlers/user/loginHandler.php',
            userData)
            .then(function (response){
                console.log(response.data)
            })
            .catch(function (error){
                console.log(error)
            })
    }

    return (
                <div className={'container'}>

                    <form className={'loginForm'} onSubmit={loginHandler}>
                        <h1 className={'text-center my-4 fw-bold'}>Login</h1>
                        <input type="text" name={'username'} placeholder={'Username'}/>
                        <input type="password" name={'password'} placeholder={'Password'}/>
                        <button type={'submit'}>Login</button>
                    </form>

                </div>
    )
}
export default Login;