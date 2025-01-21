import React, { useState } from 'react';
import HeaderComponent from './Header.Component';

const ComponentBasic = () => {
    const [count,setCount]= useState(0);
    const handleCounter =(status)=>{
        if(status==="dec"){
            setCount(item=>item-1);
        }
        else{
            setCount(item=>item+1);
        }
    }
    return (
        <div>
            <HeaderComponent title="Ehsan Marketing v2"/>
            <button onClick={()=>handleCounter("dec")} 
            style={{
                color:count===0? 'gray':'#2b2b2b',
                border:"1px solid #dadada"
            }}
             disabled={count===0}
            >Decrement</button>
            <h2>Number Count : {count}</h2>
            <button onClick={()=>handleCounter("inc")}
                 style={{
                    color:'#2b2b2b',
                    border:"1px solid #dadada"
                }}
                >Increment</button>
        </div>
    );
};

export default ComponentBasic;