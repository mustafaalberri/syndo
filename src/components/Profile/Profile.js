import './Profile.css';
import profilicon from './imgs/profilicon.png';
import home from './imgs/homicon.png';
import notificon from './imgs/notificon.png';
import Round from '../HomePage/RoundList/Round'
import Content1 from './Content/Content1';
import Content2 from './Content/Content2';
import { useEffect, useState } from 'react';
import NotificationList from './NotificationList/NotificationList';
import BriefList from './BriefList/BriefList';

const Profile = ({ onRouteChange, profile, onProfile }) => {
    const [content, setContent] = useState('about');
    const [showNotifications, setShowNotifications] = useState(false);

    useEffect(() => {
        document.getElementById('head1').classList.remove('active__head');
        document.getElementById('head2').classList.remove('active__head');
        if (content === 'about')
            document.getElementById('head1').classList.add('active__head');
        else
            document.getElementById('head2').classList.add('active__head');
    }, [content]);

    useEffect(() => {
        document.getElementById('all_notifs').classList.toggle('hide__notifs');
    }, [showNotifications])

    const messages = ['Welcome to Syndo',
                      'Your account is now active',
                      'Congrats! Your account is now upgraded to Premium.',
                      'Trella approved your access request, you can now view their Round.',];

    return (
        <div className='profile__container bg'>
            <div className='nav__container' >
                <img 
                    className='iconsize ' src={home} alt=""
                    onClick={() => onRouteChange('home')} />
                <img 
                    onClick={() => setShowNotifications(!showNotifications)}
                    className='iconsize' src={notificon} alt="" />
                <img className='iconsize' src={profilicon} alt="" />
            </div>
            <div id='all_notifs' className='hide__notifs'> 
                <NotificationList messages={messages} />
            </div>
            <div className='main__profile'>
                <div className='leftcolumn'>
                    <div className='apply__action'>
                        <img src={profile.logo} alt="" style={{width:'75px', height:'75px'}}/>
                        <div className='verified'></div>
                        <h2 style={{color:'white'}} >{profile.title}</h2>
                        {profile.isLive?(<div className='livicon'></div>)
                            :(<div style={{opacity:'0'}} className='livicon'></div>)}
                        <button onClick={() => onRouteChange('subscribe')} >
                            Apply</button>
                    </div>
                    <div className='social'>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                    <div className='descrp'>SERIES A</div>
                    <div className='pf__content'>
                        <div className='content__head'>
                            <div 
                                id='head1'
                                className='active__head' 
                                onClick={() => setContent('about')} >
                            About the company</div>
                            <div 
                                id='head2'
                                className=''
                                onClick={() => setContent('round')} >
                            Current Round</div>
                        </div>
                        {
                            content === 'about'? <Content1 />:<Content2 />
                        }
                    </div>
                </div>
                <div className='rightcolumn'>
                    <div className='round__container' >
                        <Round 
                            onRouteChange={onRouteChange}
                            onProfile={onProfile}
                            features={profile} />
                    </div>
                    <div className='brief__container'>
                        <BriefList />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Profile;