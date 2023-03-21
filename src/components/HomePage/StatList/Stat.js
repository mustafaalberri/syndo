import './Stat.css';

const Stat = ({ data }) => {
    return (
        <div className='stat' >
            <div className='topstat' >{data.num}</div>
            <div className='bottomstat' >{data.desc}</div>
        </div>
    );
}

export default Stat;