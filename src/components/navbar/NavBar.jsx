import { Link } from 'react-router-dom';
import './NavBar.css';
import CartWidget from '../cartWidget/CartWidget';


export default function NavBar() {

  return (
    <>
      <nav className="navbar navbar-expand-lg">
        <div className='container-fluid'>
          <Link className='navbar-brand' to='/'><img className='logo' src='/img/logo.PNG' alt='' /></Link>
          <button className='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target='#navbarNav' aria-controls='navbarNav' aria-expanded='false' aria-label='Toggle navigation'>
            <span className='navbar-toggler-icon'></span>
          </button>
          <div className='collapse navbar-collapse justify-content-center' id='navbarNav'>
            <ul className='navbar-nav'>
              <li className='nav-item'>
                <Link className='nav-link active' aria-current='page' to='/'>Home</Link>
              </li>
              <li className='nav-item'>
                <Link className='nav-link' to='/productos/Almuerzos'>Almuerzos</Link>
              </li>
              <li className='nav-item'>
                <Link className='nav-link' to='/productos/Desayunos'>Desayunos</Link>
              </li>
              <li className='nav-item'>
                <Link className='nav-link' to='/productos/Meriendas'>Meriendas</Link>
              </li>
            </ul>
          </div>
          <CartWidget/>
        </div>
      </nav>


    </>
  );
}
