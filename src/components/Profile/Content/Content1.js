import './Content.css';
import Person from '../Person/Person';
import person1 from '../Person/people/person1.png';
import person2 from '../Person/people/person2.png';

const Content1 = () => {
    return (
        <div className='container__content'>
            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. </p>
            <div className='content__foot'>
                <div>
                    <span className='c__head'>Title 1</span> <br /> <br /> 
                    <span className='c__text' >Sed ut perspiciatis</span>
                </div>
                <div>
                    <span className='c__head'>Title 2</span> <br /> <br /> 
                    <span className='c__text' >Sed ut perspiciatis</span>
                </div>
            </div>
            <div className='people__container'>
                <div className='welcome' >Meet The Team</div>
                <div className='people'>
                    <Person person = {person1} />
                    <Person person = {person2} />
                    <Person person = {person1} />
                    <Person person = {person2} />
                </div>
            </div>
        </div>
    );
}

export default Content1;