import React, { useState, useEffect } from 'react';
import GoogleMapReact from 'google-map-react';

import { housesData } from '../data'
import { Link, useParams } from 'react-router-dom';
import { BiBed, BiBath, BiArea } from 'react-icons/bi'
import { AiFillStar, AiOutlineWifi, AiOutlineDown  } from 'react-icons/ai'
import { TbToolsKitchen   } from 'react-icons/tb'
import { CiParking1   } from 'react-icons/ci'
import Home from './Home';
import StarRating from '../components/Rating'
import Gallery from '../components/Gellary'
import Review from '../components/Reviews'




const PropertyDetails = () => {
  const { id } = useParams();

  const house = housesData.find((house) => { return house.id === parseInt(id) })

  const [selectedImage, setSelectedImage] = useState(house.imageLg);

  const handleSelectImage = (image) => {
    setSelectedImage(image);
  };

  const [numReviews, setNumReviews] = useState(3);
  const reviewsToShow = house.reviews.slice(0, numReviews);
  const numReviewsToAdd = 3;

  const handleLoadMore = () => {
    setNumReviews(numReviews + numReviewsToAdd);
  }
  
  return (
    <section>
      <div className='container mx-auto min-h-[800px] mb-14'>
        <div className='flex flex-col lg:flex-row lg:items-center lg:justify-between'>
          <div>
            <h2 className='text-2xl font-semibold'>{house.name}</h2>
            <h3 className='text-lg mb-4'>{house.address}</h3>
          </div>
          <div className='mb-4 lg:mb-0 flex gap-x-2 text-sm'>
            <div className='bg-green-500 text-white px-3 rounded-full'>{house.type}</div>
            <div className='bg-violet-500 text-white px-3 rounded-full'>{house.country}</div>
          </div>
          <div className='text-3xl font-semibold text-violet-600'>
            PKR   {house.price}
          </div>
        </div>
        <div className='flex flex-col w-full items-start gap-8 lg:flex-row'>
          <div className='mx-w-[768px] lg:w-[65%] bg-[#fff] mb-8 border  border-gray-300 px-4 py-3 rounded-3xl'>
            <div className='mb-2 bg-cover object-cover rounded-3xl'>
              <img className= " rounded-3xl"src={selectedImage} alt="" />  
            </div>
            <Gallery images={house.image} onSelect={handleSelectImage} />
            <div>

            <h2 className=' mt-6 font-semibold mb-3 text-gray-700 text-xl'>Details</h2>
            <div className='flex gap-x-6 text-violet-700 mb-6 '>
              <div className='flex gap-x-2 items-center'>
                <BiBed className='text-2xl' />
                <div>
                  {house.bedrooms}
                </div>
              </div>
              <div className='flex gap-x-2 items-center'>
                <BiBath className='text-2xl' />
                <div>
                  {house.bathrooms}
                </div>
              </div>
              <div className='flex gap-x-2 items-center'>
                <BiArea className='text-2xl' />
                <div>
                  {house.surface}
                </div>
              </div>
            </div>
            <h2 className=' mt-6  font-semibold mb-3 text-gray-700 text-xl'>Description</h2>
            </div>
            <div>
              {house.description}
            </div>
            

              <h2 className=' mt-7  font-semibold mb-3 text-gray-700 text-xl'>Facilities</h2>
              <div className='flex gap-4 '>

                  {house.wifi=== 1?(
                  <div className='flex gap-1 items-center justify-center text-violet-700'>
                    <AiOutlineWifi size={30} color={'rgb(109 40 217 )'}/>
                    <p>Wifi</p>
                  </div>
                ):""}
                  {house.kitchen === 1?(
                <div className='flex gap-1 items-center justify-center text-violet-700'>

                  <TbToolsKitchen size={30} color={'rgb(109 40 217 )'} />
                  <p>Kitchen</p>
                </div>
                  ):""}
                  {house.parking ===1? (
                <div className='flex gap-1 items-center justify-center text-violet-700'>

                  <CiParking1 size={30} color={'rgb(109 40 217 )'} />
                  <p>Parking</p>
                </div>
                  ):""}
              </div>
            
            <div>

              <div className='flex justify-between mt-6'>

                <h2 className=' mt-6  font-semibold mb-3 text-gray-700 text-xl flex gap-6 items-center'>Reviews 
                <span className='flex text-sm gap-2 items-center text-violet-700'><AiFillStar color={'#ffd700'} size={20}/> 4.8 
                <span className='text-gray-700'>
                  (120 reviews)
                </span>
                </span>
                </h2>
                <Link to={`/reviews/${house.id}`} className = "self-center text-violet-700" href="#">See All</Link>

              </div>
              <div >
                
                {reviewsToShow.map((review, index) => (
                  <Review key={index} {...review} />
                ))}
                {numReviews < house.reviews.length && (
                  <button className='flex justify-center m-auto px-4 py-2 rounded-lg text-white bg-violet-700 items-center gap-3' onClick={handleLoadMore}>Load More <span> <AiOutlineDown/> </span></button> 
                )}
              </div>
            </div>

          </div>
          <div className='flex-1 bg-white mb-8 border w-full border-gray-300 px-6 py-8  rounded-3xl sticky top-5'> 

            <div>
              <div className='flex items-center gap-x-4 mb-8'>
                <div className='w-20 h-20 border-[3px] border-violet-300 rounded-full p-1 '>
                  <img src={house.agent.image} alt="nothing" />
                </div>
                <div >
                  <div className='font-bold'>{house.agent.name}</div>
                  <div className='flex gap-1'>

                    <StarRating rating={4}/>
                    <p>(23)</p>
                  </div>
                  <Link to='' className='text-violet-700 text-sm'>View Listings</Link>
                </div>
              </div>
             
            </div>
            <h2 className=' mt-6  font-semibold mb-2 text-gray-700 text-xl'>Location</h2>

            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2928.44719678392!2d-81.18748464925231!3d42.77889511643884!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882e5f305d8ad207%3A0x16a90580f8da7b56!2sShelby&#39;s%20Shawarma%20-%20St.Thomas!5e0!3m2!1sen!2s!4v1679991661953!5m2!1sen!2s"
              title="Google Map"
              allowfullscreen="1"
              loading="lazy"
              className='w-full h-full  rounded-3xl'
            ></iframe>
            <div className='flex justify-between mt-5 items-center'>
              <div className='text-violet-700 text-xl font-semibold'>
                PKR {house.price} <span className='text-gray-500 text-sm'>/Per Day </span>
              </div>
              <button className='px-4 py-2 bg-violet-700 text-white rounded-xl'>
                Book Now
              </button>
            </div>
          </div>
        </div>
      </div>



    </section>
  )

};
function MapEmbed() {
  const [mapSrc, setMapSrc] = useState('');

  useEffect(() => {
    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.GOOGLE_MAP_API_KEY}`;
    script.async = true;
    document.head.appendChild(script);

    script.addEventListener('load', () => {
      const map = new window.google.maps.Map(document.getElementById('map'), {
        center: { lat: 37.7749, lng: -122.4194 },
        zoom: 8,
      });

      const marker = new window.google.maps.Marker({
        map,
        position: { lat: 37.7749, lng: -122.4194 },
        draggable: true,
      });

      marker.addListener('dragend', () => {
        const position = marker.getPosition();
        setMapSrc(`https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12612.329368619833!2d${position.lng()}!3d${position.lat()}!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zN8KwNTInMzEuOCJTIDEyMjLCsDQzJzI0LjQiRQ!5e0!3m2!1sen!2sus!4v1659384387241!5m2!1sen!2sus`);
      });
    });
  }, []);

  return (
    <div>
      <div id="map" style={{ height: '400px', width: '100%' }}></div>
      <iframe
        src={mapSrc}
        width="400"
        height="205"
        title="Google Map"
        allowfullscreen=""
        loading="lazy"
      ></iframe>
    </div>
  );
}

export default PropertyDetails;


