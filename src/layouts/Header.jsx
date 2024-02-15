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


export const Header = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(!open);
  const { 
    isEmpty,
    totalUniqueItems,
    items,
    totalItems,
    cartTotal,
    updateItemQuantity,
    removeItem,
    emptyCart, } = useState();
    if(isEmpty) return <h1 className='text-center'>Your cart is Empty</h1>
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
                  <Dialog open={open} handler={handleOpen}>
                    <DialogHeader>Its a simple dialog.</DialogHeader>
                    <DialogBody>
                      {/* <form action="" className='flex flex-col justify-evenly'>
                        <label htmlFor="">Name :</label>
                        <input className='rounded' type="text" />
                        <label htmlFor="">Email :</label>
                        <input className='rounded' type="text" />
                        <label htmlFor="">Adresse :</label>
                        <input className='rounded' type="text" />
                        <label htmlFor="">Number Phone :</label>
                        <input className='rounded' type="text" />
                      </form> */}
                      {/* <div>{items.map((element,index)=>{
                        return(
                        <div key={index} className="">
                          <img src={element.image} alt="" />
                          <p>{element.tille}</p>
                          <p>{element.price}</p>
                        </div>
                        )
                      }
                      )}

                      </div> */}
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

