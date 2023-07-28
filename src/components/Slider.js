/**
 * The Slider component is a React component that displays a carousel of images with captions, and it
 * is conditionally rendered based on the current location.
 * 
 * Returns:
 *   The Slider component is returning a JSX element that represents a carousel slider.
 */
import React from 'react'
import { useLocation } from 'react-router-dom';
import '../assets/Styles/Slider.css';

const Slider = () => {

    const location = useLocation();
    const isItemDetailsPage = location.pathname.includes('/itemdetails');
    const isSearchItems = location.pathname.includes('/search');
    const isSearchItemsDetails = location.pathname.includes('/search/itemdetails');

    if (isItemDetailsPage || isSearchItems || isSearchItemsDetails) {
        return null;
    }
    return (
        <div className="slider-container" style={{ maxHeight: '500px', margin: '10px 10px', borderRadius: '3px' }}>
            <div id="carouselExampleCaptions" className="carousel slide">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                    <img src="https://source.unsplash.com/1400x1500/?shooping,clothing,brand" className="d-block w-100 img-fluid" alt="img" style={{ maxHeight: '500px', width: '100%', objectFit: 'cover' }} />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Discover Your Style: Trendy Fashion at Your Fingertips!</h5>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src="https://source.unsplash.com/1400x1500/?shooping" className="d-block w-100 img-fluid" alt="img" style={{ maxHeight: '500px', width: '100%', objectFit: 'cover' }} />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Unleash Your Shopaholic Soul: Endless Choices, Perfect Prices!</h5>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src="https://source.unsplash.com/1400x1500/?clothing" className="d-block w-100 img-fluid" alt="img" style={{ maxHeight: '500px', width: '100%', objectFit: 'cover' }} />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Shop with Confidence: Secure, Safe, and Reliable Online Shopping.</h5>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    )
}

export default Slider



