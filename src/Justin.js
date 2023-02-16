import React from 'react';
import './style.css';

function Showmyage() {
  alert('My age is : 21');
}

export default function Justin(obj) {
  
  return (
    <div>
      <h1>Hello Justin</h1>
      <p>My name is {obj.name}</p>
      <label htmlFor=""> Click to see Age </label><button onClick={Showmyage}>click</button>
      {'justin'==='justin'? <h1>justin</h1>:<h1>not justin</h1>}
      <label htmlFor=""> Click to see Recent issue </label> <button onClick={obj.clickfn}>click</button>
      {[1,2,3,4,5,6,7,8,9,10].map((num) => (<h1>{num*2}</h1>))}
    </div>
  );
}
