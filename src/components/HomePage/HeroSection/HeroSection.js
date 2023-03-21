import './HeroSection.css';
import preview from './preview.png';

const HeroSection = () => {
    return (
        <div className='hero__main'>
            <div className='hero_cta'>
                <p>WE'RE HERE FOR YOU</p>
                <p>Your First Step Towards Growth!</p>
                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium.</p>
                <button
                onClick={() => {
                    document.getElementById('exp_rounds').scrollIntoView({
                        behavior: "smooth", block: "nearest"
                    });
                }} >
                Get Started</button>
            </div>
            <div className='image'>
                <img src={preview} alt="Ipad Preview" />
            </div>
        </div>
    );
}

export default HeroSection;