import './Footer.css';
import logo from './logo.png';

const Footer = () => {
    return (
        <footer>
            <div className='footer_container'>
                <div className='upperfooter'>
                    <div className='leftfooter'>
                        <img src={logo} alt="" style={{width: '100px', margin: '20px 0', cursor: 'pointer'}}/>
                        <p className='special' >created by angels for angels</p>
                        <ul>
                            <li>Privacy Policy</li>
                            <li>Legal Terms</li>
                        </ul>
                    </div>
                    <div className='rightfooter' >
                         <ul>
                            <li>Home</li>
                            <li>For Investors</li>
                            <li>For Companies</li>
                         </ul>
                         <ul>
                            <li>About Us</li>
                            <li>About Us</li>
                            <li>Risk</li>
                         </ul>
                         <ul>
                            <li>Resources</li>
                            <li>FAQs</li>
                            <li>Contact Us</li>
                         </ul>
                         <select className='language special' name="language" id="">
                            <option value="EN">EN</option>
                            <option value="AR">AR</option>
                         </select>
                    </div>
                </div>
                <div className='lowerfooter'>
                    <p>
                        The Syndo credit & risk grading system is not a measure of the quality of the investment and is not meant to replace individual due diligence. Syndo’s credit & risk grading system is a feasibility study on the company and should not be considered a guarantee or a promise on future performance. Historical data is used to assess the possibility of default and not eliminate risk. Ratings are for informational purposes only. Ratings are not individualized for any specific investor’s financial situation and should not be considered investment advice. Each investor should carefully consider investments in any loan with his/her understanding of the investment.
                    </p>
                    <p>
                        © 2022 syndo. All rights reserved
                    </p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;