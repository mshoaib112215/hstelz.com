import React, { useState, useEffect, useContext } from 'react';

import { RiWallet2Line, RiArrowDownSLine, RiArrowUpSLine } from 'react-icons/ri'
import { Menu } from '@headlessui/react';
import { HouseContext } from './HouseContext'

const PriceRangeDropdown = () => {
  const { price, setPrice } = useContext(HouseContext)
  const [isOpen, setIsOpen] = useState(false)
  
  const prices = [
    {
    value: "Price Range (Any)",
  },
    {
    value: "100000 - 150000",
  },
    {
    value: "2000000 - 2500000",
  },
    {
    value: "3000000 - 3500000",
  }
];

  return (
    <Menu as='div' className='dropdown relative'>
      <Menu.Button onClick={() => setIsOpen(!isOpen)} className="dropdown-btn w-full text-left ">
        <RiWallet2Line className='dropdown-icon-primary' />
        <div>
          <div className='text-[15px] font-medium leading-tight'> {price}</div>
          <div className="text-[13px]"> Choose Price Range</div>
        </div>
        {isOpen ? (
          <RiArrowUpSLine className='dropdown-icon-secondary' />
        ) : (
          <RiArrowDownSLine
            className='dropdown-icon-secondary' />
        )}
      </Menu.Button>
      <Menu.Items className="dropdown-menu">
        {prices.map((price, index) => {
          return (

            <Menu.Item
              onClick={() => setPrice(price.value)}
              className="cursor-pointer hover:text-violet-700 transition" as='li' key={index}>

              {price.value}
            </Menu.Item>
          )
        })}
      </Menu.Items>
    </Menu >)

};

export default PriceRangeDropdown;
