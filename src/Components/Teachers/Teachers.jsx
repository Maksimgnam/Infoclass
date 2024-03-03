import React from 'react'

const Teachers = () => {
    return (
        <div className='flex flex-col items-center justify-around page__container '>
            <h3 className='text-2xl font-mono relative top-2'>Вчителі</h3>
            <div className='w-full h-96  rounded-md flex items-center justify-center relative bottom-7 '>
                <div className='w-7/12 h-5/6 rounded-xl pl-2 flex items-center justify-between'>

                    <div className='w-7/12 h-96  rounded-xl pl-8 pt-7'>
                        <div className='flex items-center'>
                            <img className='w-10 h-10' src="https://cdn-icons-png.flaticon.com/512/5310/5310672.png" alt="" />
                            <h3 className='text-3xl font-medium relative top-1 left-3 '>Галина Чікель</h3>
                        </div>


                        <div className='pt-2'>

                            <p className='text-lg text-gray-400 font-semibold'>Опиc</p>
                            <p className=' text-md  text-gray-400 font-medium relative top-1  '>
                                Lorem ipsum, dolorппппппппппппвввввв sitмпм amet cмаппппппппппппonsectetur adipisicing elit. Similique unde consequuntur quia et, nostrum harum natus? Voluptas dolor necessitatibus evenietLorem ipsum, dolor sit amet consectetur a harum natus? Voluptas dolor necessitatibus evenietLorem ipsum, dolor sit amet consectetur adipisicing elit. Similique unde consequuntur quia et, nostrum harum natus? Voluptas dolor necessitatibus eveniet.
                            </p>

                        </div>

                        <div className='w-full h-12  relative top-7'>
                            <div className='w-32 h-10  flex items-center justify-between '>
                                <button className='w-9 h-9 text-lg font-mono bg-button  rounded-md'>{`<`}</button>
                                <p className='text-xl font-mono'>  1</p>
                                <button className='w-9 h-9 text-lg font-mono bg-button  rounded-md'>{`>`}</button>
                            </div>
                        </div>
                    </div>
                    <div className='w-80 h-96 bg-slate-100 rounded-xl  '>
                        <img className='w-full h-full rounded-xl size-cover ' src="https://www.unchainyourbrain.org/wp-content/uploads/2018/12/beautiful-blur-blurred-background-733872.jpg" alt="" />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Teachers