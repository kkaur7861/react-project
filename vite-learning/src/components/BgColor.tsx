import React from 'react'

const BgColor = (props: any) => {
  const btnArr =[{
    name:"White",
    colorCode:"white"
  },{
    name:"LightCoral",
    colorCode:"#F08080"
  },{
    name:"Gray",
    colorCode:"#999999"
  },{
    name:"Blue",
    colorCode:"#0000FF"
  },{
    name:"Teal",
    colorCode:"#008080"
  },{
    name:"Purple",
    colorCode:"#800080"
  }];
  
  const createBtnList= ()=>{
    return btnArr.map((btn)=>{
       return <div className='flex-1 text-center rounded-lg p-2' style={{backgroundColor:btn.colorCode}} onClick={()=> props.
        setBgColor(btn.colorCode)}> 
       {btn.name}</div>
    })
  }
  return (
    <div className='flex justify-center text-black p-4 gap-4 bg-sky-100'>
    {createBtnList()}
    </div>
  )
}

export default BgColor