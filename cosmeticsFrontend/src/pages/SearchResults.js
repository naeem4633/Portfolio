import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Listing from '../components/Listing';
import { ResetPage } from '../components/ResetPage';
import { BACKEND_URL } from '../backendUrl.js';


const SearchResults = () => {
  const { query } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Function to fetch search results from the backend
    const fetchSearchResults = async () => {
      try {
        const response = await axios.post(BACKEND_URL + 'product-search', { query });
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching search results:', error);
      }
    };

    // Call the fetchSearchResults function
    fetchSearchResults();
  }, [query]);

    return (
      <div>
        <ResetPage />
        {products.length > 0 ? (
          <Listing products={products} />
        ) : (
          <p className='h-[40vh] p-3 text-center w-full'>No Results</p>
        )}
      </div>
    );
  };
  
  export default SearchResults;