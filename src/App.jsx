import React from "react";
import { products } from "./components/Products";


function App() {
  return (
    <div>
      {products.map((item)=>{
        return <div>
          <li>{item.title}</li>
          <li>Price: {item.price}</li>
          <img src={item.imageUrl}/>
        </div>
      })}
    </div>
  );
}

export default App;
