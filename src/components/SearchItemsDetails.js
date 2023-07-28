/**
 * The `SearchItemsDetails` component is a React component that displays details of a search item,
 * including the product title, product photos, and offer price.
 * 
 * Args:
 *   props: The `props` parameter is an object that contains the properties passed to the
 * `SearchItemsDetails` component. These properties include `product_id`, `product_title`,
 * `product_photos`, and `offer`.
 * 
 * Returns:
 *   The component `SearchItemsDetails` is returning a JSX element.
 */
import React from 'react';
import { Link } from 'react-router-dom';

const SearchItemsDetails = (props) => {

    const { product_id, product_title, product_photos, offer } = props;
    const price = offer ? offer.price : 'N/A';


    const truncateTitle = (title, limit) => {
        if (title.length > limit) {
            return title.slice(0, limit) + '...';
        }
        return title;
    };

    return (
        <>
            <Link to={`/itemdetails/${product_id}`} style={{ textDecoration: 'none', color: 'inherit' }}> 
                <div className="item-container" style={{ padding: '10px', marginRight: '2px' }}>
                    <div className="card my-3 mx-2" style={{ width: '100%', maxWidth: '230px', borderRadius: '3px' }}>
                        <img src={product_photos} className="card-img-top" alt="img" style={{ maxHeight: '200px', height: '200px', width: '100%', objectFit: 'cover', borderRadius: '3px 3px 0 0' }} />
                        <div className="card-body" style={{ fontFamily: 'Rubik' }}>
                            <h6 className="card-text">{truncateTitle(product_title, 15)}</h6>
                            <h5>{price}</h5>
                        </div>
                    </div>
                </div>
            </Link>
        </>
    )
}

export default SearchItemsDetails

