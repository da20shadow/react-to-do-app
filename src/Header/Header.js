import { Link } from 'react-router-dom';
import './assets/scss/style.css';
function Header(){
    return(
        <header>
            <nav>
                <Link to={'/home'} >Home</Link>
                <Link to={'/login'} >Login</Link>
                <Link to={'/register'} >Register</Link>
                <Link to={'/account'} >Account</Link>
                <Link to={'/logout'} >Logout</Link>
            </nav>
        </header>
    )
}
export default Header;