 import  Button  from './Button'




function Filters() {
    return (
        <div className='mb-6 md:flex md:items-center md:justify-between'>
            <h2 className='dark:text-neutral-50 text-center text-[2.125rem] font-bold mb-6 md:mb-0'>Extensions List</h2>
            <div className='flex place-content-between md:gap-4'>
                <Button>All</Button>
                <Button>Active</Button>
                <Button>Inactive</Button>
            </div>
        </div>

    );
}

export default Filters;