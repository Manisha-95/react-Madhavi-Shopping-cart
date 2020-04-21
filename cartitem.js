import React, { Component } from 'react';
import { render } from 'react-dom';
import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css'
class CartItem extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="container">
           <div className="desc row justify-content-center">
           <div class="d-flex">
  <div class="p-2 flex-grow-1 bd-highlight align-self-center"><img  src={this.props.item.name} width="200px"/></div>
  <div class="p-2 bd-highlight">
  <div class="d-flex flex-column bd-highlight mb-3">
  <div class="p-2 bd-highlight"><h5>{this.props.item.description}</h5></div>
  <div class="p-2 bd-highlight"><strike><h6>{this.props.item.itemQuan}</h6></strike></div>
  <div class="p-2 bd-highlight"><b>RS:{this.props.item.price}</b></div>
</div>
  
   </div>
  
</div> 

</div>

<div class="d-flex justify-content-center">
  <div class="p-2 bd-highlight"><h4>{this.props.item.discount}Off</h4></div>
  <div class="p-2 bd-highlight">
      <button className="btn btn-success" onClick={()=>this.props.addtocart()}>Add to Cart</button></div>
  
  <div class="p-2 bd-highlight incr">
  <button className="round btn btn-success" onClick={()=> this.props.onIncrement(this.props.item)}>+</button>
  <div className="btn" >{this.props.item.quantity}</div>
      <button className="round btn btn-success" disabled={this.props.item.quantity===0} onClick={()=> this.props.onDecrement(this.props.item)}>-</button>
   
  </div>
        </div>

 
      <div className="line"></div>
        
      </div>
      
    );
  }
}

export default CartItem;