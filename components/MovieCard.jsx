import React from 'react'
import star from "../public/star.png"
import img from "../public/imge.jpg"

import Image from 'next/image'
const MovieCard = ({movie,index}) => {
  return (
    <div>
        <div className="flex min-w-max flex-col border-2 p-2 rounded-md">
          <Image src={img} height={400} width={300} alt=""/>
          <h1 className='text-xl'>{index +". "+ movie?.name}</h1>
          <div className='flex flex-row items-center gap-2'>
            <Image src={star} height={25} width={25} alt=''/>
           <h1>{movie?.rate}</h1> 
          </div>
          <h1>{movie?.year}</h1>
        </div>
    </div>
  )
}

export default MovieCard