import React from 'react';
import { useState } from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import TeachersPopup from '../TeachersPopup/TeachersPopup';


const Teachers = () => {

    const [currentPage, setCurrentPage] = useState(1);
    const [isHover, setIsHover] = useState(false)

    const TeachersArray = [
        {
            name: "Галина Чікель",
            description: "Lorem ipsum, lorппппппппппппвввввв sitмпм amet cмаппппппппппппonsectetur adipisicing elit. Similique unde consequuntur quia et, nostrum harum natus? Voluptas dolor necessitatibus evenietLorem ipsum, dolor sit amet consetas dolor necessitatibus eveniet. dolorппппппппппппвввввв sitмпм amet cмаппппппппппппonsectetur adipisicing elit. Similique unde consequuntur quia et, nostrum harum natus? Voluptas dolor necessitatibus evenietLorem ipsum, dolor sit amet consectetur a harum natus? Voluptas dolor necessitatibus evenietLorem ipsum, dolor sit amet consectetur adipisicing elit. Similique unde consequuntur quia et, nostrum harum natus? Voluptas dolor necessitatibus eveniet.",
            image: "https://www.unchainyourbrain.org/wp-content/uploads/2018/12/beautiful-blur-blurred-background-733872.jpg",



        },
        {
            name: "Віталій Гимон",
            description: "Lorem ipsum, lorппппппппппппвввввв sitмпм amet cмаппппппппппппonsectetur adipisicing elit. Similique unde consequuntur quia et, nostrum harum natus? Voluptas dolor necessitatibus evenietLorem ipsum, dolor sit amet consetas dolor necessitatibus eveniet. dolorппппппппппппвввввв sitмпм amet cмаппппппппппппonsectetur adipisicing elit. Similique unde consequuntur quia et, nostrum harum natus? Voluptas dolor necessitatibus evenietLorem ipsum, dolor sit amet consectetur a harum natus? Voluptas dolor necessitatibus evenietLorem ipsum, dolor sit amet consectetur adipisicing elit. Similique unde consequuntur quia et, nostrum harum natus? Voluptas dolor necessitatibus eveniet.",
            image: "https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg"
        }
    ]

    let itemsPerPage = 1;



    const sorting = (array) => {
        return array.sort((a, b) => b.totalPrice - a.totalPrice)
    };

    sorting(TeachersArray);


    const totalPages = Math.ceil(TeachersArray.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const teachers = TeachersArray.slice(startIndex, endIndex);


    const pageChange = (_event, value) => {
        setCurrentPage(value);
    }
    return (
        <>
            <div className='flex flex-col items-center justify-around  teachers '>
                <h3 className='text-2xl font-mono'>Вчителі</h3>
                <div className='w-full h-4/6   rounded-md flex items-center justify-center  '>
                    {teachers.map((item, index) => (
                        <div key={index} className='w-7/12 h-full  rounded-xl pl-2 flex flex-wrap  items-center justify-between '>

                            <div className='w-7/12 h-5/6  flex flex-col justify-between  rounded-xl '>
                                <div className='w-80  h-20 flex items-center'>
                                    <img className='w-10 h-10' src="https://cdn-icons-png.flaticon.com/512/5310/5310672.png" alt="" />
                                    <h3 className=' w-full text-3xl font-medium relative top-1 left-3 '>{item.name}</h3>
                                </div>
                                <div className=' pl-0 h-auto w-full   rounded-md '>
                                    <p className='text-lg text-gray-400 font-semibold'>Опиc</p>
                                    <p className=' text-md  text-gray-400 font-medium relative top-1  '>
                                        {item.description}
                                    </p>
                                </div>

                                {/*  */}
                            </div>
                            <div onMouseMove={() => setIsHover(true)} onMouseLeave={() => setIsHover(false)} className='w-80 h-full   rounded-xl  pt-6 pb-5 pr-3  '>
                                <img className='w-full h-full rounded-xl size-cover  border-emerald-900 ' src={item.image} alt="" />
                                {
                                    isHover && (

                                        <div className='w-full h-14  flex items-center justify-center relative bottom-20'>
                                            <div className='w-44 h-full flex items-center justify-between'>


                                                <div className='w-11 h-11 rounded-xl bg-button shadow-2xl flex items-center justify-center'>
                                                    <img className='w-7 h-7 ' src="https://cdn-icons-png.flaticon.com/512/2175/2175193.png" alt="" />

                                                </div>
                                                <div className='w-11 h-11 rounded-xl bg-button shadow-2xl flex items-center justify-center'>
                                                    <img className='w-7 h-7 ' src="https://www.svgrepo.com/show/353162/instagram-with-circle.svg" alt="" />
                                                </div>
                                                <div className='w-11 h-11 rounded-xl bg-button shadow-2xl flex items-center justify-center'>
                                                    <img className='w-7 h-7 ' src="https://www.svgrepo.com/show/332182/twitter-circle.svg" alt="" />
                                                </div>
                                            </div>
                                        </div>
                                    )
                                }

                            </div>




                        </div>
                    ))}

                </div>
                <div className='w-full h-12  flex items-start justify-center  relative bottom-2'>
                    <div className='w-40 h-12   '>

                        <Stack spacing={2} className="w-full h-12  bg-button  rounded-md flex items-center justify-center ">
                            <Pagination
                                count={totalPages}
                                page={currentPage}
                                onChange={pageChange}
                                style={{ backgroundColor: 'none' }}
                            />
                        </Stack>
                    </div>
                </div>

            </div>

        </>
    )
}

export default Teachers