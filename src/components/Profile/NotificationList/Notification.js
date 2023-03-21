import './Notification.css';

const Notification = ({ msg }) => {
    return (
        <div className='one_notif' style={{color: 'white'}}>
            <div className='notif' ></div>
            <div>{msg}</div>
            <div 
                onClick={evt => evt.target.parentElement.classList.toggle('hide')}
                className='cancel' ></div>
        </div>
    );
}

export default Notification;