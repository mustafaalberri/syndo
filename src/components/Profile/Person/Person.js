import './Person.css';

const Person = ({ person }) => {
    return (
        <div className='person_container' >
            <img src={person} alt="" style={{width: '80px'}} />
            <div className='p__name' >John Doe</div>
            <div className='p__title' >CEO</div>
            <div className='linkedin__social'></div>
        </div>
    );
}

export default Person;