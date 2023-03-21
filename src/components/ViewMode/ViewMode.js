import './ViewMode.css';
import icon from './brightness.png'
import { useEffect, useState } from 'react';

const ViewMode = () => {
    const [mode, setMode] = useState(false);

    useEffect(() => {
        document.querySelector('body').classList.toggle('light__mode');
        document.getElementById('mode__btn').classList.toggle('vm__box_toggle');
        document.getElementById('mode_desc').textContent = mode?'Dark Mode':'Light Mode';
    }, [mode]);

    return (
        <div className='vm__container'>
            <p id='mode_desc' style={{color:'white'}}></p>
            <div onClick={() => setMode(!mode)} id='mode__btn' className='vm__box'>
                <div id='img__container' className='img__box'>
                    <img src={icon} alt="brightness" />
                </div>
            </div>
        </div>
    );
}

export default ViewMode;