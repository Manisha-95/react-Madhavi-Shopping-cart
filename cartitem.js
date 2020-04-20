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
           <div className="desc row">
           <div class="d-flex bd-highlight">
  <div class="p-2 flex-grow-1 bd-highlight"><img  src={this.props.item.name} width="50px"/></div>
  <div class="p-2 bd-highlight align-self-stretch">
  <div class="d-flex flex-column bd-highlight mb-3">
  <div class="p-2 bd-highlight">{this.props.item.description}</div>
  <div class="p-2 bd-highlight">{this.props.item.itemQuan}</div>
  <div class="p-2 bd-highlight">{this.props.item.price}</div>
</div>
  <p>
        
        </p>
   </div>
   <div class="p-2 bd-highlight align-self-center">
        <button className="btn" onClick={()=> this.props.onIncrement(this.props.item)} >+</button>
        <button className="btn"disabled={this.props.item.quantity===0} onClick={()=> this.props.onDecrement(this.props.item)}  >-</button>
        
        <button className="btn" >{this.props.item.quantity}</button>
        <button onClick={()=>this.props.addtocart()}>Add to Cart</button>
        </div>
</div> 
        </div>
        
      </div>
    );
  }
}

export default CartItem;