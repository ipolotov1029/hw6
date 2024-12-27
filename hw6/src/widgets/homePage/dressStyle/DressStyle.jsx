import './dressStyle.css';
import Casual from '../../../imgs/dressStyle/image11.jpg'
import Formal from '../../../imgs/dressStyle/image13.jpg'
import Party from '../../../imgs/dressStyle/image12.jpg'
import Gym from '../../../imgs/dressStyle/image14.jpg'

export const DressStyle = () => {
    return (
        <div className='container'>
            <div className='block'>
                <h2>BROWSE BY DRESS STYLE</h2>

                <div className='blockFlex'>
                    <div className='smallBlock'>
                        <img src={Casual} alt="" />
                        <h3>Casual</h3>
                    </div>
                    <div className='largeBlock'>
                        <img src={Formal} alt="" />
                        <h3>Formal</h3>
                    </div>
                </div>
                <div className='blockFlex'>
                    <div className='largeBlock'>
                        <img src={Party} alt="" />
                        <h3>Party</h3>
                    </div>
                    <div className='smallBlock'>
                        <img src={Gym} alt="" />
                        <h3>Gym</h3>
                    </div>
                </div>
            </div>
        </div>
    );
}

