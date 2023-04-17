import React, { useState, useEffect } from 'react';
import GoogleMapReact from 'google-map-react';

import { housesData } from '../data'
import { Link, useParams } from 'react-router-dom';
import { BiBed, BiBath, BiArea } from 'react-icons/bi'
import Home from './Home';


const PropertyDetails = () => {
  const { id } = useParams();

  const house = housesData.find((house) => { return house.id === parseInt(id) })

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
          <div className='mx-w-[768px] lg:w-[65%]'>
            <div className='mb-8'>
              <img src={house.imageLg} alt="" />
            </div>
            <div className='flex gap-x-6 text-violet-700 mb-6'>
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
            <div>
              {house.description}
            </div>
          </div>
          <div className='flex-1 bg-white mb-8 border w-full border-gray-300 px-6 py-8 rounded-lg'>

            <div>
              <div className='flex items-center gap-x-4 mb-8'>
                <div className='w-20 h-20 border-[3px] border-violet-300 rounded-full p-1'>
                  <img src={house.agent.image} alt="nothing" />
                </div>
                <div >
                  <div className='font-bold'>{house.agent.name}</div>
                  <Link to='' className='text-violet-700 text-sm'>View Listings</Link>
                </div>
              </div>
              <form className='flex w-auto flex-col gap-y-4'>
                <input
                  className='border border-gray-300 focus:border-violet-700 outline-none rounded w-full px-4 h-14 text-sm'
                  type='text'
                  placeholder='Name*'
                />
                <input
                  className='border border-gray-300 focus:border-violet-700 outline-none rounded w-full px-4 h-14 text-sm'
                  type='text'
                  placeholder='Email*'
                />
                <input
                  className='border border-gray-300 focus:border-violet-700 outline-none rounded w-full px-4 h-14 text-sm'
                  type='text'
                  placeholder='Phone*'
                />
                <textarea
                  className='border border-gray-300 focus:border-violet-700 outline-none resize-none rounded w-full p-4 h-36 text-sm text-gray-400'
                  placehotder='Message *'
                  defaultValue={`Hello, I'm interested in this ` + house.name}
                ></textarea>
                <div className='flex gap-x-1 '>
                  <button className='bg-violet-700 hover:bg-violet-800 text-white rounded p-4 text-sm w-full transition'>
                    Send message
                  </button>
                  <button className='border border-violet-700 text-violet-700 hover:border-violet-500 hover:text-violet-500 rounded p-4 text-sm w-full transition'>
                    Call
                  </button>
                </div>
              </form>
            </div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2928.44719678392!2d-81.18748464925231!3d42.77889511643884!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882e5f305d8ad207%3A0x16a90580f8da7b56!2sShelby&#39;s%20Shawarma%20-%20St.Thomas!5e0!3m2!1sen!2s!4v1679991661953!5m2!1sen!2s"
              title="Google Map"
              allowfullscreen=""
              loading="lazy"
              className='w-full py-5'
            ></iframe>
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
