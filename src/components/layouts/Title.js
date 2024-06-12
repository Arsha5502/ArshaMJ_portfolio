import React from 'react'

const Title = ({title, des}) => {
    return (
        <div  className='flex flex-col gap-4 font-titleFont mb-14'>
          <h3 className='text-sm uppercase font-light text-designColor align-items-left tracking-wide'>
            {title}
          </h3>
          <h3 className="text-4xl text-gray-300 font-bold capitalize">{des}</h3>
       </div>
    )
}

export default Title