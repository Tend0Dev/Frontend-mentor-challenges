import { Toggle } from 'rsuite';
import 'rsuite/Toggle/styles/index.css';
import Button from "./Button";

function Card ({logo, name, description, isActive, extensions, setExtensions}) {

    const onToggle = () => {
        const currentExtension = extensions.filter(extension => extension.name === name)[0];

        const updateExtension = {...currentExtension, isActive: !currentExtension.isActive}

        const newExtensions = extensions.map(extension => {
            if(extension.name === name){
                extension = {...updateExtension}
            }
            return extension;
        })
        console.log(newExtensions)

        setExtensions(newExtensions)

        
    }

    const onRemove = () => {
        const filteredExtension = extensions.filter(extension => extension.name !== name)
        setExtensions(filteredExtension);
        

    }

    return (
        <div className="bg-Neutral-0 rounded-2xl p-4 shadow-sm dark:bg-Neutral-800 dark:text-Neutral-0">

            <div className="flex gap-4 items-start mb-8">
                <img src={logo} alt="Logo" />
                <div>
                    <h2 className=" text-[1.25rem] font-bold mb-1 ">{name}</h2>
                    <p className="text-neutral-600 text-[16px] dark:text-Neutral-300">{description}</p>
                </div>
            </div>

            <div className="flex items-center place-content-between">
                <Button textSmall handleClick = {onRemove} >Remove</Button>
                <Toggle onClick={onToggle} checked = {isActive} color='red'/>
            </div>

        </div>
    )
}

export default Card;