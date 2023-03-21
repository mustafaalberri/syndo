import './Review.css';

const Review = ({ data }) => {
    return (
        <div className='review'>
            <img src={data.photo} alt='' className='picture'/>
            <p>{data.name}</p>
            <p>{data.company}</p>
            <p>”</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod 
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.</p>
        </div>
    );
}

export default Review;