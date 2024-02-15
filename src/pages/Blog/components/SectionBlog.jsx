import React from 'react';
import ImageBlog from "../../../assets/image/heading-pages-05.jpg";
import ImageBlogSC from "../../../assets/image/blog-01.jpg";
import ImageBlogSC2 from "../../../assets/image/blog-02.jpg";
import Item1 from "../../../assets/image/item-15.jpg";
import Item2 from "../../../assets/image/item-13.jpg";
import Item3 from "../../../assets/image/item-04.jpg";
import Item4 from "../../../assets/image/item-12.jpg";
import Item5 from "../../../assets/image/item-16.jpg";

export const SectionBlog = () => {
    return (
        <>
          <section className='py-20'>
          <div className="relative h-[400px]" style={{ backgroundImage: `url(${ImageBlog})`, backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition: "center" }}>
                <h1 className='absolute top-[40%] left-[40%]  text-white text-7xl font-semibold'>NEWS</h1>
            </div>
<div className=" py-10">
<div className="container">
    <div className="row">
        <div className="col-md-8 col-lg-9 ">
            <div className=" ">

<div className=" bg-white">
    <div >
        <img className="w-full" src={ImageBlogSC} alt="" />
    </div>
    <div className="p-5">
        <div >
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Black Friday Guide: Best Sales & Discount Codes </h5>
        </div>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">by fashe-theme Admin |
crafts, street style |
1 Comments</p>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sed turpis sed lorem dignissim vulputate nec cursus ante. Nunc sit...</p>
        <div  className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-gray-900   cursor-pointer">
        Continue Reading
             <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
        </div>
    </div>
</div>
<div className=" bg-white">
    <div >
        <img className="w-full" src={ImageBlogSC2} alt="" />
    </div>
    <div className="p-5">
        <div >
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Black Friday Guide: Best Sales & Discount Codes </h5>
        </div>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">by fashe-theme Admin |
crafts, street style |
1 Comments</p>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sed turpis sed lorem dignissim vulputate nec cursus ante. Nunc sit...</p>
        <div  className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-gray-900   cursor-pointer">
        Continue Reading
             <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
        </div>
    </div>
</div>
            </div>

        </div>
        <div className="col-md-4 col-lg-3 ">
            <div className='py-4'>
                <input type="search" className='rounded-3xl border-gray-400 focus:none appearance-none focus:outline-none focus:ring-0 focus:border-gray-300 w-[95%] ' placeholder='Search all articles...' />
            </div>
            {/* sec2 */}
            

<div className="w-full max-w-md p-4 bg-white   ">
    <div className="flex items-center justify-between mb-4">
        <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">Latest Customers</h5>
   </div>
   <div className="flow-root">
        <ul role="list" className="px-0 ">
            <li className="py-1 gap-2 sm:py-4">
                <div className="flex items-center gap-3">
                    <div className="flex-shrink-0">
                        <img className="w-80px h-[90px]" src={Item1} alt="Neil image"/>
                    </div>
                    <div className="flex flex-col ">
                        <p className="text-sm font-medium text-gray-900  dark:text-white">
                        Boxy7 T-Shirt with Roll Sleeve
                        </p>
                        <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                        $20.00
                        </p>
                    </div>
                </div>
            </li>
            <li className="py-3  sm:py-4">
                <div className="flex items-center gap-2">
                <div className="flex-shrink-0">
                        <img className="w-80px h-[90px]" src={Item2} alt="Neil image"/>
                    </div>
                    <div className="flex flex-col ">
                        <p className="text-sm font-medium text-gray-900  dark:text-white">
                        Boxy6 T-Shirt with Roll Sleeve
                        </p>
                        <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                        $20.00
                        </p>
                    </div>
                </div>
            </li>
            <li className="py-3 sm:py-4">
                <div className="flex items-center gap-2">
                <div className="flex-shrink-0">
                        <img className="w-80px h-[90px]" src={Item3} alt="Neil image"/>
                    </div>
                    <div className="flex flex-col ">
                        <p className="text-sm font-medium text-gray-900  dark:text-white">
                        Boxy5 T-Shirt with Roll Sleeve
                        </p>
                        <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                        $20.00
                        </p>
                    </div>
                </div>
            </li>
            <li className="py-3 sm:py-4 ">
                <div className="flex items-center gap-2">
                <div className="flex-shrink-0">
                        <img className="w-80px h-[90px]" src={Item4} alt="Neil image"/>
                    </div>
                    <div className="flex flex-col ">
                        <p className="text-sm font-medium text-gray-900  dark:text-white">
                        Boxy4 T-Shirt with Roll Sleeve
                        </p>
                        <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                        $20.00
                        </p>
                    </div>
                </div>
            </li>
            <li className="pt-3 pb-0 sm:pt-4">
                <div className="flex items-center gap-2 ">
                <div className="flex-shrink-0">
                        <img className="w-80px h-[90px]" src={Item5} alt="Neil image"/>
                    </div>
                    <div className="flex flex-col ">
                        <p className="text-sm font-medium text-gray-900  dark:text-white">
                        Boxy3 T-Shirt with Roll Sleeve
                        </p>
                        <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                        $20.00
                        </p>
                    </div>
                </div>
            </li>
        </ul>
   </div>
</div>

            {/*  */}
        </div>
    </div>
</div>
</div>
            </section>  
        </>
    );
};

