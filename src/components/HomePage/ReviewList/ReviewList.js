import Review from './Review';
import './ReviewList.css';
import p1 from './imgs/profile1.png';
import p2 from './imgs/profile2.png';
import p3 from './imgs/profile3.png';

const ReviewList = () => {
    const reviews = [
        {
            photo: p2,
            name: 'Peter Green',
            company: 'Company XYZ - CEO',
            review: '',
        },
        {
            photo: p3,
            name: 'Jane Brown',
            company: 'Company XYZ - CEO',
            review: '',
        },
        {
            photo: p1,
            name: 'Isaac Ho',
            company: 'Company XYZ - CEO',
            review: '',
        },
        {
            photo: p2,
            name: 'Isaac Ho',
            company: 'Company XYZ - CEO',
            review: '',
        }
    ]

    return (
        <div className="reviews__container">
            <h1>Hear It from Our Doers</h1>
            <div className='scroller'></div>
            <div className="reviews__grid" >
                {
                    reviews.map((review, i) => {
                        return <Review key={i} data={review} />
                    })
                }
            </div>
        </div>
    );
}

export default ReviewList;