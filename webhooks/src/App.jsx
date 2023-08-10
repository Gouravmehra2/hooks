import React, { useState } from 'react';

const App = () =>{
   let  new_time=new Date().toLocaleTimeString();

   const[ctime,settime]=useState(new_time);
   

   const incr =()=>{
    new_time=new Date().toLocaleTimeString();
    settime(new_time);
   }
   setInterval(incr,1000);

    return(
    <>
      <div className='heading'>
      <h1 >⌚{ctime}</h1>
      </div>
    </>
    );

};
export default App;