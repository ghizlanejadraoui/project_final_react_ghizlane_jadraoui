import React, { useContext, useState } from 'react';
import ImageBlog from "../../../assets/image/carouse1_cap.png";
import { MyContext } from '../../../utils/ContextProvider';
import { useNavigate } from 'react-router-dom';
import { MdShoppingCartCheckout } from "react-icons/md";

export const SectionShop = () => {
    const [marketPlaceDataBase, setMarketPlaceDataBase] = useContext(MyContext)
    const navigate = useNavigate()
    // *
    const [selectedCategorie, setSelectedCategorie] = useState(``)
    const [newDataBase, setNewDataBase] = useState([])
    const handlCategorie = (e) => {
        const selectedCategory = e.target.value;

        if (selectedCategory) {
            const filteredData = marketPlaceDataBase.filter(element => element.gender.includes(element.gender));
            setMarketPlaceDataBase(filteredData);
        } 
    }

    return (
        <>
            <section>
                <div className="relative h-[400px]" style={{ backgroundImage: `url(${ImageBlog})`, backgroundRepeat: "no-repeat", backgroundSize: "container", backgroundPosition: "center" }}>
                    {/* <h1 className='absolute top-[40%] left-[40%]  text-white lg-text-7xl font-semibold'>SHOP NOW</h1> */}
                </div>
                <div className=" py-10">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-4 col-lg-3  ">
                                {/* sec2 */}
                                <div className="w-full max-w-md p-4    ">
                                    <div className="flex items-center justify-between mb-4">
                                        <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">Categories</h5>
                                    </div>
                                    <div className="flow-root">
                                        <ul role="list" className="px-0 ">
                                            <li className="py-1 gap-2">
                                                <div className="flex items-center gap-3">
                                                    <div className=" ">
                                                        <p className="text-sm font-medium text-gray-900  dark:text-white cursor-pointer" onChange={(e) => { handlCategorie(e) }}>
                                                            Best Seller (8 items)
                                                        </p>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className=" ">
                                                <div className="flex items-center gap-3">
                                                    <div className=" ">
                                                        <p className="text-sm font-medium text-gray-900  dark:text-white cursor-pointer" onChange={(e) => { handlCategorie(e) }}>
                                                            Featured (8 items)
                                                        </p>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="">
                                                <div className="flex items-center gap-3">
                                                    <div className=" ">
                                                        <p className="text-sm font-medium text-gray-900  dark:text-white cursor-pointer" onChange={(e) => { handlCategorie(e) }}>
                                                            Men (8 items)
                                                        </p>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className=" ">
                                                <div className="flex items-center  gap-3">
                                                    <div className=" ">
                                                        <p className="text-sm font-medium text-gray-900  dark:text-white cursor-pointer" onChange={(e) => { handlCategorie(e) }}>
                                                            Women (8 items)
                                                        </p>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                {/* price */}
                                <div className="w-full max-w-md p-4 bg-white   ">
                                    <div className="flex items-center justify-between mb-4">
                                        <h5 className="text-2xl font-bold leading-none text-gray-900 dark:text-white">COLOR</h5>
                                    </div>
                                    <div className="flow-root">
                                        <ul role="list" className="px-0 ">
                                            <li className="">
                                                <div className="flex items-center gap-2">
                                                    <div className="flex gap-3 ">
                                                        <input type="checkbox" name="" id="" />
                                                        <p className="text-sm font-medium text-gray-900  dark:text-white">
                                                            0-20
                                                        </p>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="">
                                                <div className="flex items-center gap-2">
                                                    <div className="flex gap-3 ">
                                                        <input type="checkbox" name="" id="" />
                                                        <p className="text-sm font-medium text-gray-900  dark:text-white">
                                                            20-40
                                                        </p>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                {/* size */}
                                <div className="w-full max-w-md p-4 bg-white   ">
                                    <div className="flex items-center justify-between mb-4">
                                        <h5 className="text-2xl font-bold leading-none text-gray-900 dark:text-white">COLOR</h5>
                                    </div>
                                    <div className="flow-root">
                                        <ul role="list" className="px-0 ">
                                            <li className="">
                                                <div className="flex items-center gap-2">
                                                    <div className="flex gap-3 ">
                                                        <input type="checkbox" name="" id="" />
                                                        <p className="text-sm font-medium text-gray-900  dark:text-white">
                                                            S
                                                        </p>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="">
                                                <div className="flex items-center gap-2">
                                                    <div className="flex gap-3 ">
                                                        <input type="checkbox" name="" id="" />
                                                        <p className="text-sm font-medium text-gray-900  dark:text-white">
                                                            M
                                                        </p>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className=" ">
                                                <div className="flex items-center gap-2">
                                                    <div className="flex gap-3 ">
                                                        <input type="checkbox" name="" id="" />
                                                        <p className="text-sm font-medium text-gray-900  dark:text-white">
                                                            XL
                                                        </p>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className=" ">
                                                <div className="flex items-center gap-2">
                                                    <div className="flex gap-3 ">
                                                        <input type="checkbox" name="" id="" />
                                                        <p className="text-sm font-medium text-gray-900  dark:text-white">
                                                            L
                                                        </p>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                {/* color */}
                                <div className="w-full max-w-md p-4 bg-white   ">
                                    <div className="flex items-center justify-between mb-4">
                                        <h5 className="text-2xl font-bold leading-none text-gray-900 dark:text-white">COLOR</h5>
                                    </div>
                                    <div className="flow-root">
                                        <ul role="list" className="px-0 ">
                                            <li className="">
                                                <div className="flex items-center gap-2">
                                                    <div className="flex gap-3 ">
                                                        <input type="checkbox" name="" id="" />
                                                        <p className="text-sm font-medium text-gray-900  dark:text-white">
                                                            Black
                                                        </p>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="">
                                                <div className="flex items-center gap-2">
                                                    <div className="flex gap-3 ">
                                                        <input type="checkbox" name="" id="" />
                                                        <p className="text-sm font-medium text-gray-900  dark:text-white">
                                                            Gray
                                                        </p>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className=" ">
                                                <div className="flex items-center gap-2">
                                                    <div className="flex gap-3 ">
                                                        <input type="checkbox" name="" id="" />
                                                        <p className="text-sm font-medium text-gray-900  dark:text-white">
                                                            Red
                                                        </p>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                {/*  INPUT */}
                                <div className='py-6'>
                                    <input type="search" className='rounded-3xl border-gray-400 focus:none appearance-none focus:outline-none focus:ring-0 focus:border-gray-300 w-[70%] ' placeholder='Search all articles...' />
                                </div>
                                {/*  */}
                            </div>
                            <div className="col-md-8 col-lg-9 ">
                                <div className=" ">
                                    <div className=" bg-white">
                                        <div className="">
                                            <section>
                                                {/*  */}
                                                <div className=" flex  flex-wrap justify-between gap-4">{
                                                    marketPlaceDataBase.map((element, index) =>
                                                        <div class="w-[250px] max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700" onClick={() => { navigate(`/shop/${element.title}`) }} key={index} element={element}>
                                                            <div>
                                                                <div className="w-full h-80" style={{ backgroundImage: `url(${element.image})`, backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition: "center" }}></div>
                                                            </div>
                                                            <div class="gap-3 p-3">
                                                                <div >
                                                                    <h5 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{element.title}</h5>
                                                                </div>
                                                                <div class="flex justify-between items-center mt-2.5 mb-2">
                                                                    <div class="flex items-center space-x-1 rtl:space-x-reverse">
                                                                        <svg class="w-2 h-2 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                                                            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                                                        </svg>
                                                                        <svg class="w-2 h-2 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                                                            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                                                        </svg>
                                                                        <svg class="w-2 h-2 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                                                            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                                                        </svg>
                                                                        <svg class="w-2 h-2 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                                                            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                                                        </svg>
                                                                        <svg class="w-2 h-2 text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                                                            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                                                        </svg>
                                                                    </div>
                                                                </div>
                                                                <div class="flex items-center justify-between">
                                                                    <span class="text-2xl font-bold text-gray-900 dark:text-white pb-3">${element.price}</span>
                                                                    <span class="text-sm  text-red-500 dark:text-white pb-3 line-through">${element.AncienPrice}</span>
                                                                    <div className='w-7 text-2xl'>
                                                                        {/* <FaShoppingCart />         */}
                                                                        <MdShoppingCartCheckout />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    )
                                                }
                                                </div>
                                            </section>

                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

            </section>
        </>
    );
};

