import React from 'react';
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin, FaTwitch, FaTwitter } from "react-icons/fa";

export const Footer = () => {
    return (
        <>


            <footer className="bg-gray-100 dark:bg-gray-900">
                <div className="mx-auto w-full max-w-screen-xl">
                    <div className="grid grid-cols-2 gap-8 px-4 py-6 lg:py-8 md:grid-cols-5">
                        <div className='w-[100%]'>
                            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">GET IN TOUCH</h2>
                            <ul className="text-gray-500 dark:text-gray-400 font-medium pl-0">
                                <li className="mb-4">
                                    <div className=" hover:underline">Any questions? Let us know in store at 8th floor, 379 Hudson St, New York, NY 10018 or call us on (+1) 96 716 6879</div>
                                </li>
                                <li className="mb-3">
                                    <div className="hover:underline flex justify-between w-[70%]">
                                        <FaInstagram />
                                        <FaFacebook />
                                        <FaTwitter />
                                        <FaGithub />
                                        <FaLinkedin />
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">CATEGORIES</h2>
                            <ul className="text-gray-500 dark:text-gray-400 font-medium pl-0">
                                <li className="mb-4">
                                    <div className="hover:underline">Man</div>
                                </li>
                                <li className="mb-4">
                                    <div className="hover:underline">Women</div>
                                </li>
                                <li className="mb-4">
                                    <div className="hover:underline">Dresses</div>
                                </li>
                                <li className="mb-4">
                                    <div className="hover:underline">Sunglasses</div>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">LINKS</h2>
                            <ul className="text-gray-500 dark:text-gray-400 font-medium pl-0">
                                <li className="mb-4">
                                    <div className="hover:underline">Search</div>
                                </li>
                                <li className="mb-4">
                                    <div className="hover:underline">About Us</div>
                                </li>
                                <li className="mb-4">
                                    <div className="hover:underline">Contact Us</div>
                                </li>
                                <li className="mb-4">
                                    <div className="hover:underline">Returns</div>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">HELP</h2>
                            <ul className="text-gray-500 dark:text-gray-400 font-medium pl-0">
                                <li className="mb-4">
                                    <div className="hover:underline">Track Order</div>
                                </li>
                                <li className="mb-4">
                                    <div className="hover:underline">Returns</div>
                                </li>
                                <li className="mb-4">
                                    <div className="hover:underline">Shipping</div>
                                </li>
                                <li className="mb-4">
                                    <div className="hover:underline">FAQs</div>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">NEWSLETTER</h2>
                            <ul className="text-gray-500 dark:text-gray-400 font-medium pl-0">
                                <li className="mb-4">
                                    <form class="max-w-md mx-auto">
                                        <div class="relative z-0 w-full mb-3 group">
                                            <input type="email" name="floating_email" id="floating_email" className="block  p-2 w-full text-sm text-gray-900  border-1 border-start-0 border-end-0 border-top-0 border-black bg-transparent appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                                            <label for="floating_email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-2 left-1 z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email address</label>
                                        </div>
                                        <li className="mb-4">
                                            <button className=' rounded-3xl bg-black text-white px-4 py-2'>SUBSCRIBE</button>
                                        </li>
                                    </form>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="px-4 py-6 bg-gray-100 dark:bg-gray-700 flex justify-center ">
                        <span className="text-sm text-gray-500 dark:text-gray-300 sm:text-center">Copyright © 2022 Shopify Theme Developed by MassTechnologist All rights reserved.
                        </span>
                    </div>
                </div>
            </footer>
        </>
    );
};

