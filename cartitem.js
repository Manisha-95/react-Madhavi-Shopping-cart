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
  <div class="p-2 bd-highlight">{this.props.item.description}</div>
  <div class="p-2 bd-highlight">{this.props.item.itemQuan}</div>
  <div class="p-2 bd-highlight">{this.props.item.price}</div>
</div>
  
   </div>
  
</div> 

</div>

<div class="d-flex">
  <div class="p-2 bd-highlight">18% OFF</div>
  <div class="p-2 bd-highlight"><div className="round" onClick={()=> this.props.onIncrement(this.props.item)} >+</div>
  <div className="btn" >{this.props.item.quantity}</div>
      <div className="round" disabled={this.props.item.quantity===0} onClick={()=> this.props.onDecrement(this.props.item)}>-</div>
      
  </div>
  <div class="p-2 bd-highlight"> <button onClick={()=>this.props.addtocart()}>Add to Cart</button></div>
  
        </div>

 
      
        
      </div>
    );
  }
}

export default CartItem;