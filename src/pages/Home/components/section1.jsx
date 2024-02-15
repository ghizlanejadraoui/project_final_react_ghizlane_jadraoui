import React from 'react';
import './section1.scss'
import { Carousel, Typography, Button } from "@material-tailwind/react";
import slide1 from "../../../assets/image/master-slide-01.jpg";
import slide2 from "../../../assets/image/master-slide-02.jpg";
import slide3 from "../../../assets/image/master-slide-03.jpg";
import item1 from "../../../assets/image/item-01.jpg";
import item2 from "../../../assets/image/banner-02.jpg";
import item3 from "../../../assets/image/item-03.jpg";
import item4 from "../../../assets/image/shop-item-09.jpg";
import item5 from "../../../assets/image/banner-03.jpg";
import item6 from "../../../assets/image/banner-05.jpg";
import item7 from "../../../assets/image/banner-07.jpg";
import item8 from "../../../assets/image/banner-09.jpg";
import item9 from "../../../assets/image/banner-08.jpg";
import blog8 from "../../../assets/image/blog-08.jpg";
import blog2 from "../../../assets/image/blog-02.jpg";
import blog3 from "../../../assets/image/blog-03.jpg";


export const FirstSectionHome = () => {

    return (
        <>
        {/* section carousel */}
        <section className='py-20'>
        <Carousel className="h-[700px]">
      <div className="relative h-full w-full">
        <img
          src={slide3}
          alt="image 1"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/30">
          <div className="w-3/4 text-center md:w-2/4">
            <Typography
              variant="lead"
              color="white"
              className="mb-12 opacity-80"
            >
              Women Collection 2024
            </Typography>
            <Typography
              variant="h1"
              color="white"
              className="mb-4 text-3xl md:text-4xl lg:text-5xl"
            >
              NEW ARRIVALES
            </Typography>
            <div className="flex justify-center">
              <Button className='rounded-3xl' size="lg" color="white">
                SHOP NOW
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="relative text-center h-full w-full">
        <img
          src={slide2}
          alt="image 2"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/30">
          <div className="w-3/4 text-center md:w-2/4">
            <Typography
              variant="lead"
              color="white"
              className="mb-12 opacity-80"
            >
              Women Collection 2024
            </Typography>
            <Typography
              variant="h1"
              color="white"
              className="mb-4 text-3xl md:text-4xl lg:text-5xl"
            >
              NEW ARRIVALES
            </Typography>
            <div className="flex justify-center ">
              <Button className='rounded-3xl' size="lg" color="white">
                SHOP NOW
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="relative h-full w-full">
        <img
          src={slide1}
          alt="image 3"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/30">
          <div className="w-3/4 text-center md:w-2/4">
            <Typography
              variant="lead"
              color="white"
              className="mb-12 opacity-80"
            >
              Women Collection 2024
            </Typography>
            <Typography
              variant="h1"
              color="white"
              className="mb-4 text-3xl md:text-4xl lg:text-5xl"
            >
              NEW ARRIVALES
            </Typography>
            <div className="flex justify-center ">
              <Button className='rounded-3xl' size="lg" color="white">
                SHOP NOW
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Carousel>
        </section>
        {/* fin section carousel */}
        <section className='lg:px-20 lg:pb-10'>
        <div className="row row-cols-1 row-cols-md-3 g-4">
  <div className="col">
    <div className="card">
        <div classNameName="relative">
      <img src={item2} className="card-img-top" />
        </div>
      <div className="absolute bottom-6 left-[25%] bg-white/80 py-3 px-5  ">
        <button classNameName='bg-white py-3 px-5 '>DRESSES</button>
      </div>
    </div>
  </div>
  <div className="col-2">
  <div className="card">
        <div classNameName="">
      <img src={item5} className="card-img-top" />
        </div>
      <div className="absolute bottom-6 left-[25%] bg-white py-3 px-5 ">
        <button classNameName='bg-white/90 py-3 px-5 '>WATCHES</button>
      </div>
    </div>
  </div>
  <div className="col">
  <div className="card">
        <div classNameName="">
      <img src={item1} className="card-img-top" />
        </div>
      <div className="absolute bottom-6 left-[25%] bg-white/80 py-3 px-5 ">
        <button classNameName='bg-white/90 py-3 px-5 '>BAGS</button>
      </div>
    </div>
  </div>
  <div className="col">
  <div className="card">
        <div classNameName=" ">
      <img src={item6} className="card-img-top" />
        </div>
      <div className="absolute bottom-6 left-[25%] bg-white/80 py-3 px-5  ">
        <button classNameName='bg-white/90 py-3 px-5 '>SUNGLASSES</button>
      </div>
    </div>
  </div>
  <div className="col  ">
  <div className="card ">
        <div classNameName=" ">
      <img src={item7} className="card-img-top" />
        </div>
      <div className="absolute bottom-6 left-[25%] bg-white/80 py-3 px-5 ">
        <button classNameName='bg-white/90 py-3 px-5 '>FOOTERWEAR</button>
      </div>
    </div>
  </div>
  <div className="col">
  <div className="card">
        <div classNameName=" ">
      <img src={item8} className="card-img-top" />
        </div>
      <div className="absolute bottom-6 left-[25%] bg-white/80 py-3 px-5 ">
        <button classNameName='bg-white/90 py-3 px-5 '>ACCESSORIES</button>
      </div>
    </div>
  </div>
</div>
        </section>
        {/* fin dection 2 */}
        {/** <section className='h-[400px]'> 
        
        </section> */}
        {/* section 3 mazal mdrthache */}
        <section className='bg-gray-100 h-[500px] p-9 ' >
            <div className="container ">
                <div className="row ">
                    <div className="col-6 "  >
                        <div className="w-[100%] h-[400px] flex flex-col items-center justify-center text-white" style={{ backgroundImage: `url(${item9})`, backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition: "center" }}>
                        <h4>The beauty</h4>
                        <h1>LOOKBOOK</h1>
                        <p>VIEW COLLECTION</p>
                        </div>
                    </div>
                    <div className="col-6 bg-white ">
                        <div className="w-[100%] h-[400px] flex flex-col items-center justify-end" style={{ backgroundImage: `url(${item4})`, backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition: "center" }}>
                            <p>Boxy2 T-Shirt with Roll Sleeve</p>
                        <p>$20.00</p>
                        {/* <div className="flex gap-2 pb-3">
                            <div className="flex flex-col py-1 px-4 border ">
                                <p>-1785</p>
                                <p>Days</p>
                            </div>
                            <div className="flex flex-col py-1 px-4 border ">
                            <p>-1785</p>
                                <p>Days</p>
                            </div>
                            <div className="flex flex-col py-1 px-4 border ">
                            <p>-1785</p>
                                <p>Days</p>
                            </div>
                            <div className="flex flex-col py-1 px-4 border ">
                            <p>-1785</p>
                                <p>Days</p>
                            </div>
                        </div> */}

                        </div>
                    </div>
                </div>
            </div>

        </section>
        {/* fin section 4 */}
        <section className='banner2 p-5 gap-3 pt-55 pb-55'>
  <h1 className='text-center pb-3 font-bold text-3xl'>OUR BLOG</h1>
<div className="flex flex-wrap justify-evenly">
<div className="max-w-sm bg-white flex flex-col gap-3 ">
    <div >
        <img className="" src={blog8} alt="" />
    </div>
    <div className="flex flex-col justify-evenly">
        <h5 className="mb-2 text-2xl tracking-tight text-gray-900 dark:text-white">Black Friday Guide: Best Sales & Discount Codes</h5>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">by fashe-theme Admin on Dec 28,2017.</p>
        <p  className="inline-flex items-center  py-2 text-sm font-medium ">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sed turpis sed lorem dignissim vulputate nec cursus ante. Nunc sit...        </p>
    </div>
</div>
<div className="max-w-sm bg-white flex flex-col gap-3">
    <div >
        <img className="" src={blog2} alt="" />
    </div>
    <div className="flex flex-col justify-evenly">
        <h5 className="mb-2 text-2xl tracking-tight text-gray-900 dark:text-white">The White Sneakers Nearly Every Fashion Girls Own</h5>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">by fashe-theme Admin on Dec 28,2017.</p>
        <p  className="inline-flex items-center  py-2 text-sm font-medium ">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sed turpis sed lorem dignissim vulputate nec cursus ante. Nunc sit...        </p>
    </div>
</div>
<div className="max-w-sm bg-white flex flex-col gap-3">
    <div >
        <img className="" src={blog3} alt="" />
    </div>
    <div className="flex flex-col justify-evenly">
        <h5 className="mb-2 text-2xl  tracking-tight text-gray-900 dark:text-white">New York SS 2018 Street Style: By Annina Mislin</h5>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">by fashe-theme Admin on Dec 28,2017.</p>
        <p  className="inline-flex items-center  py-2 text-sm font-medium ">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sed turpis sed lorem dignissim vulputate nec cursus ante. Nunc sit...        </p>
    </div>
</div>
</div>
        </section>
        {/* fin section 5 */}
        <section className='p-20 flex flex-col justify-between lg:h-[400px] h-[600px]'>
        <h1 className='text-center pb-3 font-bold text-3xl'>@ FOLLOW US ON INSTAGRAM</h1>
<div className="flex flex-wrap justify-evenly">
<div className="max-w-sm bg-white flex flex-col gap-3 ">
    <div className="flex flex-col justify-evenly ">
        <p className="mb-3  text-gray-700 dark:text-gray-400 font-medium text-center">Free Delivery Worldwide.</p>
        <i  className="inline-flex items-center  py-2 text-sm  ">
        Mirum est notare quam littera gothica        
        </i>
    </div>
</div>
<div className="max-w-sm bg-white flex flex-col gap-3">
    <div className="flex flex-col justify-evenly border-3 lg:border-end-0 border-top-0 border-bottom-0 border-gray-500  px-3 lg:px-5">
        <p className="mb-3  text-gray-700 dark:text-gray-400 font-medium text-center">Free Delivery Worldwide.</p>
        <i  className="inline-flex items-center  py-2 text-sm  ">
        Mirum est notare quam littera gothica        
        </i>
    </div>
</div>
<div className="max-w-sm bg-white flex flex-col gap-3">
    <div className="flex flex-col justify-evenly lg:border-3 border-end-0 border-top-0 border-bottom-0 border-gray-500 px-3 lg:px-5">
        <p className="mb-3  text-gray-700 dark:text-gray-400 font-medium text-center">Free Delivery Worldwide.</p>
        <i  className="inline-flex items-center text-gray-700  py-2 text-sm  ">
        Mirum est notare quam littera gothica        
        </i>
    </div>
</div>
</div>
        </section>
        </>
    )
}
