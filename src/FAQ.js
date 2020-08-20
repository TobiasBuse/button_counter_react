//import React from 'react';
import './App.css';
import React, { useState } from 'react';


// const FAQ = () => {
//     return (<h1>Why is React great?</h1>);
// }
 
// export default FAQ;



const Hooks2 = () => {
    const [isShown, setIsShown] = useState(false)

    return (
        <div className={"paddingtop"}>
            {/* <button onClick={() => setIsShown(true)}>Set me true</button> */}
            <button onClick={() => setIsShown(true)}>Why is React great?</button>
        <div className={"paddingtop"} >
            <div className={isShown ?  "show" : "hide"}>React is great because it offers a fast learning curve.</div>
        </div>
        </div>
    );
}

export default Hooks2;