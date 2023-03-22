import Round from './Round';
import './RoundList.css';
import logo1 from './imgs/telda.png';
import logo2 from './imgs/trella.png';
import logo3 from './imgs/kiwe.png'

const RoundList = ({ onProfile, onRouteChange }) => {
    const features = [{
            isLive: false,
            logo: logo1,
            desc: 'PRE-SEED',
            title: 'Telda',
            desc1: 'FINTECH', 
            desc2: 'EQUITY',
        },{   
            isLive: true,
            logo: logo2,
            desc: 'SERIES-A',
            title: 'Trella',
            desc1: 'TRANSPORTATION', 
            desc2: 'EQUITY',
        },{
            isLive: true,
            logo: logo3,
            desc: 'SERIES-A',
            title: 'Kiwe',
            desc1: 'TRANSPORTATION', 
            desc2: 'DEBT',
        }
    ];

    return (
        <div id='exp_rounds' className='section2'>
            <h1>Explore Current Rounds</h1>
            <div className='grid'>
                {
                    features.map((feature, i) => {
                        return (
                            <Round
                                key={i}
                                onProfile={onProfile}
                                onRouteChange={onRouteChange}
                                features={feature} />
                        );
                    })
                }
            </div>
        </div>
    );
}

export default RoundList;