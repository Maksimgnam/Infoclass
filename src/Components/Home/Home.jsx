import React from 'react'

const Home = () => {
    return (
        <div className='Container'>
            <div className='w-5/6 h-5/6  rounded-xl flex flex-wrap  justify-around  '>
                <div className='w-5/12 h-full text-black bg-emerald-500 rounded-xl flex items-center justify-center '>
                    Image


                </div>

                <div className='w-6/12 h-full pt-6 '>
                    <h1 className='text-3xl font-mono'>Інформатичний клас</h1>
                    <div className='w-4/5 h-3/6 pt-6'>
                        <p className='text-md font-mono'>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis excepturi hic vero quod necessitatibus reiciendis architecto harum voluptates cumque eum eligendi quo explicabo voluptate, at dolores repellendus fugiat dolorem id.
                            ipsum dolor, sit amet consectetur adipisicing elit.  ipsum dolor, sit amet consectetur adipisicing eli Perspiciatis excepturi hic vero quod necessitatibus reiciendis architecto harum voluptates cumque eum eligendi quo explicabo voluptate, at dolores repellen
                        </p>

                    </div>
                    <h3 className='text-xl font-mono'>Ще фото класу:</h3>

                    <div className='w-full h-48 flex items-center '>
                        <div className='w-44 h-40 text-black bg-emerald-500 rounded-xl flex items-center justify-center m-3 ml-0 mt-1'>
                            Image
                        </div>
                        <div className='w-44 h-40 text-black bg-emerald-500 rounded-xl flex items-center justify-center m-3 ml-0 mt-1'>
                            Image
                        </div>




                    </div>


                </div>
            </div>
        </div>
    )
}

export default Home