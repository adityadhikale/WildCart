/**
 * The `SearchItems` component is a React component that fetches search results from an API based on a
 * search input, displays the results, and provides links to view more details about each item.
 * 
 * Args:
 *   props: The `props` parameter in the `SearchItems` component is an object that contains any props
 * passed to the component. In this case, it is expecting a `setProgress` prop.
 * 
 * Returns:
 *   The component is returning a JSX element. It renders a container with a row of search items. Each
 * search item is displayed in a column and wrapped in a Link component to navigate to the item details
 * page. The search item details are passed as props to the SearchItemsDetails component.
 */
import React, { useEffect, useState } from 'react';
import SearchItemsDetails from './SearchItemsDetails';
import axios from 'axios';
import Spinner from './Spinner';
import { Link, useLocation } from 'react-router-dom';

const SearchItems = (props) => {
    const { setProgress } = props;

    const location = useLocation();
    const searchInput = location.state?.searchInput || '';

    const [searchInfo, setSearchInfo] = useState(null);
    const [dataFetched, setDataFetched] = useState(false);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchSearchItems = async () => {
            try {
                if (!searchInput) {
                    return; 
                }
                setLoading(true);
                setProgress(30);
                const response = await axios.get('https://real-time-product-search.p.rapidapi.com/search', {
                    params: {
                        q: searchInput,
                        country: 'in',
                        language: 'en'
                    },
                    headers: {
                        'X-RapidAPI-Key': '61666962a9mshecff6c79e175231p1329a7jsnbc8be49c9365',
                        'X-RapidAPI-Host': 'real-time-product-search.p.rapidapi.com'
                    }
                });
                setProgress(60);
                setSearchInfo(response.data.data);
                setDataFetched(true);
                setLoading(false);
                setProgress(100);
            } catch (error) {
                setProgress(100);
                setLoading(false);
                console.log(error);

            } finally {
                setProgress(100);
                setLoading(false);
            }
        };

        if (!dataFetched) {
            fetchSearchItems();
        }
    }, [setProgress, searchInput, dataFetched]);

    if (loading) {
        return <Spinner />;
    }

    if (!searchInfo) {
        return <div>
            <p style={{fontFamily: 'Rubik'}} className='text-center'>
                Product Not Found
            </p>
        </div>; 
    }

    return (
        <>
            <div className='container my-5'>
                <div className='row my-3'>
                    {searchInfo.map((item, index) => (
                        <div className='col-6 col-md-4 col-lg-3' key={index}>
                            <Link to={`/itemdetails/${item.product_id}`}>
                                <SearchItemsDetails
                                    product_id={item.product_id}
                                    product_title={item.product_title}
                                    product_photos={item.product_photos}
                                    offer={item.offer}
                                />
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default SearchItems;
