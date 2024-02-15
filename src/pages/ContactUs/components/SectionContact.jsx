import React from 'react';
import ImageBlog from "../../../assets/image/heading-pages-06.jpg";

export const SectionContact = () => {
    return (
        <>
                     <section className="py-20 gap-3">
          <div className="relative h-[400px]" style={{ backgroundImage: `url(${ImageBlog})`, backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition: "center" }}>
                <h1 className='absolute top-[40%] left-[40%]  text-white lg-text-7xl font-semibold'>CONTACT</h1>
            </div>
            <div className="lg:py-20 py-10 py-15 lg:px-10">
            <div className="container ">
<div className=" row  ">
    <div className="col-md-4 ">
    <iframe
    src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d26587.350077867548!2d-7.517713366796879!3d33.59443762730742!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sfr!2sma!4v1707919792424!5m2!1sfr!2sma"
    width={410}
    height={500}
    style={{ border: 0 }}
    allowFullScreen=""
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
  />    
  </div>
    <div className=" col-md-8 ">
    <form className="max-w-md mx-auto">
    <h2 className="pb-8 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Send us your message</h2>
  <div className="relative z-0 w-full mb-5 group">
      <input type="text" name="floating_email" id="floating_email" className="block  p-2 w-full text-sm text-gray-900  border-1 border-start-1 border-end-1 border-top-0 border-gray-600 bg-transparent appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
      <label for="floating_email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-2 left-2 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Name</label>
  </div>
  <div className="relative z-0 w-full mb-5 group">
      <input type="email" name="floating_password" id="floating_password" className="block  p-2 w-full text-sm text-gray-900  border-1 border-start-1 border-end-1 border-top-0 border-gray-600 bg-transparent appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
      <label for="floating_password" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-2 left-2 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email</label>
  </div>
  <div className="relative z-0 w-full mb-5 group">
      <input type="number" name="repeat_password" id="floating_repeat_password" className="block  p-2 w-full text-sm text-gray-900  border-1 border-start-1 border-end-1 border-top-0 border-gray-600 bg-transparent appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
      <label for="floating_repeat_password" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-2 left-2 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Phone</label>
  </div>
  <div className="relative z-0 w-full mb-5 group">
      <textarea type="text" name="repeat_password" id="floating_repeat_password" className="block  p-2 w-full text-sm text-gray-900  border-1 border-start-1 border-end-1 border-top-0 border-gray-600 bg-transparent appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
      <label for="floating_repeat_password" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-2 left-2 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Message</label>
  </div>
  <button className=' rounded-3xl bg-black text-white px-10 py-2'>SEND</button>
</form>

    </div>
</div>
            </div>
            </div>
            </section>  
 
        </>
    );
};

