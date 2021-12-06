import React  from 'react';



const Habit=({habit,count,Increase,decrease,text})=> {
    return (
        <>
        {text}
        {count}
         <button onClick={Increase}>+</button>
         <button onClick={decrease}>-</button>
         <button >delete</button>
        </>
    );
}

export default Habit;