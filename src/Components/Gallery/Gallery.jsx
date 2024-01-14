import React from 'react'

const Gallery = () => {
    return (
        <div className='Container'>
            <div className='w-3/5 h-5/6 overflow-y-scroll pl-24 '>
                <div className='w-5/6 h-full text-black rounded-xl bg-emerald-500 flex items-center justify-center   m-2 mt-0'>Image
                </div>

                <div className='w-5/6 h-full text-black rounded-xl bg-emerald-500 flex items-center justify-center   m-2 mt-0'>Image
                </div>
                <div className='w-5/6 h-full text-black rounded-xl bg-emerald-500 flex items-center justify-center   m-2 mt-0'>Image
                </div>
            </div>
        </div>
    )
}

export default Gallery