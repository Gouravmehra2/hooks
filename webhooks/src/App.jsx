import React, { useState } from 'react';

const App = () =>{
   let color ="#c64fee";
   let  new_time=new Date().toLocaleTimeString();
   const[ccolor,updatecolor]=useState(color);
   const[name,updatedname]=useState("Click Me");
   const[ctime,settime]=useState(new_time);

   const bgcolor = ()=>{
        let new_color="#ee774f";
        updatecolor(new_color)
        updatedname("SHOCK !!😲")

   }
    //web hook for time 
    const incr =()=>{
    new_time=new Date().toLocaleTimeString();
    settime(new_time);
    }
    setInterval(incr,1000);

    const bgchange= () =>{
        updatecolor(color);
        updatedname("worsth !😡")

    }


    return(
    <>
   
      <div className='heading'>
      <h1 >⌚{ctime}</h1>   
      </div>
      <div className='btn' style={{backgroundColor:ccolor}}>
      <button onClick={bgcolor} onDoubleClick={bgchange} onMouseEnter={bgcolor} onMouseLeave={bgchange}>{name}</button>
      </div>
      
    </>
    );

};
export default App;