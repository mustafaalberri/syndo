import './Navbar.css';
import logo from './logo.png';
import navicon from './navicon.png'
import { useEffect, useState } from 'react';

const Navbar = () => {
    const [showNavbar, setShowNavbar] = useState(false);

    useEffect(() => {
        document.getElementById('navbar__collapse').classList.toggle('show');
    }, [showNavbar]);

    return (
        <nav>
            <div className='responsive__nav'>
                <img src={logo} alt="" style={{width: '100px', height:'auto', marginLeft:'40px'}}/>
                <img onClick={() => setShowNavbar(!showNavbar)} className='navicon' src={navicon} alt="Navigation" />
            </div>
            <div id='navbar__collapse' className='navbar'>
                <img id='logo' src={logo} alt="" style={{width: '100px', height:'auto', marginLeft:'80px'}}/>
                <ul className='page__list'>
                    <li>Page 1</li>
                    <li>Page 2</li>
                    <li>Page 3</li>
                </ul>
                <ul className='action__list'>
                    <li className='login' >Login</li>
                    <li className='btn'>
                        <button onClick={() => {
                            document.getElementById('exp_rounds').scrollIntoView({
                                behavior: "smooth", block: "nearest",
                            });
                        }} >
                        Get Started</button>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;