import React from 'react'

type Props = {}


function TabOptions({}: Props) {
  return (
    <div className="flex gap-2">
        <div className="w-4 h-4 bg-contessa-base rounded-full"></div>
        <div className="w-4 h-4 bg-putty-base rounded-full"></div>
        <div className="w-4 h-4 bg-green-base rounded-full"></div>
    </div>
  )
}

export default TabOptions