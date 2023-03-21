import Review from './Review';
import './ReviewList.css';
import p1 from './imgs/profile1.png';
import p2 from './imgs/profile2.png';
import p3 from './imgs/profile3.png';

const ReviewList = () => {
    return (
        <div className="reviews__container">
            <h1>Hear It from Our Doers</h1>
            <div className='scroller'></div>
            <div className="reviews__grid" >
                <Review data={{
                    photo: p2,
                    name: 'Peter Green',
                    company: 'Company XYZ - CEO',
                    review: '',
                }} />
                <Review data={{
                    photo: p3,
                    name: 'Jane Brown',
                    company: 'Company XYZ - CEO',
                    review: '',
                }} />
                <Review data={{
                    photo: p1,
                    name: 'Isaac Ho',
                    company: 'Company XYZ - CEO',
                    review: '',
                }} />
            </div>
        </div>
    );
}

export default ReviewList;