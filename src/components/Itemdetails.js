/**
 * The `Itemdetails` component is a React functional component that fetches and displays details of a
 * product based on the `productId` parameter from the URL.
 * 
 * Args:
 *   props: The `props` parameter is an object that contains the properties passed to the `Itemdetails`
 * component. These properties can be accessed using dot notation, such as `props.setProgress` and
 * `props.setProgress(30)`.
 * 
 * Returns:
 *   The `Itemdetails` component is returning JSX elements that display the details of a product. It
 * includes a carousel of product photos, the product title, attributes, rating, price, description,
 * highlights, shipping information, and product condition.
 */
import React, { useEffect, useState, useMemo } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Spinner from './Spinner';

const Itemdetails = (props) => {
    const [itemInfo, setItemInfo] = useState(null);
    const [dataFetched, setDataFetched] = useState(false);
    const { productId } = useParams();
    const [loading, setLoading] = useState(false);

    const fetchItemDetails = useMemo(
        () => async () => {
            try {
                props.setProgress(30);
                setLoading(true);
                const response = await axios.get(
                    `https://real-time-product-search.p.rapidapi.com/product-details`,
                    {
                        params: {
                            product_id: productId,
                            country: 'in',
                            language: 'en',
                        },
                        headers: {
                            'X-RapidAPI-Key': '61666962a9mshecff6c79e175231p1329a7jsnbc8be49c9365',
                            'X-RapidAPI-Host': 'real-time-product-search.p.rapidapi.com',
                        },
                    }
                );
                props.setProgress(60);
                setItemInfo(response.data.data.product);
                setDataFetched(true);
                setLoading(false);
                props.setProgress(100);
            } catch (error) {
                console.error(error);
                setLoading(false);
            } finally {
                props.setProgress(100);
                setLoading(false);
            }

        },
        [productId, props]
    );

    useEffect(() => {
        if (!dataFetched) {
            fetchItemDetails();
        }
    }, [dataFetched, fetchItemDetails]);



    if (loading) {
        return <Spinner />;
    }

    if (!itemInfo) {
        return <p style={{ fontFamily: 'Rubik' }} className='text-center'>
            Product Not Found
        </p>
    }

    const {
        product_title,
        product_description,
        product_photos,
        product_attributes,
        product_highlights,
        typical_price_range,
        offer,
        product_rating,
    } = itemInfo;

    const renderStars = (rating) => {
        if (rating === null) {
            return <p>No rating available</p>;
        }

        const fullStars = Math.floor(rating);
        const halfStar = rating - fullStars >= 0.5;

        const stars = [];
        for (let i = 0; i < fullStars; i++) {
            stars.push(<span key={i}>★</span>);
        }

        if (halfStar) {
            stars.push(<span key="halfStar">½</span>);
        }

        return stars;
    };

    return (
        <>
           <div className="d-flex flex-wrap flex-md-nowrap" style={{ overflowX: 'hidden' }}>
                <div className="col-md-5 col-12 mb-3 d-flex justify-content-center" style={{ marginRight: '20px' }}>
                    <div id="carouselExample" className="carousel slide my-5 mx-5" style={{ width: '400px', minHeight: '400px', backgroundColor: 'white' }}>
                        <div className="carousel-inner">
                            {product_photos && product_photos.length > 0 ? (
                                product_photos.map((photo, index) => (
                                    <div className={`carousel-item ${index === 0 ? 'active' : ''}`} key={index} style={{ width: '400px' }}>
                                        <img src={photo ? photo : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqEWgS0uxxEYJ0PsOb2OgwyWvC0Gjp8NUdPw&usqp=CAU'} className="d-block w-100" alt={`Product ${index + 1}`} style={{ width: '400px' }} />
                                    </div>
                                ))
                            ) : (
                                <div className="carousel-item active" style={{ width: '400px' }}>
                                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqEWgS0uxxEYJ0PsOb2OgwyWvC0Gjp8NUdPw&usqp=CAU" className="d-block w-100" alt="Product" style={{ width: '400px' }} />
                                </div>
                            )}
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
                <div className="col-md-5 my-5 mb-3 container" style={{ marginLeft: '10px', fontFamily: 'Rubik' }}>
                    <div>
                        <h4>{product_title ? product_title : 'No title'}</h4>
                        {product_attributes ? (
                            <h5>
                                {Object.entries(product_attributes).map(([attribute, value], index) => (
                                    <span key={index}>
                                        {attribute ? attribute : ''}: {value ? value : ''}
                                        {index !== Object.keys(product_attributes).length - 1 && <br />}
                                    </span>
                                ))}
                            </h5>
                        ) : (
                            <p>No attributes available</p>
                        )}
                        <p>{renderStars(product_rating ? product_rating : 0)}</p>
                        <hr />
                        <h4>{typical_price_range && typical_price_range[0] ? typical_price_range[0] : offer.price}</h4>
                        <hr />
                        <p>{product_description ? product_description : 'No description'}</p>
                        <hr />
                        {product_highlights && product_highlights.length > 0 ? (
                            <div className="product-highlights my-4">
                                <h5>Product Highlights:</h5>
                                {product_highlights.map((highlight, index) => (
                                    <div key={index} className="highlight">
                                        {highlight ? highlight : ''}
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <p>No product highlights available.</p>
                        )}
                        <p>Shipping: {offer.shipping ? offer.shipping : ''}</p>
                        <p>Product Condition: {offer.product_condition ? offer.product_condition : ''}</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Itemdetails;


