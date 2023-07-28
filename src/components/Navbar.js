/**
 * The above code is a React component that represents a navbar with a search input field and a logo.
 * 
 * Args:
 *   props: The `props` parameter in the `Navbar` component is an object that contains any properties
 * passed to the component when it is used. In this case, it is expecting a `setProgress` property to
 * be passed.
 * 
 * Returns:
 *   The Navbar component is returning a JSX element.
 */
import React, { useState } from 'react';
import { Link,Route,Routes,useNavigate } from 'react-router-dom';
import logo from '../assets/images/logo512.png';
import SearchItems from './SearchItems';
import ItemDetailsPage from './ItemDetailsPage';


const Navbar = (props) => {

    const { setProgress} = props;
    const [searchInput, setSearchInput] = useState("");
    const [formSubmitted, setFormSubmitted] = useState(false);

    const navigate = useNavigate()

    const handleSubmit = (event) => {
        event.preventDefault();
        setFormSubmitted(true);
        setProgress(0);
        navigate('/search', { state: { searchInput } });
    };

    return (
        <>
            <div>
                <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
                    <div className="container-fluid">
                        <Link className="navbar-brand" to="/">
                            <img src={logo} alt="WildCart" width="30" height="24" />
                        </Link>
                        <form className="d-flex" role="search" onSubmit={handleSubmit}>
                            <input
                                className="form-control me-2"
                                type="search"
                                placeholder="Search"
                                aria-label="Search"
                                value={searchInput}
                                onChange={(event) => setSearchInput(event.target.value)}
                            />
                            <button className="btn btn-outline-primary" type="submit" onClick={handleSubmit} >Search</button>
                        </form>
                    </div>
                </nav>
            </div>
            {formSubmitted && <Routes>
            <Route path="/search" element={<SearchItems searchInput={searchInput}   setProgress={setProgress}/>} />
            <Route path="/itemdetails/:productId" element={<ItemDetailsPage  setProgress={setProgress} />} /> 
        </Routes>}
        </>
    );
};

export default Navbar;
