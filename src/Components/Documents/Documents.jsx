import React from 'react'

const Documents = () => {
    return (
        <div className='flex flex-col items-center justify-between  page__container'>
            <h3 className='text-2xl font-mono relative top-1'>Правила</h3>
            {/* <div className='w-9/12 h-5/6  rounded-md flex items-center justify-center '>
                <div className='w-6/12 h-4/5 rounded-xl height relative top-2'>
                    <img className='w-full h-full rounded-3xl' src="https://sayt-portfolio.at.ua/Inf_11/shkola_8_instrukcija.jpg" alt="" />
                </div>
            </div>
            <div className='w-full h-12 flex items-end justify-center '>
                <div className='w-36 h-10  flex items-center justify-around '>
                    <button className='w-9 h-9 text-md font-mono bg-button  rounded-full'>{`<`}</button>
                    <p className='text-lg font-mono'>  1</p>
                    <button className='w-9 h-9 text-md font-mono bg-button  rounded-full'>{`>`}</button>
                </div>

            </div> */}
            <div className='w-11/12 h-full flex flex-wrap justify-center pt-3 '>
                <div className='w-72 h-48 rounded-xl border-green-200 border-2 m-3 p-3 card '>
                    <p className='text-xl font-medium'>Lorem ipsum dolor sit amet consectetur adipisicing psum dolor sit amet consectetur adipisici elit.</p>
                </div>
                <div className='w-72 h-48 rounded-xl border-green-200 border-2 m-3 p-3 card '>
                    <p className='text-xl font-medium'>Lorem ipsum dolor sit amet consectetur adipisicing psum dolor sit amet consectetur adipisici elit.</p>
                </div> <div className='w-72 h-48 rounded-xl border-green-200 border-2 m-3 p-3 card '>
                    <p className='text-xl font-medium'>Lorem ipsum dolor sit amet consectetur adipisicing psum dolor sit amet consectetur adipisici elit.</p>
                </div> <div className='w-72 h-48 rounded-xl border-green-200 border-2 m-3 p-3 card '>
                    <p className='text-xl font-medium'>Lorem ipsum dolor sit amet consectetur adipisicing psum dolor sit amet consectetur adipisici elit.</p>
                </div>
                <div className='w-72 h-48 rounded-xl border-green-200 border-2 m-3 p-3 card '>
                    <p className='text-xl font-medium'>Lorem ipsum dolor sit amet consectetur adipisicing psum dolor sit amet consectetur adipisici elit.</p>
                </div>
                <div className='w-72 h-48 rounded-xl border-green-200 border-2 m-3 p-3 card '>
                    <p className='text-xl font-medium'>Lorem ipsum dolor sit amet consectetur adipisicing psum dolor sit amet consectetur adipisici elit.</p>
                </div>
            </div>
        </div>
    )
}

export default Documents