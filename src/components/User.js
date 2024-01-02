import { useState } from "react";

const User=()=>{
    const [count,setcount]=useState(0);
    const increase=()=>{
        const counting=count;
        setcount(counting+1);
    }
    const decrease=()=>{
        const counting=count;
        setcount(counting-1);
    }
    return(
        <div className="User-card">
            <div>Count:{count}</div>
            <button onClick={increase}>+</button>
            <button onClick={decrease}>-</button>
            <div>NAME :Ritushree Das</div>
            <div>Location</div>
            <div>Contact Us:@ritz.das</div>
        </div>
    )
}
export default User;