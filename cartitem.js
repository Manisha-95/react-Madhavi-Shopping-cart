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
      /* <div class="card mb-3 container">
  <div class="row no-gutters">
    <div class="col-lg-4">
      <img src={this.props.item.name} width="50px"/>
    </div>
    <div class="col-lg-8">
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
      </div>
    </div>
  </div>
</div> */
        <div className="desc">
      
        <img src={this.props.item.name} width="50px"/>
      
        <p>{this.props.item.description}</p>
        <p>{this.props.item.itemQuan}</p>
        <span>{this.props.item.price}</span>
        </div>
 <br/>
        <button className="btn" onClick={()=> this.props.onIncrement(this.props.item)} >+</button>
        <button className="btn"disabled={this.props.item.quantity===0} onClick={()=> this.props.onDecrement(this.props.item)}  >-</button>
        
        <button className="btn" >{this.props.item.quantity}</button>
        <button onClick={()=>this.props.addtocart()}>Add to Cart</button>
      </div>
    );
  }
}

export default CartItem;