import './photoSection.css';

export const PhotoSection = ({ product }) => {
    console.log(product);
    
    return (
        <div className='photoCont'>
            {
                product && 
                (
                    <div className='photoFlex'>
                        <div className='images'>
                            <div>
                                <img src={product?.images[0]} alt="" />     
                            </div>
                            <div>
                                <img src={product?.images[0]} alt="" />     
                            </div>
                            <div>
                                <img src={product?.images[0]} alt="" />     
                            </div>   
                        </div>
                        <div className='mainImg'>
                            <img src={product?.images[0]} alt="" />     
                        </div>
                    </div>
                )
            }
        </div>
    );
}

