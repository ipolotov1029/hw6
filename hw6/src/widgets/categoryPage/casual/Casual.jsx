import React, { useState } from 'react';
import './casual.css';
import { Card } from '../../../entities';
import { Link } from 'react-router-dom';

export const Casual = ({ product }) => {
    let [currentPage, setCurrentPage] = useState(1);
    let itemsPerPage = 3;

    let totalPages = product ? Math.ceil(product.length / itemsPerPage) : 0;

    let displayedProducts = product ? product.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage) : [];

    const handleBack = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    const handleNext = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    return (
        <div className="casualBlock">
            <h1>Casual</h1>  
            <div className="casualCont">
                {displayedProducts.map((item) => (
                    <div key={item.id}>
                        <Link to={`/detail/${item.id}`}>
                            <Card 
                                img={item.category?.image || 'default-image.jpg'}
                                title={item.title}
                                rate={item?.rating?.rate || 'No rating'}
                                price={item.price} 
                            />
                        </Link>
                    </div>
                ))}
            </div>

            <div className="pagination">
                <div className='btnPrevious'>
                    <button onClick={handleBack} disabled={currentPage === 1}>
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12.8332 6.99996H1.1665M1.1665 6.99996L6.99984 12.8333M1.1665 6.99996L6.99984 1.16663" stroke="black" strokeWidth="1.67" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        Previous
                    </button>
                </div>
                <div>
                    <span>Page {currentPage} of {totalPages}</span>
                </div>
                <div className='btnNext'>
                    <button onClick={handleNext} disabled={currentPage === totalPages}>
                        Next
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12.8332 6.99996H1.1665M1.1665 6.99996L6.99984 12.8333M1.1665 6.99996L6.99984 1.16663" stroke="black" strokeWidth="1.67" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    );
};
