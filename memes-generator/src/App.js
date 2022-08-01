import React from 'react';
import Header from './components/Header'
import Meme from './components/Meme'

function App(){
    // const [isImportant , setIsImportant] = React.useState("Yes");

    // function handleClick(){
    //     setIsImportant("No");
    // }
    // const [count,setCount] = React.useState(0);
    // function increment(){
    //     setCount(function(prevCount){
    //         return prevCount + 1;
    //     });
    // }
    
    // function decrement(){
    //     if(count === 0){
    //         setCount(prevCount => 0);
    //     }else{
    //         setCount(prevCount => prevCount - 1);
    //     }
        
    // }

   
    
    return (
        <main>
            <Header/>
            <Meme/> 
            {/* <h1>Is State important?</h1>
            <h3 onClick={handleClick}>{isImportant }</h3> */}
            {/* <button onClick={increment}>+</button>
            <p>{count}</p>
            <button onClick={decrement}>-</button> */}
        </main>
    );
}
export default App;