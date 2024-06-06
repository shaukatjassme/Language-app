import React from 'react';
import ReactDOM from 'react-dom';

const el = document.getElementById('root');

const root = ReactDOM.createRoot(el);

function App() {
 
  const config={color:"red"};


    return(
    <div>
       <h1> My color is {config.color}</h1>
       
        
    </div> 
    )
}

root.render(<App />);



