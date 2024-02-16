import React, { useContext, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

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
import { MyContext } from '../../../utils/ContextProvider';
import { useCart } from 'react-use-cart';

export const SectionShow = () => {
    const navigate = useNavigate()
    const { id } = useParams()
    const [marketPlaceDataBase, setMarketPlaceDataBase] = useContext(MyContext)
    const [newData, setNewData] = useState(marketPlaceDataBase)
    const filter = newData.filter((newData) => newData.title == id)
    console.log(newData);
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(!open);
    // const {addItem}= useState();
    const { addItem } = useCart();
    return (
        <>
        <section className='p-20'>

        <div className=' container p-10'>
          <div className=' flex items-center p-25'>{
            filter.map((element, index) =>
              <Card className="w-full max-w-[90rem] flex-row">
                <CardHeader
                  shadow={false}
                  floated={false}
                  className="m-0 w-2/5 shrink-0 rounded-r-none"
                >
                  <img
                    src={element.image}
                    alt="card-image"
                    className="h-full w-full object-cover"
                  />
                </CardHeader>
                <CardBody>
                  <Typography variant="h6" color="gray" className="mb-4 uppercase">
                    {element.username}
                  </Typography>
                  <div className='flex  justify-between'>

                    <Typography variant="h4" color="blue-gray" className="mb-2" >
                      {element.title}

                    </Typography>
                    <Typography
                      color="blue-gray"
                      className="flex items-center gap-1.5 font-normal"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="-mt-0.5 h-5 w-5 text-yellow-700"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                          clipRule="evenodd"
                        />
                      </svg>
                      5.0
                    </Typography>
                  </div>
                  <Typography variant="h4" color="gray" className="mb-4 uppercase">
                    ${element.price}
                  </Typography>

                  <Typography color="gray" className="mb-8 font-normal">{element.description}
                  </Typography>
                  <Typography color="gray" className="mb-8 font-normal">
                    <label htmlFor="">Qté :</label>
                    <p className='border-none decoration-none input:border-red-100 ' name="Number" id="">
                      {/* <option value="">{element.qte}</option> */}
                      <div className="flex gap-2 text-white items-center" key={index}>
                      <button  className='bg-yellow-300 w-[30px] h-[30px]'>-</button>
          <button  className='bg-green-500 w-[30px] h-[30px]'>+</button>
          <button  className='text-black'>{element.quantity} </button>
        </div>

                    </p>
                  </Typography>
                  <div className='flex pb-4 justify-between w-[50%] '>
                    <div className=" w-[90px] h-[90px] ">                  
                    <img
                      src={element.image}
                      alt="card-image"
                      className="h-full w-full object-cover rounded-lg hover:shadow-2xl"
                    />
                    </div>
                    <div className=" w-[90px] h-[90px]">
                      <img
                      src={element.image}
                      alt="card-image"
                      className="h-full w-full object-cover rounded-lg hover:shadow-2xl"
                    /></div>
                    <div className=" w-[90px] h-[90px] ">
                      <img
                    src={element.image}
                    alt="card-image"
                    className="h-full w-full object-cover rounded-lg hover:shadow-2xl"
                  /></div>

                  </div>
                  <div className="inline-block" key={element.id}>
                    <Button onClick={()=> addItem(element)} variant="gradient" key={element.id}>
                      Add To Card
                    </Button>
                  </div>
                </CardBody>
              </Card>
            )
          }

            {/* modal */}
            <div>

              <Dialog open={open} handler={handleOpen}>
                <DialogHeader>Its a simple dialog.</DialogHeader>
                <DialogBody>
                  <form action="" className='flex flex-col justify-evenly'>
                    <label htmlFor="">Name :</label>
                    <input className='rounded' type="text" />
                    <label htmlFor="">Email :</label>
                    <input className='rounded' type="text" />
                    <label htmlFor="">Adresse :</label>
                    <input className='rounded' type="text" />
                    <label htmlFor="">Number Phone :</label>
                    <input className='rounded' type="text" />
                  </form>
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


          </div>



        </div>
        </section>
        {/* section 2 */}
        <section>


        </section>

        </>
    );
};

