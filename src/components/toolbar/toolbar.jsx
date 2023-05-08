import React from 'react'

const Toolbar = () => {
    return (
        <div className='absolute top-0 left-0 text-white flex justify-between w-full bg-bs-main-color !h-12 border-b border-bs-border-color '>
            <div className='flex'>
                <button className=''>options</button>
                <button>pointer</button>
                <button>drag</button>
                <button>comment</button>
            </div>
            <div className='flex items-center'>
                <button>Coffee Store </button>
                <p>view only</p>
            </div>
            <div className='flex'>
                <button>A</button>
                <button>share</button>
                <button>Play</button>
                <button>41%</button>
            </div>
        </div>
    )
}

export default Toolbar