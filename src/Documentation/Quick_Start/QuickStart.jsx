import React, { useState } from 'react';
import ComponetExample from './Componet';
import NestedComponent from './NestedComponent';

const Login = ()=>{
    return(<>
     <p>This is Login...</p>
    </>)
}

const MainPage = ()=>{
    return(<>
     <p>This is main page ...</p>
    </>)
}


const name ="Golam Hakkani Mim"

let ConditionalRendering;

if(name){
    ConditionalRendering = <MainPage/>
}
else ConditionalRendering = <Login/>

// redering list 

const products = [
    { title: 'Cabbage', id: 1 },
    { title: 'Garlic', id: 2 },
    { title: 'Apple', id: 3 },
  ];


// state management componet 

const MyButton=()=>{
 const [count,setCount] = useState(0);
 const handleClick =()=>{
    setCount(count+1)
 }
return(<>
 <button onClick={handleClick}>
      Clicked {count} times
    </button>
</>)

}

const QuickStart = () => {


    const handleShowYourActivity =()=>{
        alert("hiii");
    }
    return (
        <div>
             <h3>Ami jsx  : </h3>

            <h3>Component : </h3>
            <ComponetExample/>
            <h3>Nested component : </h3>
            <NestedComponent />
           
            <h3>Adding Styles : </h3>
            <h4 style={{color:"red"}}>This is the component style </h4> 

            <h3>Displaying data dynamically : </h3>
            <h4 style={{color:"red"}}>Your name is : {name} </h4> 

            <h3>Conditional rendering : </h3>
            <p>{ConditionalRendering}</p>


            <h3>Rendering list :</h3>
            {
                products?.map(item=><div key={item?.id}>
                    <p>{item?.title}</p>
                </div>)
            }

            <h3>Event Handler </h3>
            <button onClick={handleShowYourActivity}>Click</button>

            <h3>State Change </h3>

            <MyButton/>
            <MyButton/>
            

           
        </div>
    );
};

export default QuickStart;