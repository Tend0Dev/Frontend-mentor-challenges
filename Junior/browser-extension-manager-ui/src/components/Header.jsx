import { useState } from 'react';
import Logo from '@images/logo.svg';
import LogoDark from '@images/logo-dark.svg';
import IconSun from '@images/icon-sun.svg';
import IconMoon from '@images/icon-moon.svg';

function Header() {

    const saveTheme = localStorage.getItem('dark');
    const [isDark, setIsDark] = useState(JSON.parse(saveTheme));

    if(JSON.parse(saveTheme)){
        document.documentElement.classList.add('dark')
    }

    const handleClick = () => {
        const isDarkChanged = document.documentElement.classList.toggle('dark');
        setIsDark(isDarkChanged);

        localStorage.setItem('dark', isDarkChanged );
    }


    return (

        <div className='bg-Neutral-0 dark:bg-Neutral-800  flex justify-between h-[66px] px-3 py-2 rounded-[10px] items-center mb-6'>
            <img src={isDark? LogoDark : Logo} alt="logo" />

        <button onClick={handleClick} className='bg-Neutral-100 size-[50px] grid place-content-center rounded-lg cursor-pointer hover:bg-neutral-300 transition-colors transition-duration-300 dark:bg-Neutral-700 dark:hover:bg-Neutral-600 '>
            <img src={isDark ? IconSun : IconMoon} alt="Icon button" />
        </button>

        </div>

    );
}

export default Header;