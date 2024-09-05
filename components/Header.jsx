import React from 'react'
import icon from "../public/menu.png"
import magnifying from "../public/magnifying-glass.png"
import Image from 'next/image'

const Header = () => {
  return (
    <div className='flex flex-row p-3 justify-between'>
        <div className='flex flex-row gap-6'>

      
        <Image src={icon} height={25} width={30}/>
        <div className='bg-orange-300 rounded-lg inline'>
            <h1 className='p-2 text-2xl '>IMDb</h1>  
            </div>
        </div>
        <Image src={magnifying} height={0} width={30} />

    </div>
  )
}

export default Header