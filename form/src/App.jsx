import React, { useState } from "react";

const App=()=>{
    const[name,setName]=useState();
    const[fullname,SetFullName]=useState();
    const[lastname,setLastname]=useState();
    const [getfullName,setFullLastName]=useState();
    const[email,setEmail]=useState();

    const incr=(event)=>{
        setName(event.target.value);
    }
    const onsubmit=(event)=>{
        event.preventDefault();
        SetFullName(name);
        setFullLastName(lastname);
        alert('Form Submitted!!👍');
        
        
    }
    //last_name_updation
    const incr_last=(event)=>{
        setLastname(event.target.value)
    }
    const incr_email=(event)=>{
        setEmail(event.target.value)
    }

    return(
    <>
    <form onSubmit={onsubmit}>
        <h2 className="heading"> Contact us :- </h2>
        <div>
            <h1>👋🏿Hello {fullname} {getfullName}</h1>
            <h5>{email}</h5>
            FirstName : <input type="text" placeholder="Enter Your FName" onChange={incr}/>
            <br/>
            LastName : <input type ="text" placeholder="Enter Your LName" onChange={incr_last}/>
            <br/>
            E-Mail-Id : <input type ="email" placeholder="Enter Your Email-Id" onChange={incr_email}/>
            <br/>
            <button type='submit'>Click👆🏿</button>
        </div>
    </form>
    </>
    );
};
export default App;