import {Link} from 'react-router-dom';
function Footer (){
    const date = new Date();
    const year = date.getFullYear();
    return (
        <footer className={'mt-5'}>
            <p>Copyright &copy; <Link to={'#'}>da20shadow</Link> {year}</p>
        </footer>
    )
}
export default Footer;