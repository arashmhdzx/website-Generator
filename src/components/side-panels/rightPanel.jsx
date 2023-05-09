import React from 'react'

const RightPanel = () => {
    return (
        <div className="absolute text-white top-12 bottom-0 right-0 text-xs bg-bs-main-color border-r" style={{ width: "240px" }}>
            <div className='flex flex-col'>
                <div className='flex [&>*]:p-3 [&>*]:opacity-70 [&>*]:cursor-default border-b'>
                    <button>Comment</button>
                    <button>Inspect</button>
                    <button>Export</button>
                </div>
            </div>
        </div>
    )
}

export default RightPanel