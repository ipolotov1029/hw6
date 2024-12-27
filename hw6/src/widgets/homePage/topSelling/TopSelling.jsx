import { Card } from '../../../entities';
import './TopSelling.css';

export const TopSelling = () => {
    return (
        <div id='on-sale' className="container">
            <h2 className='title'>TOP SELLING</h2>
            <div className='products'>
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
            <div className='buttonSel'>
                <button>View All</button>
            </div>
        </div>
    );
}

