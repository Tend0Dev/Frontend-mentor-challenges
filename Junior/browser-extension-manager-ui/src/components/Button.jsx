
function Button ({children, textSmall}) {
  return (
    <button className={`border border-neutral-300 shadow-ms px-5 py-2 rounded-full hover:bg-Neutral-100 cursor-pointer  transition-colors transition-duration-300 dark:text-Neutral-0 dark:bg-Neutral-800 dark:border-Neutral-600  ${textSmall ? 'text-base hover:bg-Red-700 hover:text-Neutral-0 dark:hover:text-Neutral-900 ' : 'text-[1.25rem] hover:text-Neutral-600 dark:hover:bg-Neutral-600 dark:hover:text-Neutral-100 transition-colors' }  `} >{children}</button>
  )
}

export default Button;
