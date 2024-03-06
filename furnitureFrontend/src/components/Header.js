import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BACKEND_URL } from '../backendUrl.js'


const Header = ({furniture, savedItems, onChange}) => {
  const [cartIsHovered, setCartIsHovered] = useState(false);
  const [wishlistIsHovered, setWishlistIsHovered] = useState(false);
  const [searchDiv, showSearchDiv] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredProducts = furniture
    .filter((item) => item.name && item.name.toLowerCase().includes(searchQuery.toLowerCase()))
    .slice();

  const toggleSearchDiv = (visible) => {
    showSearchDiv(visible);
  };

  let cartItems = savedItems.filter(item => item.is_cart === true);
  let wishlistItems = savedItems.filter(item => item.is_wishlist === true);

  const handleDelete = (id) => {
    fetch(BACKEND_URL + `delete-item/${id}`, {
      method: 'DELETE',
    })
      .then(response => response.json())
      .then(() => {
        const updatedSavedItems = savedItems.filter(item => item.id !== id);
        onChange(updatedSavedItems);
      })
      .catch(error => console.error(error));

    // Update savedItems state locally to reflect the deletion
    const updatedSavedItems = savedItems.filter(item => item.id !== id);
    onChange(updatedSavedItems);
  };


  return (
    <>
    <nav class="hidden lg:block bg-white border-gray-200 dark:bg-gray-900 border border-gray">
      <div class="max-w-screen flex items-center justify-between mr-60 p-3">
        <p class="flex items-center ml-32">
          <span class="self-center text-2xl whitespace-nowrap dark:text-white">111-222-333</span>
        </p>
        <button data-collapse-toggle="navbar-default" type="button" class="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
          <span class="sr-only">Open main menu</span>
          <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
        </button>
        <div class="hidden w-full md:block md:w-16 mr-16" id="navbar-default">
        </div>
      </div>
    </nav>

    <p class="mx-auto py-1 lg:hidden">
        <span class="self-center text-2xl whitespace-nowrap dark:text-white">111-222-333</span>
    </p>
    <nav className='bg-white border border-gray-200 dark:bg-gray-900 flex justify-between p-2'>
      <Link to={'/'} class="flex items-center ml-6 md:ml-24">
            <img src="../static/images/sofa.png" class="h-8 mr-3" alt="..." /> 
            <span class="self-center text-md md:text-2xl font-semibold whitespace-nowrap dark:text-white">Furniture Emporium</span>
      </Link>
      
      <div className="relative flex flex-col w-1/3">
  <div className="hidden lg:block">
    <input
      type="text"
      id="search-navbar"
      className="block w-full p-2 text-sm text-gray-900 border border-gray-300 bg-gray-50 focus:ring-gray-500 focus:border-gray-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      placeholder="Search for products..."
      autoComplete="off"
      onInput={() => toggleSearchDiv(true)}
      onBlur={() => toggleSearchDiv(false)}
      value={searchQuery}
      onChange={handleSearch}
    />
  </div>
  <div className={`absolute max-h-[75vh] border border-black border-t-0 bg-white z-30 translate mt-10 ${(searchDiv && filteredProducts.length > 1) ? 'block' : 'hidden'} overflow-auto w-full`}>
    <p className="mx-auto text-lg font-medium p-4">Search Results</p>
    <div className="border border-gray-200"></div>
    {filteredProducts.map((item) => (
      <>
        <Link onClick={() => console.log('clicked item')} to={`/details/${item.id}`} key={item.id}>
          <div className="flex flex-row text-sm w-3/4 mx-auto text-left my-2 bg-white hover:bg-gray-200 p-2">
            <img
              className="w-20 h-20 rounded"
              src={item.image_path}
              alt={item.name}
            />
            <p className="ml-4 w-full my-auto text-base">{item.name}</p>
          </div>
        </Link>
        <div className="w-3/4 mx-auto border border-gray-300 my-2"></div>
      </>
    ))}
  </div>
</div>

      
      <div className='mr-4 py-2 mr-6 md:mr-24'>
        <ul className='flex flex-row space-x-3 md:space-x-6'>
          <li>
            <Link to={'/login'} class="block p-2 text-white rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500" aria-current="page">
                <img className='h-4 md:h-8' src='../static/images/user.png'></img>
            </Link>
          </li>
          <li>
            <Link onClick={() => {setWishlistIsHovered(true); setCartIsHovered(false);}}
                className="block p-2 text-black rounded hover:bg-gray-100 md:hover:bg-transparent md:p-0 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                <img  className="h-4 md:h-8" src="../static/images/heart.png" alt="cart" />
                {wishlistIsHovered && (
                  <div onMouseEnter={() => setWishlistIsHovered(true)}
                  onMouseLeave={() => setWishlistIsHovered(false)} className="popover absolute w-80 max-h-[75vh] bg-white rounded flex-col right-0 my-3 mx-1 drop-shadow-lg z-10 md:w-96">
                    <div className="flex flex-col">
                      <p className="m-4 text-lg">Your Wishlist</p>
                      {wishlistItems.length > 0 && (
                        <div
                          className={`cart-items-container ${
                            wishlistItems.length > 5 ? 'overflow-y-scroll overflow-x-hidden' : ''
                          }`}
                          style={{ maxHeight: 'calc(75vh - 120px)' }}>
                          {wishlistItems.map((item) => (
                            <>
                              <div className="w-3/4 mx-auto border border-gray-200 mb-2"></div>
                              <div className="flex flex-row text-sm mx-6 mt-3 mb-5">
                                <img
                                  className="w-20 h-20"
                                  src={item.furniture.image_path}
                                  alt={item.furniture.name}
                                />
                                <div className="flex flex-col text-left justify-between">
                                  <div className="flex flex-row w-64 md:w-80">
                                    <p className="ml-4 w-3/5">
                                      {item.furniture.name} ({item.quantity})
                                    </p>
                                    <img
                                      src="../static/images/delete.png"
                                      className="h-4 mt-2"
                                      onClick={() => handleDelete(item.id)}
                                      alt="delete"
                                    />
                                  </div>
                                  <p className="mx-4 mb-2">USD {item.furniture.price}</p>
                                </div>
                              </div>
                            </>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </Link>
            </li>
          <li>
            <Link
              onClick={() => {setCartIsHovered(true); setWishlistIsHovered(false);}}
              className="block p-2 text-black rounded hover:bg-gray-100 md:hover:bg-transparent md:p-0 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
            >
              <img className="h-4 md:h-8" src="../static/images/cart.png" alt="cart" />
              {cartIsHovered && (
                <div onMouseEnter={() => setCartIsHovered(true)}
                onMouseLeave={() => setCartIsHovered(false)} className="popover absolute w-80 max-h-[75vh] bg-white rounded flex-col right-0 my-3 mx-1 drop-shadow-lg z-10 md:w-96">
                  <div className="flex flex-col">
                    <p className="m-4 text-lg">Your Cart</p>
                    {cartItems.length > 0 && (   
                      <div
                        className={`cart-items-container ${
                          cartItems.length > 5 ? 'overflow-y-scroll overflow-x-hidden' : ''
                        }`}
                        style={{ maxHeight: 'calc(75vh - 120px)' }}
                      >
                        {cartItems.map((item) => (
                          <>
                            <div className="w-3/4 mx-auto border border-gray-200 mb-2"></div>
                              <div className="flex flex-row text-sm mx-6 mt-3 mb-5">
                                <img
                                  className="w-20"
                                  src={item.furniture.image_path}
                                  alt={item.furniture.name}
                                />
                                <div className="flex flex-col text-left justify-between">
                                  <div className="flex flex-row w-64 md:w-80">
                                    <p className="ml-4 w-3/5">
                                      {item.furniture.name} ({item.quantity})
                                    </p>
                                    <img
                                      src="../static/images/delete.png"
                                      className="h-4 mt-2"
                                      onClick={() => handleDelete(item.id)}
                                      alt="delete"
                                    />
                                  </div>
                                  <p className="mx-4 mb-2">$ {item.furniture.price}</p>
                              </div>
                            </div>
                          </>
                        ))}
                      </div>
                    )}
                    {cartItems.length > 0 ? (<Link to="/checkout" className="w-1/2 h-1/2 bg-green-500 hover:bg-green-700 mx-auto mt-2 mb-4">
                      <p className="text-lg text-white my-2">Checkout</p>
                    </Link>) : (<p className='w-3/4 mx-auto pt-2 mb-4 text-md border border-gray-300 border-t-1 border-b-0 border-x-0'>No Items</p>)}
                  </div>
                </div>
              )}
            </Link>
          </li>
        </ul>
      </div>
    </nav>
    </>
  )
}

export default Header;
