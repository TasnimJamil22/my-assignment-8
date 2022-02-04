import React from 'react';
import './Writters.css'

const Writters = (props) => {
    console.log(props.writter.name);
    const {name,Personality,Powers,birth,salary,img} = props.writter;
    return (
        <div className='writter-container'>
            {/* <h4>Name:{name}</h4>
            <p>price:{price}</p>
            <h4>Age:</h4>
            <h4>Country:</h4>
            <h4>Salary:</h4> */}
            <div class=" row row-cols-1 row-cols-md-3  ">
   
   
   
  <div class="col-lg-6  ">
    <div class="card">
      <img src= {img}  class="card-img-top mx-auto" alt="..."/>
      <div class="card-body">
         
        <p class="card-text"> 
 
        <h5>Name:{name}</h5>
            <p>Personality:{Personality}</p>
            <h6>Powers:{Powers}</h6>
            <h6>Birth:{birth}</h6>
    5        <h6>Salary:{salary}</h6>  </p>
            <button 
            onClick={() => props.handleAddToCart(props.writters)}
            className="button"> <i class="fas fa-cart-plus"></i> Add</button>
      </div>
    </div>
  </div>
  
</div>
        </div>
    );
};

export default Writters;