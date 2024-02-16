import React, { useState } from 'react';
import { RiShoppingBagLine } from "react-icons/ri";
import { ImUser } from "react-icons/im";
import { Link } from 'react-router-dom';

import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
} from "@material-tailwind/react";
import {
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import { useCart } from 'react-use-cart';


export const Header = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(!open);
  const {
    isEmpty,
    totalUniqueItems,
    totalItems,
    totalPrice,
    items,
    updateItemQuantity,
    removeItem,
  } = useCart();
  const icon = {
    hidden: {
      pathLength: 0,
      fill: "rgba(255, 255, 255, 0)"
    },
    visible: {
      pathLength: 1,
      fill: "rgba(255, 255, 255, 1)"
    }
  }
  return (
    <>
      <nav className=" shadow-[rgba(0,0,10,0.2)_5px_5px_4px_0px] fixed w-full z-10 bg-white">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-1 ">
          <div className="flex items-center space-x-3 rtl:space-x-reverse">
            <span className="self-center text-4xl font-semibold whitespace-nowrap dark:text-white">Store</span>
          </div>
          <div className="flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <button type="button" className="flex text-sm  rounded-full md:me-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600" id="user-menu-button" aria-expanded="false" data-dropdown-toggle="user-dropdown" data-dropdown-placement="bottom">
              <span className="sr-only">Open user menu</span>
              <div className='flex gap-4 text-2xl'>
                <ImUser />
                <button onClick={handleOpen} variant="gradient" data-modal-target="default-modal" data-modal-toggle="default-modal" class="block" type="button">
                  <RiShoppingBagLine />
                </button>

                {/*  */}
                {/* modal */}
                <div>
                  <Dialog className='overflow-y-scroll ' open={open} handler={handleOpen}>
                    <DialogHeader>Your Products </DialogHeader>
                    <DialogBody>
                      <h1 className='text-sm'>Product ({totalUniqueItems}) Quantity:({totalItems}) </h1>
<ul>
  {items.map((element) => {
    return(
<section className='py-2 container'>
  <div className="row justify-evenly">
    <div className="col-12">
      {/* <h5>Cart ({totalUniqueItems}) Total : ({totalItems})</h5> */}
      <div className='border h-[200px]  ' key={element.id}>
        <div className="flex    p-3 w-[100%]">
        <div className="  ">
           <img src={element.image} className='w-[50%] h-full' alt="" />
        </div >
        <div className=" flex flex-col justify-evenly w-[100%]">
             <p>{element.title}</p>
       <p>$ {element.price}</p>
       <p> Quantity : {element.quantity}</p>
        <div className="flex gap-2 text-white items-center">
          <button onClick={() => updateItemQuantity(element.id, element.quantity - 1 )} className='bg-yellow-300 w-[30px] h-[30px]'>-</button>
          <button onClick={() => updateItemQuantity(element.id, element.quantity + 1)} className='bg-green-500 w-[30px] h-[30px]'>+</button>
          <button onClick={() => removeItem(element.id)} className='bg-red-600 px-3 h-[4.6vh]'>Remove</button>
        </div>
        </div>

        </div>


      </div>
    </div>
  </div>
{/* <div className="">
Prix Total : {((element)=>(element.aprice*element.quantity),0)}
</div> */}
</section>
    
    );
  })}
</ul>

                    </DialogBody>
                    <DialogFooter>
                      <Button
                        variant="text"
                        color="red"
                        onClick={handleOpen}
                        className="mr-1"
                      >
                        <span>Cancel</span>
                      </Button>
                      <Button variant="gradient" color="green" onClick={handleOpen}>
                        <span>Confirm</span>
                      </Button>
                    </DialogFooter>
                  </Dialog>
                </div>

                {/*  */}

              </div>
            </button>
            <div className="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg " id="user-dropdown">
              <div className="px-4 py-3 ">
                <span className="block text-sm text-gray-900 dark:text-white">Bonnie Green</span>
              </div>
              <ul className="py-2" aria-labelledby="user-menu-button">
                <li>
                  <span className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Dashboard</span>
                </li>
                <li>
                  <span className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Settings</span>
                </li>
                <li>
                  <span className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Earnings</span>
                </li>
                <li>
                  <span className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Sign out</span>
                </li>
              </ul>
            </div>
            <button data-collapse-toggle="navbar-user" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-user" aria-expanded="false">
              <span className="sr-only">Open main menu</span>
              <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
              </svg>
            </button>
          </div>

          <div className=" items-center justify-between hidden w-full md:flex md:w-auto md:h-auto md:order-1" id="navbar-user">
            <ul className="flex flex-col  font-medium  mt-3  lg:flex-row items-center underline-none decoration-none">
              <li>
                <Link className="block py-2 px-3 text-gray-900 bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500" aria-current="page" to={"/"}>Home</Link>
              </li>
              <li>
                <Link to={"/shop"} className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Shop</Link>
              </li>
              <li>
                <Link to={"/blog"} className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Blog</Link>
              </li>
              <div className='underline-none decoration-none'>
                <Link to={"/about"} className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">About</Link>
              </div>
              <li>
                <Link to={"/contact"} className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Contact</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

