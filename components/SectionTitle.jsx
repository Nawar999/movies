import React from 'react'

const SectionTitle = ({title}) => {
  return (
    <div className="flex flex-row items-center gap-2 mb-2">
    <div className='w-2 h-8 bg-yellow-500 rounded-lg'>
    </div>
 <h1 className="text-2xl text-white">{title}</h1>
 </div>
 
  )
}

export default SectionTitle