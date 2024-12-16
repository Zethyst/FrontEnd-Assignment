import React from 'react'

function ActivityButton({ title }) {
    return (
        <div className="flex justify-center items-center gap-2 px-4 pb-2  cursor-pointer">
            <img src="/Icon-Box.png" alt="" srcset="" />
            <p className="text-black w-24">{title}</p>
        </div>
    )
}

export default ActivityButton