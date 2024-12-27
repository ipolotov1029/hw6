import './footer.css';
import email from '../../imgs/footer/email.svg';
import twitter from '../../imgs/footer/twitter.svg';
import facebook from '../../imgs/footer/facebook.svg';
import instagram from '../../imgs/footer/instagram.svg';
import gitHub from '../../imgs/footer/gitHub.svg';

export const Footer = () => {
    return (
        <footer className='footer'>
            <div className='container'>
                <div className='subscribe'>
                    <h2>STAY UPTO DATE ABOUT OUR LATEST OFFERS</h2>
                    <div className='form'>
                        <div className='form_input'> 
                            <input type="text" placeholder='Enter your email address' />
                            <img src={email} alt="" />
                        </div>
                        <button>Subscribe to Newsletter</button>
                    </div>
                </div>

                <div className='links'>
                    <div className='shopCo'>
                        <h2>SHOP.CO</h2>
                        <p>We have clothes that suits your style and which you’re proud to wear. From women to men.</p>
                        <div className='social'>
                            <div className='circle'>
                                <img src={twitter} alt="" />
                            </div>
                            <div className='circle'>
                                <img src={facebook} alt="" />
                            </div>
                            <div className='circle'>
                                <img src={instagram} alt="" />
                            </div>
                            <div className='circle'>
                                <img src={gitHub} alt="" />
                            </div>
                        </div>
                    </div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
        </footer>
    );
}