import React from "react";
import { useState } from 'react'
function Myform({datap1, datap2, datap2d }) {
    const [number, setNumber] = useState("");
    const checkPrice = (event) => {
        event.preventDefault();
        alert(datap1==number)
        
    }

    return (
        <form onSubmit={checkPrice}>
            <div>
                <span>เลขล็อตเตอรี่: </span><input type="text" name="number" onChange={(e) => setNumber(e.target.value)} id="" />
            </div>
            <br />
            <button className='btn btn-success m-3'>ตรวจรางวัล</button>
        </form>
    );
}

export default Myform