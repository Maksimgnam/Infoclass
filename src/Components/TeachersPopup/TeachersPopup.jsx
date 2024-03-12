import React from 'react'

const TeachersPopup = ({ isTheme }) => {
    return (
        <div className='w-full h-teachers-popup-container bg-black-shadow first-line: absolute top-0  flex items-center  justify-center '>
            <div style={{ backgroundColor: isTheme ? '#333' : '#fff', color: isTheme ? 'white' : '#333' }} className='w-3/5 h-teachers-popup  rounded-xl flex flex-col  pt-2 p-3 '>
                <div className='w-full h-10  flex items-center justify-end pr-1'>
                    <button className='w-7 h-7 bg-button rounded-full flex items-center justify-center'><img className='w-full h-full' src="https://cdn-icons-png.flaticon.com/512/54/54473.png" alt="" /></button>
                </div>
                <div className='w-full h-full flex'>

                    <div className='w-5/12 h-popup-image-container   flex flex-col rounded-md pb-4 '>
                        <div className='w-full h-popup-image rounded-md bg-yellow-500'>

                        </div>
                        <div className='w-full h-14 flex items-end justify-center p-1'>
                            <div className='w-5/6 h-full flex items-center justify-between'>
                                <div className='w-20 h-2 rounded-md bg-button '></div>
                                <div className='w-20 h-2 rounded-md bg-button '></div>
                                <div className='w-20 h-2 rounded-md bg-button '></div>
                            </div>

                        </div>

                    </div>


                    <div className='w-7/12 h-full rounded-md   pl-5'>
                        <h3 className='text-3xl font-medium'>Галина Чікель</h3>
                        <p className='text-md font-semibold pt-2'> Lorem, Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam architecto atque officia corrupti animi ipsum dolor sit amet consectetur adipisicing elit. Numquam architecto atque officia corrupti animi aperiam quibusdam delectus harum nulla rerum incidunt, illo laboriosam excepturi doloresLorem, Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam architecto atque officia corrupti animi ipsum dolor sit amet consectetur adipisicing elit. Numquam architecto atque officia corrupti animi aperiam quibusdam delectus harum nulla rerum incidunt, illo laboriosam excepturi dolores.</p>
                        <h2 className='text-2xl font-medium pt-1'>Контакти</h2>
                        <div className='w-full h-40 flex flex-wrap items-center '>
                            <div className='w-56 h-16 border-emerald-200 border-2  rounded-lg flex items-center m-1 pl-1.5'>
                                <div className='w-12 h-12 bg-button rounded-lg flex items-center  justify-center'>
                                    <img className='w-9 h-9' src="https://cdn-icons-png.freepik.com/512/6596/6596115.png" alt="" />
                                </div>
                                <p className='text-lg font-medium relative left-2'>+380 96 520 5409</p>
                            </div>
                            <div className='w-56 h-16 border-emerald-200 border-2  rounded-lg flex items-center m-1 pl-1.5'>
                                <div className='w-12 h-12 bg-button rounded-lg flex items-center  justify-center'>
                                    <img className='w-7 h-7' src="https://cdn4.iconfinder.com/data/icons/picons-social/57/38-instagram-2-512.png" alt="" />
                                </div>
                                <p className='text-lg font-medium relative left-2'>Instagram</p>
                            </div>
                            <div className='w-40 h-16 border-emerald-200 border-2  rounded-lg flex items-center m-1 pl-1.5'>
                                <div className='w-12 h-12 bg-button rounded-lg flex items-center  justify-center'>
                                    <img className='w-6 h-6' src="https://static.thenounproject.com/png/40254-200.png" alt="" />
                                </div>
                                <p className='text-lg font-medium relative left-2'>Facebook</p>
                            </div>
                            <div className='w-72 h-16 border-emerald-200 border-2  rounded-lg flex items-center m-1 pl-1.5'>
                                <div className='w-12 h-12 bg-button rounded-lg flex items-center  justify-center'>
                                    <img className='w-7 h-7' src="https://cdn-icons-png.freepik.com/512/732/732026.png" alt="" />
                                </div>
                                <p className='text-lg font-medium relative left-2'>galinachikel@gmail.com</p>
                            </div>


                        </div>

                    </div>
                </div>
                {/* <div className='w-full h-auto pl-4 pt-2'>
                    <h3 className='text-3xl font-medium'>Галина Чікель</h3>
                    <p>Lorem, Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam architecto atque officia corrupti animi ipsum dolor sit amet consectetur adipisicing elit. Numquam architecto atque officia corrupti animi aperiam quibusdam delectus harum nulla rerum incidunt, illo laboriosam excepturi dolores.</p>
                </div>
                <div className='h-8 w-full flex justify-center pt-2'>
                    <div className='w-4/6 h-1 bg-gray-100 rounded-xl'></div>
                </div>

                <button className='w-11/12 h-14 bg-orange-200 rounded-lg '></button> */}
            </div>

        </div>
    )
}

export default TeachersPopup