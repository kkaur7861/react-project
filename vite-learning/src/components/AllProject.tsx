import React, { useState } from 'react'
import BgColor from './BgColor'

function AllProject() {
    
    const [bgColor, setBgColor] = useState('black')

    return (
      <div className='w-full h-screen' style={{backgroundColor:bgColor}}>
        <BgColor setBgColor={setBgColor} />
        
      </div>
    )
}

export default AllProject