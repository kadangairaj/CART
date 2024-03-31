
import { useState } from 'react';
import './App.css'

function App() {
  const [count, setCount]= useState(0);

  return (
    <>
    <Cart count={count}/>
   <AllProduct setCount={setCount} count={count}/>
    </>
  )
}

export default App;
function AllProduct({setCount, count}){
  const data = [{
    Name : "SAMUSUNG",
    Modle : "M 51",
    Ram  : 8,
    Rom  : 128,
    Rs    : 24999,
  },
  {
    Name : "SAMUSUNG",
    Modle : "M 51",
    Ram  : 8,
    Rom  : 128,
    Rs    : 24999,
  },
  {
    Name : "SAMUSUNG",
    Modle : "M 51",
    Ram  : 8,
    Rom  : 128,
    Rs    : 24999,
  },
  {
    Name : "SAMUSUNG",
    Modle : "M 51",
    Ram  : 8,
    Rom  : 128,
    Rs    : 24999,
  },
  {
    Name : "SAMUSUNG",
    Modle : "M 51",
    Ram  : 8,
    Rom  : 128,
    Rs    : 24999,
  },
  {
    Name : "SAMUSUNG",
    Modle : "M 51",
    Ram  : 8,
    Rom  : 128,
    Rs    : 24999,
  },
  {
    Name : "SAMUSUNG",
    Modle : "M 51",
    Ram  : 8,
    Rom  : 128,
    Rs    : 24999,
  },
  {
    Name : "SAMUSUNG",
    Modle : "M 51",
    Ram  : 8,
    Rom  : 128,
    Rs    : 24999,
  },
  {
    Name : "SAMUSUNG",
    Modle : "M 51",
    Ram  : 8,
    Rom  : 128,
    Rs    : 24999,
  },
  {
    Name : "SAMUSUNG",
    Modle : "M 51",
    Ram  : 8,
    Rom  : 128,
    Rs    : 24999,
  },
  {
    Name : "SAMUSUNG",
    Modle : "M 51",
    Ram  : 8,
    Rom  : 128,
    Rs    : 24999,
  },
  {
    Name : "SAMUSUNG",
    Modle : "M 51",
    Ram  : 8,
    Rom  : 128,
    Rs    : 24999,
  },
  {
    Name : "SAMUSUNG",
    Modle : "M 51",
    Ram  : 8,
    Rom  : 128,
    Rs    : 24999,
  },
  {
    Name : "SAMUSUNG",
    Modle : "M 51",
    Ram  : 8,
    Rom  : 128,
    Rs    : 24999,
  },
  {
    Name : "SAMUSUNG",
    Modle : "M 51",
    Ram  : 8,
    Rom  : 128,
    Rs    : 24999,
  },
  {
    Name : "SAMUSUNG",
    Modle : "M 51",
    Ram  : 8,
    Rom  : 128,
    Rs    : 24999,
  },
];
return(
  <div className='Allproduct'>
    {data.map((val,idx)=>(
      <Product Modle={val} key={idx} setCount={setCount} count={count}/>
    ))}
  </div>
)
}

function Product({Modle, setCount, count}) {
  const [add, remove] = useState(true);
  function cartChange() {
    remove(!add);
    setCount(count + 1);
  }
  function cartRemove(){
     remove(!add);
     setCount(count - 1);
  }
  return (
    <div className='Product'>
      <div className='img'>
              <img src="data:image/jpeg;base64,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" alt="" />

      </div>
      <h3>Brand : {Modle.Name}</h3>
      <h4>Modle : {Modle.Modle}</h4>
      <h4>Ram : {Modle.Ram} Gb</h4>
      <h4>Rom : {Modle.Rom} Gb</h4>
      <h4> Rs : <span>₹</span> {Modle.Rs}</h4>
      {add ?( <button onClick={cartChange}>Add Cart</button> 
      ): (  <button onClick={cartRemove}>Remove Cart</button> )}
      
     
    </div>
  )
}
function Cart({count}) {
  return(
    <div className="head">
    
      <h1>  {count}  🛒  </h1>
   
      
    </div>
  )
}