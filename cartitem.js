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
      
        <img src={this.props.item.name} width="50px"/>
      
        <p>{this.props.item.description}</p>
        <p>{this.props.item.itemQuan}</p>
        <p>{this.props.item.price}</p>
        
 <br/>
        <button className="btn" onClick={()=> this.props.onIncrement(this.props.item)} >+</button>
        <button className="btn"disabled={this.props.item.quantity===0} onClick={()=> this.props.onDecrement(this.props.item)}  >-</button>
        
        <button className="btn" >{this.props.item.quantity}</button>
        <button onClick={()=>this.props.addtocart()}>Add to Cart</button>
        </div>
      </div>
    );
  }
}

export default CartItem;