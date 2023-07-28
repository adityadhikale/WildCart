/**
 * The `Itemsrow` component is a React component that displays a carousel of items, with each row
 * containing a chunk of items.
 * 
 * Args:
 *   props: The `props` parameter is an object that contains the properties passed to the `Itemsrow`
 * component. These properties can be accessed using dot notation, for example `props.setProgress` is
 * accessing the `setProgress` property passed to the component.
 * 
 * Returns:
 *   The component `Itemsrow` is returning a JSX fragment. Inside the fragment, there is a mapping of
 * `chunkedData` array using the `map` function. For each chunk in `chunkedData`, a `div` element is
 * rendered with a unique `key` attribute. Inside the `div`, there is a heading element (`h3`) with the
 * text "Today's Deals".
 */
import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Item from './Item';
import { responsive } from '../assets/Styles/Responsive';
import { itemData } from '../assets/data/details';
import { Link } from 'react-router-dom';



const Itemsrow = (props) => {

    let setProgress = props.setProgress;

    const chunkArray = (array, chunkSize) => {
        const chunks = [];
        for (let i = 0; i < array.length; i += chunkSize) {
            chunks.push(array.slice(i, i + chunkSize));
        }
        return chunks;
    };

    const itemsPerRow = 10;
    const chunkedData = chunkArray(itemData, itemsPerRow);

    return (
        <>
        {chunkedData.map((chunk, rowIndex) => (
          <div key={rowIndex}>
            <div className='my-5 mx-1'>
              <h3 className='mx-2' style={{ fontFamily: 'Rubik' }}>Today’s Deals</h3>
              <Carousel
                responsive={responsive}
                itemClass="carousel-item-padding-10-px"
                arrows={true}
                infinite={true}
                autoPlay={true}
                autoPlaySpeed={5000}
                removeArrowOnDeviceType={['tablet', 'mobile']}
              >
                {chunk.map((result) => (
                  <Link key={result.product_id} to={`/itemdetails/${result.product_id}`} onClick={() => setProgress(0)}>
                    <div style={{ fontFamily: 'Rubik' }}>
                      <Item
                        product_photos={result.product_photos}
                        product_title={result.product_title}
                        price={result.offer.price}
                      />
                    </div>
                  </Link>
                ))}
              </Carousel>
            </div>
          </div>
        ))}
      </>
    );
};

export default Itemsrow;

