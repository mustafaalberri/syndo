import './Content.css';
import pitch from './pitch.png';

const Content1 = () => {
    return (
        <div className='container__content'>
            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. </p>
            <div className='content__foot ft'>
                <div>
                    <span className='c__head'>Title 1</span> <br /> <br /> 
                    <span className='c__text' >Sed ut perspiciatis</span>
                </div>
                <div>
                    <span className='c__head'>Title 2</span> <br /> <br /> 
                    <span className='c__text' >Sed ut perspiciatis</span>
                </div>
                <div>
                    <span className='c__head'>Title 3</span> <br /> <br /> 
                    <span className='c__text' >Sed ut perspiciatis</span>
                </div>
            </div>
            <div className='pitch__deck'>
                <div className='title__deck' >Pitch Deck</div>
                <div className='pitch__img'>
                    <img src={pitch} alt='' style={{width:'100%'}} />
                </div>
            </div>
        </div>
    );
}

export default Content1;