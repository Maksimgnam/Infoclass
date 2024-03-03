import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className='Container '>
            <div className='w-5/6 h-5/6  rounded-xl flex flex-wrap  justify-around  '>
                <div className='w-6/12 h-full pt-6  pl-6 '>
                    <div className='w-full flex'>
                        <div className='w-10 h-10  rounded-md '>
                            <img src="https://cdn-icons-png.flaticon.com/512/5390/5390264.png" alt="" />
                        </div>
                        <h1 className='text-3xl font-medium relative left-3'>Клас інформатики №2 </h1>
                    </div>
                    <div className='w-full h-3/5 pt-5'>
                        <p className='text-lg font-semibold text-gray-400'>Опис</p>
                        <p className='text-md font-medium text-gray-400'>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis excepturi hic vero quod necessitatibus reiciendis architecto harum voluptates cumque eum eligendi quo explicabo voluptate, at dolores repellendus fugiat dolorem id.
                            ipsum dolor, sit amet consectetur adipisicing elit.  ipsum dolor, sit amet consectetur adipisicing eli Perspiciatis                              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis excepturi hic vero quod necessitatibus reiciendis architecto harum voluptates cumque eum eligendi quo explicabo voluptate, at dolores repellendus fugiat dolorem id.
                            ipsum dolor, sit amet consectetur adipisicing elit.  ipsum dolor, sit amet conse excepturi hic vero quod necessitatibus reiciendis architecto harum voluptates cumque eum eligendi quo explicabo voluptate, at dolores repellen
                        </p>

                    </div>

                    <button className='w-48 h-16 bg-button  rounded-xl '>
                        <p className='text-2xl text-white font-semibold'>
                            <Link to="/news">Більше</Link> </p>

                    </button>





                </div>
                <div className='w-5/12 h-full text-black  rounded-xl flex flex-wrap   '>
                    <div className='w-60 h-72 bg-slate-100 rounded-xl m-3'>
                        <img className='w-full h-full  rounded-xl' src="https://www.innovadesigngroup.co.uk/wp-content/uploads/2017/05/Southlands-High-School-ICT.jpg" alt="" />
                    </div>
                    <div className='w-60 h-60 bg-slate-100 rounded-xl m-3'>
                        <img className='w-full h-full  rounded-xl' src="https://www.taskspace.co.uk/wp-content/uploads/2017/07/ITandICTrooms.jpg" alt="" />
                    </div>
                    <div className='w-60 h-52 bg-slate-100 rounded-xl m-3'>
                        <img className='w-full h-full  rounded-xl' src="https://cdn.nar.realtor/sites/default/files/assets/images/B2b_office_red.jpg" alt="" />
                    </div>
                    <div className='w-60 h-72 bg-slate-100 rounded-xl m-3 relative bottom-10'>
                        <img className='w-full h-full  rounded-xl' src="https://officebanao.com/wp-content/uploads/2023/12/Office-Color-Design.jpg" alt="" />
                    </div>


                </div>


            </div>
        </div>
    )
}

export default Home