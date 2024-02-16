import React from 'react';
import { useNavigate } from 'react-router-dom';

export const SectionAuth = () => {
    const navigate = useNavigate();
    return (
        <>
            <section className=' py-20'>
            <section className='banner2  h-fit p-9 ' >
            <div className="container ">
                <div className="row">
                    <div className="col-sm-10 col-md-8 col-lg-6 m-l-r-auto p-t-15 p-b-15 "  >
                        

<div className="w-fit  p-6 bg-white border ">
    <div >
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">New Customer</h5>
    </div>
    <p>Register Account</p>
    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">By creating an account you will be able to shop faster, be up to date on an order's status, and keep track of the orders you have previously made.</p>
    <div  className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-black  focus:ring-4 focus:outline-none focus:ring-blue-300 ">
        CONTINUE
    </div>
</div>

                    </div>
                    <div className="col-sm-10 col-md-8 col-lg-6 m-l-r-auto p-t-15 p-b-15">
                        <div className="w-fit  flex flex-col items-center justify-end" >
                        <div className="w-[500px]  p-6 bg-white border ">
    <div >
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Returning Customer</h5>
    </div>
    <p>I am a returning customer</p>


    <form class="w-fit">
  <div class="mb-5">
    <labe  for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</labe>
    <input type="email" id="email" class=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[400px] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@flowbite.com" required />
  </div>
  <div class="mb-5">
    <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
    <input type="password" id="password" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
  </div>
  <div class="flex items-start mb-5">
    <div class="flex items-center h-5">
      <input id="remember" type="checkbox" value="" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required />
    </div>
    <label for="remember" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Remember me</label>
  </div>
  <div className="flex items-center gap-3">
  <button type="submit" class="text-white bg-black  focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium  text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">SIGN IN</button>
<p className='text-center' onClick={() => { navigate(`/`) }}>or Return to Store</p>
  </div>
</form>
</div>

                        </div>
                    </div>
                </div>
            </div>

        </section>

            </section>
        </>
    );
};

