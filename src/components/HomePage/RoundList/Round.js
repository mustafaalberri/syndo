import './Round.css';

const Round = ({ features, onProfile, onRouteChange }) => {
    return (
        <div className='card__container'>
            <div className='topcard'>
                {features.isLive?(<div className='live' ></div>):(
                    <div style={{opacity: '0'}} className='live' ></div>)}
                <div>
                    <img className='logo' src={features.logo} alt="round logo" />
                    <div className='description d1' >{features.desc}</div>
                </div>
            </div>
            <div className='bottomcard'>
                <div className='bottom__container'>
                    <p onClick={() => { //handle it
                            onProfile(features);
                            onRouteChange('profile')
                        }} >
                        {features.title}</p>
                    <p>Syndo derived from syndication and is here to bridge the gap between Business Owners and Investors. </p>
                    <div className='d__container' >
                        <div className='description d2' >{features.desc1}</div>
                        <div className='description d3' >{features.desc2}</div>
                    </div>
                    <div className='followers'>
                        <div className='profile_icons'>
                            <div className='icon icon1' ></div>
                            <div className='icon icon2' ></div>
                            <div className='icon icon3' ></div>
                        </div>
                        <p>Followed by <span>Mohamed Aziz</span> and <span>12 others</span></p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Round;