/**
 * The above code is a React functional component that renders an item card with a truncated title,
 * image, and price.
 * 
 * Args:
 *   props: The `props` parameter is an object that contains the properties passed to the `Item`
 * component. These properties can be accessed using dot notation, such as `props.product_photos`,
 * `props.product_title`, and `props.price`.
 * 
 * Returns:
 *   The Item component is returning a JSX element.
 */
import React from 'react'

const Item = (props) => {

    const truncateTitle = (title, wordLimit) => {
        const words = title.toLowerCase().split(' ');
        const truncatedWords = words.slice(0, wordLimit).map((word) => word.charAt(0).toUpperCase() + word.slice(1));
        return truncatedWords.join(' ');
      };

    return (
        <>
            <div >
                <div className='card mx-3 text-center' style={{height:'311px',width:'225px', borderRadius:'3px'}}>
                    <img src={props.product_photos}  alt="img" style={{height:'200px',width:'223px',maxHeight:'300px',borderRadius:'3px'}}/>
                    <h5 className='mx-2' style={{textDecoration:'none'}}>{truncateTitle(props.product_title, 3)}</h5>
                    <p className='price mx-2' style={{textDecoration:'none'}}>{props.price}</p>
                </div>
            </div>
        </>
    )
}

export default Item
