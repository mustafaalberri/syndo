import Round from './Round';
import './RoundList.css';
import logo1 from './imgs/telda.png';
import logo2 from './imgs/trella.png';
import logo3 from './imgs/kiwe.png'

const RoundList = ({ onProfile, onRouteChange }) => {
    return (
        <div id='exp_rounds' className='section2'>
            <h1>Explore Current Rounds</h1>
            <div className='grid'>
                <Round
                    onProfile={onProfile}
                    onRouteChange={onRouteChange}
                    features={{
                        isLive: false,
                        logo: logo1,
                        desc: 'PRE-SEED',
                        title: 'Telda',
                        desc1: 'FINTECH', 
                        desc2: 'EQUITY',
                    }} />
                <Round 
                    onProfile={onProfile}
                    onRouteChange={onRouteChange}
                    features={{
                        isLive: true,
                        logo: logo2,
                        desc: 'SERIES-A',
                        title: 'Trella',
                        desc1: 'TRANSPORTATION', 
                        desc2: 'EQUITY',
                    }
                } />
                <Round
                    onProfile={onProfile}
                    onRouteChange={onRouteChange}
                    features={{
                        isLive: true,
                        logo: logo3,
                        desc: 'SERIES-A',
                        title: 'Kiwe',
                        desc1: 'TRANSPORTATION', 
                        desc2: 'DEBT',
                    }} />
            </div>
        </div>
    );
}

export default RoundList;