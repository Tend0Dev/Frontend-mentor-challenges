import { useState } from "react";
import Button from "./Button";
import { Toggle } from 'rsuite';
import 'rsuite/Toggle/styles/index.css';

function Card ({logo, name, description, isActive}) {

    const [active, setIsActive] = useState(isActive);

    const handleToggle = (checked) => {
        setIsActive(checked)


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
                <Button textSmall >Remove</Button>
                <Toggle checked={active} onChange={handleToggle} color="red"/>
            </div>

        </div>
    )
}

export default Card;