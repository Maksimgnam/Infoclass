import React, { useState, useEffect } from 'react'

const Lessons = () => {

    const [lessons, setLessons] = useState([]);
    const [searchName, setSearchName] = useState('')

    useEffect(() => {
        const fetchLessons = async () => {
            try {
                const response = await fetch('https://next-admin-server-1.onrender.com/api/get-lessons');
                const data = await response.json();
                setLessons(data);

            } catch (error) {
                console.log('Something wrong with gallery fetching', error)

            }

        }

        fetchLessons();
    })


    const filteredLessons = lessons.filter(item =>
        item.name.toLowerCase().includes(searchName.toLowerCase())

    )
    return (
        <div className='cont'>
            {
                lessons.length > 0 ? (
                    <>
                        <div className='w-full h-14 flex justify-center relative top-3'>
                            <div className='w-96 h-full rounded-2xl flex items-center justify-center'>
                                <input value={searchName} onChange={(e) => setSearchName(e.target.value)} type="text" placeholder='Пошук' className='w-5/6 h-12 text-lg bg-slate-100 rounded-3xl  placeholder:text-lg outline-none pl-5' />
                                <div className='w-12 h-12 bg-slate-200 rounded-md flex items-center justify-center relative right-8'>
                                    <img className='w-5 h-5' src="https://uxwing.com/wp-content/themes/uxwing/download/user-interface/search-icon.png" alt="" />
                                </div>
                            </div>
                        </div>
                        {
                            filteredLessons.length > 0 ? (
                                <div className='w-full  h-5/6 flex flex-wrap justify-center overflow-y-scroll  pl-5 relative top-5 '>
                                    {
                                        filteredLessons.map((item, index) => (
                                            <div key={index} className='w-2/6 h-5/6 rounded-xl flex flex-col items-center m-3 pt-2'>
                                                <div className='w-11/12 h-3/6 bg-slate-100 rounded-xl' ></div>
                                                <div className='w-11/12 h-3/6 pl-2'>
                                                    <div className=' w-full h-14 flex items-center justify-between'>
                                                        <h2 className='text-3xl font-medium'>{item.name}</h2>
                                                        <h2 className='text-lg text-gray-600 font-medium '>{item.createdDate}</h2>
                                                    </div>
                                                    <div className='w-full h-auto'>


                                                        <p className='text-lg text-gray-400 font-medium'>{item.description}</p>
                                                    </div>


                                                </div>
                                            </div>
                                        ))
                                    }

                                </div>
                            ) : (
                                <div className='w-full h-full  text-3xl font-mono text-gray-500 flex items-center justify-center'>Під'єднання...</div>

                            )
                        }


                    </>

                ) : (
                    <div className='w-full h-full  text-3xl font-mono text-gray-500 flex items-center justify-center'>Під'єднання...</div>
                )
            }

        </div>

    )
}

export default Lessons