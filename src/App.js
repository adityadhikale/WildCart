/**
 * The App function is a React component that sets up the routing and structure of the application,
 * including a navbar, loading bar, slider, and different routes for displaying items and item details.
 * 
 * Returns:
 *   The App component is being returned.
 */
import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar';
import Navbar from './components/Navbar';
import Slider from './components/Slider';
import Itemsrow from './components/Itemsrow';
import ItemDetailsPage from './components/ItemDetailsPage';
import SearchItems from './components/SearchItems';

function App() {
  const[progress,setProgress] = useState(0)
 
  return (
    <>
      <BrowserRouter>
        <Navbar setProgress={setProgress} />
        <LoadingBar height={3} color="#0d6efd" progress={progress} />
        <Slider />
        <Routes>
          <Route path="/WildCart" element={<Itemsrow   setProgress={setProgress} />} />
          <Route path="/search" element={<SearchItems setProgress={setProgress} />} />
          <Route path="/itemdetails/:productId" element={<ItemDetailsPage setProgress={setProgress} />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;