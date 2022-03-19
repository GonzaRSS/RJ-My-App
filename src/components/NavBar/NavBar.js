import { Link } from 'react-router-dom'
import { CartWidget } from '../CartWidget/CartWidget'



export const NavBar = () => {

    
    return (
        <header className="header">
            <Link to='/'>
                <h1> LOGO</h1>
            </Link>


            <nav className="header-nav">
                <Link to='/Productos/Remeras' className='header-link'>Remeras</Link>
                <Link to='/Productos/Musculosa' className='header-link'>Musculosa</Link>
                <Link to='/Productos/Zapatilla' className='header-link'>Zapatilla</Link>
                <CartWidget/>
            </nav>

        </header>
    )
}