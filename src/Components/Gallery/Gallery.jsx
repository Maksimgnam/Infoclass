import React, { useEffect, useState, useMemo } from 'react'

const Gallery = () => {
    const [gallery, setGallery] = useState([]);
    const [page, setPage] = useState(1)

    useEffect(() => {
        const fetchGallery = async () => {
            try {
                const response = await fetch('https://next-admin-server-1.onrender.com/api/gallery');
                const data = await response.json();
                setGallery(data);


            } catch (error) {
                console.log('Something wrong with gallery fetching', error)

            }

        }

        fetchGallery();
    })

    let itemsPerPage = 1;

    const pageChange = () => {

    }
    const generateRandomDimensions = () => ({
        width: `${Math.floor(Math.random() * (350 - 200) + 200)}px`,
        height: `${Math.floor(Math.random() * (350 - 150) + 150)}px`,
    });
    const initialCardDimensions = useMemo(
        () => Array.from({ length: 10 }, generateRandomDimensions),
        []
    );
    return (
        <div className='gallery'>
            {
                gallery.length > 0 ? (
                    <div className='w-3/5 h-5/6 flex flex-wrap  '>
                        {
                            gallery.map((item, index) => (
                                <div key={index} style={initialCardDimensions[index]} className='w-full h-full rounded-xl  flex items-center justify-center   m-5 mt-0 ml-0'>
                                    <img className='w-full h-full rounded-xl ' src={`https://next-admin-server-1.onrender.com/uploads/${item.photo}`} alt="" />
                                </div>
                            ))
                        }





                    </div>

                ) : (
                    <div className='text-3xl font-mono text-gray-500'>Під'єднання...</div>
                )
            }

        </div >
    )
}

export default Gallery







// import React, { useEffect, useState } from 'react'
// import Pagination from '@mui/material/Pagination';
// import Stack from '@mui/material/Stack';
// const Gallery = () => {
//     const [gallery, setGallery] = useState([]);
//     const [page, setPage] = useState(1)

//     useEffect(() => {
//         const fetchGallery = async () => {
//             try {
//                 const response = await fetch('http://localhost:8000/api/gallery');
//                 const data = await response.json();
//                 setGallery(data);

//             } catch (error) {
//                 console.log('Something wrong with gallery fetching', error)

//             }

//         }

//         fetchGallery();
//     })

//     let itemsPerPage = 1;

//     const pageChange = (value) => {
//         setPage(value)

//     }


//     const totalPages = Math.ceil(gallery.length / itemsPerPage);
//     const startIndex = (- 1) * itemsPerPage;
//     const endIndex = startIndex + itemsPerPage;
//     const photos = gallery.slice(startIndex, endIndex);

//     return (
//         <div className='Container'>
//             {
//                 photos.length > 0 ? (
//                     <div className='w-3/5 h-5/6  overflow-y-scroll  '>
//                         {
//                             photos.map((item, index) => (
//                                 <div key={index} className='w-full h-full rounded-xl  flex items-center justify-center   m-5 mt-0 ml-0'>
//                                     <img className='w-full h-full rounded-xl ' src={item.image} alt="" />
//                                 </div>
//                             ))
//                         }




//                     </div>

//                 ) : (
//                     <div className='text-3xl font-mono text-gray-500'>Під'єднання...</div>
//                 )
//             }

//             <Stack spacing={2} className="admin__container-pagination">
//                 <Pagination
//                     count={totalPages}
//                     page={page}
//                     onChange={pageChange}
//                     color="primary"
//                     style={{ backgroundColor: 'none' }}
//                     className='pagination-buttons'
//                 />
//             </Stack>

//         </div >
//     )
// }

// export default Gallery