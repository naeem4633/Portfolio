import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ResetPage } from './ResetPage';

const Listing = ( {furniture} ) => {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const delayTimeoutRef = useRef(null);
    const [sortBy, setSortBy] = useState("");


    const handleSort = (e) => {
        setSortBy(e.target.value);
      };

    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };

    if (sortBy === "low_to_high") {
        furniture.sort((a, b) => a.price - b.price);
      } else if (sortBy === "high_to_low") {
        furniture.sort((a, b) => b.price - a.price);
    }

    const handleMouseLeave = () => {
        clearTimeout(delayTimeoutRef.current);
        delayTimeoutRef.current = setTimeout(() => {
          setDropdownOpen(false);
        }, 1000);
      };

  return (
    <>
    <div className='flex-flex-row justify-center'>
        <ResetPage />
        <div className="bg-white dark:bg-gray-900 border border-gray-200 border-t-1 border-l-0 border-r-0 border-b-0">
            <div className="mx-auto w-full max-w-screen px-24 py-6 lg:py-8 flex flex-row justify-center">
                <button className="flex flex-row justify-between mx-10">
                <img className="w-6 mx-3" src="../static/images/filter.png" alt="Filter icon"></img>
                <p>Filter By</p>
                </button>

                <div className="relative inline-block flex flex-row z-20" onClick={toggleDropdown} onMouseLeave={handleMouseLeave}>
                <p className='mx-2'>Sort By</p>
                <button
                    className="dropdown-toggle"
                    type="button"
                    id="filterDropdown"
                    aria-haspopup="true"
                    aria-expanded={dropdownOpen}
                >
                <img src="../static/images/down-arrow.png" alt="Down arrow icon" className="w-6 h-6" />
                </button>
                {dropdownOpen && (
                    <ul className="bg-white absolute w-48 transform translate-y-1/3 -translate-x-1/4 rounded border-2 border-gray-300 drop-shadow-lg" aria-labelledby="filterDropdown">
                        <li>
                            <button className="mx-auto mt-4" onClick={handleSort} value="low_to_high">
                            Price: Low to high
                            </button>
                        </li>
                        <li>
                            <button className="mx-auto my-4" onClick={handleSort} value="high_to_low">
                            Price: High to low
                            </button>
                        </li>
                    </ul>
                )}
                </div>
            </div>
        </div>

        <div className="w-3/4 bg-white dark:bg-gray-900 border border-gray-300 border-t-1 border-l-0 border-r-0 border-b-0 mx-auto">
            <div className="mx-auto w-full max-w-screen py-6 lg:py-8 flex flex-row">
                <div className="grid grid-cols-1 gap-x-12 gap-y-8 my-8 lg:grid-cols-2 xl:grid-cols-3">
                    {furniture.map((item) => (
                    <Link to={`/details/${item.id}`} className="mx-auto drop-shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out" key={item.id}>
                        <img className='w-full rounded' src={item.image_path} alt={item.name} />
                        <div className='flex flex-col justify-between my-6 h-14 text-left text-xl'>
                        <p>{item.name}</p>
                        <p className='font-medium'>USD {item.price}</p>
                        </div>
                    </Link>
                    ))}
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Listing
