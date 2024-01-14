import React from 'react'

const News = () => {
    return (
        <div className='Container'>
            <div className='w-2/5  h-full  overflow-y-scroll pl-5'>
                <div className='w-5/6 h-full  rounded-lg m-4 bg-red-yellow'>

                    <div className='w-full h-4/6 text-black bg-emerald-500 rounded-lg relative top-2 flex items-center justify-center'>Image</div>

                    <div className='w-full h-1/6 p-2 pl-1 relative top-2 '>
                        <h3 className='text-2xl font-mono'>Новина 1</h3>
                        <p className='font-mono'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem minima quibusdam iure quisquam. Quasi aut placeat expedita ratione ipsum exercitationem?</p>
                    </div>

                </div>

                <div className='w-5/6 h-full  rounded-lg m-4 bg-red-yellow'>

                    <div className='w-full h-4/6 text-black bg-emerald-500 rounded-lg relative top-2 flex items-center justify-center'>Image</div>

                    <div className='w-full h-1/6 p-2 pl-1 relative top-2 '>
                        <h3 className='text-2xl font-mono'>Новина 2</h3>
                        <p className='font-mono'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem minima quibusdam iure quisquam. Quasi aut placeat expedita ratione ipsum exercitationem?</p>
                    </div>

                </div>
                <div className='w-5/6 h-full  rounded-lg m-4 bg-red-yellow'>

                    <div className='w-full h-4/6 text-black bg-emerald-500 rounded-lg relative top-2 flex items-center justify-center'>Image</div>

                    <div className='w-full h-1/6 p-2 pl-1 relative top-2 '>
                        <h3 className='text-2xl font-mono'>Новина 3</h3>
                        <p className='font-mono'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem minima quibusdam iure quisquam. Quasi aut placeat expedita ratione ipsum exercitationem?</p>
                    </div>

                </div>






            </div>
        </div>
    )
}

export default News