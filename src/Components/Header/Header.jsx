import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../Logo/Logo';

const Header = ({ isTheme, themeChange }) => {
    return (
        <div className='Header' style={{
            backgroundColor: isTheme ? '#333' : '#fff',
            color: isTheme ? 'white' : '#333',
            boxShadow: isTheme ? '0 0 8px #292929' : '0 0 5px #ccc',
            padding: '20px',
        }}>
            <Logo />
            <a className=' text-lg  font-mono  hover:text-emerald-500'>
                <Link to="/">Головна</Link>
            </a>
            <a className=' text-lg font-mono  hover:text-emerald-500'>
                <Link to="/news">Новини</Link>
            </a>
            <a className=' text-lg  font-mono  hover:text-emerald-500'>
                <Link to="/gallery">Галерея</Link>
            </a>
            <a className=' text-lg  font-mono hover:text-emerald-500'>
                <Link to="/lessons">Уроки</Link>         </a>
            <button className=' w-10 h-10  rounded-3xl hover:bg-emerald-500 flex items-center justify-center' onClick={themeChange}>
                {
                    isTheme ? (

                        <img className='w-6 h-6' src="https://cdn-icons-png.flaticon.com/512/702/702471.png" alt="" />
                    ) : (
                        <img className='w-6 h-6' src="https://cdn-icons-png.flaticon.com/512/128/128832.png" alt="" />
                    )
                }

            </button>




        </div>
    )
}

export default Header