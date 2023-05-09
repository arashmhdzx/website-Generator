import React from 'react'

const Toolbar = () => {
    return (
        <div className='absolute top-0 left-0 text-white flex justify-between w-full bg-bs-main-color !h-12 border-b '>
            <div className='flex'>
                <button className='px-4'>options</button>
                <div className='flex items-center px-4 '>
                    <button className='p-3' >pointer</button>
                    <button className='p-3'>drag</button>
                    <button className='p-3'>comment</button>
                </div>
            </div>
            <div className='flex items-center'>
                <button>Coffee Store </button>
                <p className=' opacity-70 px-4 text-xs'>view only</p>
            </div>
            <div className='flex items-center'>
                <div className='px-4'>
                    <button className=' rounded-full p-1 px-3 bg-violet-900'>A</button>
                </div>
                <button className='px-4'>share</button>
                <button className='px-4'>Play</button>
                <button className='px-4 text-sm'>41%</button>
            </div>
        </div>
    )
}

export default Toolbar