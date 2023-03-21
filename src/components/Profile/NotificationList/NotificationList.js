import './NotificationList.css';
import Notification from './Notification';

const NotificationList = ({ messages }) => {
    return (
        <div className='nt_contaienr'>
            <div style={{color: 'white'}} >Notifications</div>
            {
                messages.map((message, i) => {
                    return (
                        <Notification key={i} msg = {message} />
                    );
                })
            }
        </div>
    );
}

export default NotificationList;