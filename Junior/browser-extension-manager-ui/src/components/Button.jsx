
function Button ({children, textSmall, handleClick, active}) {
  return (
    <button onClick={handleClick} className={`border border-neutral-300 shadow-ms px-5 py-2 rounded-full hover:bg-Neutral-200
       cursor-pointer  transition-colors transition-duration-300 dark:text-Neutral-0 
       
       ${active ? 'bg-Red-500  hover:bg-Red-500 hover:text-Neutral-100  dark:bg-Red-500 dark:hover:bg-Red-500 dark:hover:text-Neutral-900 ' 
       : ' hover:bg-Neutral-100'}
        dark:bg-Neutral-800 dark:border-Neutral-600  
        
        ${textSmall ? 'text-base hover:bg-Red-700 hover:text-Neutral-0 dark:hover:text-Neutral-900 ' : 'text-[1.25rem] dark:hover:bg-Neutral-600 dark:hover:text-Neutral-100 transition-colors' }  `} >{children}</button>
  )
}

export default Button;
