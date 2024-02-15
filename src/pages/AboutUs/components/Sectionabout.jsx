import React from 'react';
import ImageAbout from "../../../assets/image/heading-pages-06.jpg";
import ImageAboutSc2 from "../../../assets/image/banner-14.jpg";

export const Sectionabout = () => {
    return (
        <>
        <section className="py-20 gap-3">
            <div className="relative h-[400px]" style={{ backgroundImage: `url(${ImageAbout})`, backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition: "center" }}>
                <h1 className='absolute top-[40%] left-[40%]  text-white text-7xl font-semibold'>ABOUT</h1>
            </div>
            <div className="py-28 px-10">

            <div className="container ">
<div className=" row  ">
    <img className="col-md-4 gap-1 " src={ImageAboutSc2} alt=""/>
    <div className=" col-md-8 w-[100%] justify-between flex flex-col ">
        <h2 className=" text-3xl font-bold tracking-tight text-gray-900 dark:text-white">Our Story</h2>
        <p className=" font-normal text-gray-700 dark:text-gray-400">Phasellus egestas nisi nisi, lobortis ultricies risus semper nec. Vestibulum pharetra ac ante ut pellentesque. Curabitur fringilla dolor quis lorem accumsan, vitae molestie urna dapibus. Pellentesque porta est ac neque bibendum viverra. Vivamus lobortis magna ut interdum laoreet. Donec gravida lorem elit, quis condimentum ex semper sit amet. Fusce eget ligula magna. Aliquam aliquam imperdiet sodales. Ut fringilla turpis in vehicula vehicula. Pellentesque congue ac orci ut gravida. Aliquam erat volutpat. Donec iaculis lectus a arcu facilisis, eu sodales lectus sagittis. Etiam pellentesque, magna vel dictum rutrum, neque justo eleifend elit, vel tincidunt erat arcu ut sem. Sed rutrum, turpis ut commodo efficitur, quam velit convallis ipsum, et maximus enim ligula ac ligula. Vivamus tristique vulputate ultricies. Sed vitae ultrices orci.</p>
    <div className="border-3 border-end-0 border-top-0 border-bottom-0 border-gray-500  px-3 ">
        <p>Creativity is just connecting things. When you ask creative people how they did something, they feel a little guilty because they didn't really do it, they just saw something. It seemed obvious to them after a while.
</p>
<p>- Steve Job’s</p>
    </div>
    </div>
</div>
            </div>
            </div>
        </section>

        </>
    );
};

