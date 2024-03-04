import React, {useState, useEffect} from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from "axios";
import { ResetPage } from './ResetPage';

const Details = ({ savedItems, onChange }) => {
    let { id } = useParams();
    const [furniture, setFurniture] = useState([]);
    const [similarFurniture, setSimilarFurniture] = useState([]);
    let [quantity, setQuantity] = useState(1);
  
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
  
    useEffect(() => {
      const fetchFurnitureItem = async () => {
        try {
          const furnitureResponse = await axios.get(
            `http://127.0.0.1:8000/api/single-item/${id}`
          );
          const furnitureData = furnitureResponse.data;
          setFurniture(furnitureData);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
  
      fetchFurnitureItem();
    }, [id]);
  
    useEffect(() => {
      const fetchSimilarItems = async () => {
        if (furniture.category) {
    try {
            const similarFurnitureResponse = await axios.get(
              `http://127.0.0.1:8000/api/similar-items/${furniture.category}`
            );
            const similarFurnitureData = similarFurnitureResponse.data;
            setSimilarFurniture(similarFurnitureData);
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        }
      };
  
      fetchSimilarItems();
    }, [furniture]);


    const handleSavedItemCreation = (is_cart, is_wishlist) => { 
        const newSavedItem = {
          furniture: furniture,
          quantity: quantity, 
          is_cart: is_cart,
          is_wishlist: is_wishlist,
        };
      
        fetch(`http://127.0.0.1:8000/api/save-item/`, {
          method: "POST",
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(newSavedItem)
        })
          .then(response => {
            if (response.ok) {
              // Handle successful response here
              console.log("Saved item created successfully.");
      
              // Update the savedItems state after successful creation
              const updatedSavedItems = [...savedItems, newSavedItem];
              onChange(updatedSavedItems);
            } else {
              // Handle error response here
              console.error("Failed to create saved item.");
            }
          })
          .catch(error => {
            // Handle fetch error here
            console.error("An error occurred while creating saved item:", error);
          });
      };

  return (
    <>
        <div className='bg-white w-full border border-gray-300 border-t-1 border-l-0 border-r-0 border-b-0'></div>
        <div className='w-3/4 mx-auto flex flex-col justify-between py-24'>
            <ResetPage/>
            <div className='grid grid-cols-1 gap-4 justify-between w-full mx-auto items-center lg:grid-cols-2'>
                <div className='w-full mr-8 drop-shadow-lg'>
                    <img src={`${furniture.image_path}`}></img>
                </div>
                <div className='w-full ml-8 mt-16 text-left'>
                    <div className='flex flex-col'>
                        <div className='flex flex-col lg:text-left'>
                            <p className='text-3xl'>{furniture.name}</p>
                            <p className='text-2xl mt-2'>USD {furniture.price}</p>
                            <p className='mt-2 text-lg'>SKU : {furniture.sku}</p>
                            <p className='text-lg'>Size : Single</p>
                            <p className='text-lg'>Delivered in : 04 - 06 Working Days</p>
                        </div>
                        <div className='flex flex-col border-gray-200 my-6'>
                            <div className='flex flex-row'>
                                <button onClick={() => setQuantity(quantity > 1 ? quantity - 1 : 1)} className='w-12 h-12 bg-green-500 hover:bg-green-700'>
                                    <img className='w-6 m-3' src='../static/images/minus.png'></img>
                                </button>
                                <p className='border border-green-500 w-24 h-12 mx-2 px-11 pt-2.5 text-lg'>{quantity}</p>
                                <button onClick={() => setQuantity(quantity + 1)} className='w-12 h-12 bg-green-500 hover:bg-green-700'>
                                    <img className='w-6 m-3' src='../static/images/plus.png'></img>
                                </button>
                                <Link onClick={() => handleSavedItemCreation(false, true)} className=' bg-white hover:bg-gray-200 w-12 h-12 p-3 border border-gray-300 mx-2'>
                                    <img src='../static/images/heart.png'></img>
                                </Link>
                            </div>
                        </div>
                        <Link onClick={() => handleSavedItemCreation(true, false, quantity)} className='w-52 h-12 bg-green-500 hover:bg-green-700'>
                            <p className='text-xl text-white my-2 mx-auto text-center'>Add To Cart</p>
                        </Link>
                        <div className='border border-gray-200 my-4'></div>
                        <div className='flex flex-col border-gray-200 text-left'>
                            <ul>
                                <li><p className='text-xl'>Installment Plans Available</p></li>
                                <li><p className='text-red-500 underline'>Starting as low as USD {Math.round(furniture.price/11)}</p></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className='w-3/4 mx-auto flex flex-col'>
            <p className='text-xl mb-2'>PRODUCT DESCRIPTION</p>
            <div className='text-left w-full px-8 py-6 border border-gray-200 text-sm md:text-xl px-16 py-12'>
                <p className='mb-6 font-medium'>{furniture.description}</p>
            </div>
        </div>
        <div className='w-3/4 mx-auto flex flex-col justify-between mt-24'>
            <p className='text-2xl'>Products similar to this item</p>
            <div className="grid grid-rows-1 grid-cols-1 gap-x-16 gap-y-8 my-8 drop-shadow-md sm:grid-cols-2 lg:grid-cols-3">
                    {similarFurniture.map((furniture) => (
                        <Link className='hover:scale-105 transition-transform duration-300 ease-in-out' key={furniture.id} to={`/details/${furniture.id}`} onClick={() => window.scrollTo(0, 0)}>
                        <div className="w-full mx-auto">
                          <img className="rounded" src={`${furniture.image_path}`} alt={furniture.name} />
                          <div className="flex flex-col justify-between my-6 h-14 text-left text-xl">
                            <p>{furniture.name}</p>
                            <p className="font-medium">USD {furniture.price}</p>
                          </div>
                        </div>
                      </Link>
                    ))}
            </div>
        </div>
    </>
  )
}

export default Details