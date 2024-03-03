import React, { useEffect, useState } from 'react'

const News = () => {

    const [news, setNews] = useState([]);
    const [searchName, setSearchName] = useState('')

    useEffect(() => {
        const fetchNews = async () => {
            try {
                const response = await fetch('https://next-admin-server-1.onrender.com/api/get-news');
                const data = await response.json();
                setNews(data)

            }
            catch (error) {
                console.log('something wrong with news')


            }
        }


        fetchNews()

    }, []);

    const filteredNews = news.filter(item =>
        item.name.toLowerCase().includes(searchName.toLowerCase())

    )

    return (
        <div className='cont'>


            {
                news.length > 0 ? (
                    <>
                        <div className='w-full h-14 flex justify-center relative top-3'>
                            <div className='w-96 h-full  rounded-2xl flex items-center justify-center'>
                                <input value={searchName} onChange={(e) => setSearchName(e.target.value)} type="text" placeholder='Пошук' className='w-5/6 h-12 text-lg bg-slate-100  rounded-3xl  placeholder:text-lg outline-none pl-5' />
                                <div className='w-12 h-12 bg-slate-200 rounded-md flex items-center justify-center relative right-8'>
                                    <img className='w-6 h-6' src="https://uxwing.com/wp-content/themes/uxwing/download/user-interface/search-icon.png" alt="" />
                                </div>
                            </div>
                        </div>

                        {
                            filteredNews.length > 0 ? (
                                <div className='w-full  h-5/6 flex flex-wrap justify-center overflow-y-scroll  pl-5 relative top-5'>
                                    {
                                        filteredNews.map((item, index) => (
                                            // <div key={index} className='w-5/6 h-auto hover:bg-slate-100 p-2 pt-0   rounded-lg m-4'>

                                            //     <div className='w-full h-4/6 rounded-lg  flex items-center justify-center relative top-2.5'>
                                            //         <img className='w-full h-full rounded-lg' src={item.image} alt="" />
                                            //     </div>

                                            //     <div className='w-full h-auto  p-2 pl-1 relative top-2 '>
                                            //         <h3 className='text-2xl font-mono'>{item.title}</h3>
                                            //         <div className='w-full h-auto break-words '>
                                            //             <p className='font-mono '>{item.description}</p>
                                            //         </div>
                                            //     </div>

                                            // </div>
                                            <div key={index} className='w-2/6 h-5/6 rounded-xl flex flex-col items-center m-3 pt-2'>
                                                <div className='w-11/12 h-3/6 bg-slate-100 rounded-xl' ></div>
                                                <div className='w-11/12 h-3/6 pl-2'>
                                                    <div className=' w-full h-14 flex items-center justify-between'>
                                                        <h2 className='text-3xl font-medium'>{item.name}</h2>
                                                        <h2 className='text-lg text-gray-600 font-medium '>20.02.2024</h2>
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
                                <div className=' w-full h-full text-3xl font-mono text-gray-500 flex items-center justify-center'>Не знайдено</div>


                            )
                        }

                    </>
                ) : (
                    <div className=' w-full h-full text-3xl font-mono text-gray-500 flex items-center justify-center'>Під'єднання...</div>

                )
            }

        </div >
    )
}

export default News