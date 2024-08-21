import React, { useRef } from 'react'
import Card from './Card'
const Foreground = () => {
    const ref=useRef(null);
    const data=[
        {
            title: 'This is File 1.',
            size: '.10mb',
            color:'green',
            close:true,
            tag:{
                isopen:true,
                tagtitle:"downwoad",
                color: 'red',

            }
        },
        {
            title: 'This is File 2.',
            size: '.1mb',
            color:'green',
            close:false,
            tag:{
                isopen:false,
                tagtitle:"downwoad",
                color: 'blue',

            }
        },
        {
            title: 'This is File 3.',
            size: '.7mb',
            color:'green',
            close:true,
            tag:{
                isopen:true,
                tagtitle:"download",
                color: 'green',

            }
        },
        {
            title: 'This is File 4.',
            size: '.3mb',
            color:'green',
            close:false,
            tag:{
                isopen:true,
                tagtitle:"download",
                color: 'blue',
            }
        },
    ];
    return (
        
    <div ref={ref} className='mx-[16vw] fixed z-[3] w-full h-screen  grid grid-cols-1 md:grid-cols-2 gap-2 flex justify-end'>
        {data.map((item,inst)=>(
            <Card data={item} reference={ref} />  
        ))}
      </div>
  )
}

export default Foreground