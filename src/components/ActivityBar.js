import React from 'react'
import Tab from './Tab'
import ActivityButton from './ActivityButton'

function ActivityBar() {
  return (
    <div className="flex flex-col justify-start items-start py-2 px-3 gap-5 bg-[#D3E8FD] w-full rounded-2xl h-28 overflow-hidden  my-4">
        <div className="flex justify-center items-center gap-3 pt-1">
            <Tab title="Favourites" />
            <Tab title="Recently Used" />
            <Tab title="Frequently Used" />
        </div>
        <div className="flex justify-center items-center gap-6">
            <ActivityButton title="Option 1" />
            <ActivityButton title="Option 1" />
            <ActivityButton title="Option 1" />
            <ActivityButton title="Option 1" />
            <ActivityButton title="Option 1" />
            <ActivityButton title="Option 1" />
            <ActivityButton title="Option 1" />
            <ActivityButton title="Option 1" />
            <ActivityButton title="Option 1" />
        </div>
    </div>
  )
}

export default ActivityBar