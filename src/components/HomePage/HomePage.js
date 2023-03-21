import './HomePage.css';
import HeroSection from './HeroSection/HeroSection';
import Navbar from './Navbar/Navbar';
import RoundList from './RoundList/RoundList';
import StatList from './StatList/StatList';
import ReviewList from './ReviewList/ReviewList';
import Footer from './Footer/Footer';


const HomePage = ({ onRouteChange, onProfile }) => {
    return (
        <div className=''>
            <Navbar 
                onRouteChange={onRouteChange} />
            <HeroSection />
            <RoundList 
                onProfile={onProfile}
                onRouteChange={onRouteChange} />
            <StatList />
            <ReviewList />
            <Footer />
        </div>
    );
}

export default HomePage;