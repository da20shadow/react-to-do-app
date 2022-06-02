import {Link} from 'react-router-dom';
function Footer (){
    const date = new Date();
    const year = date.getFullYear();
    return (
        <footer>
            <p>Copyright &copy; <Link to={'#'}>da20shadow</Link> {year}</p>
        </footer>
    )
}
export default Footer;