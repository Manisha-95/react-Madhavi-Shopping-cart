import React, { Component } from 'react';
import { render } from 'react-dom';
import './style.css';
import CartItem from './cartitem';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button,Modal} from 'react-bootstrap';
import  FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { faTumblr, faTwitter } from '@fortawesome/free-brands-svg-icons';
import 'jquery/dist/jquery.min.js';
import 'bootstrap/dist/js/bootstrap.min.js';

class Cart extends Component {
  constructor() {
    super();
    this.state = {
        items : [
          {quantity: 1, name: 'https://m.media-amazon.com/images/I/71m8eUIO8YL._AC_UY218_ML3_.jpg', description:"Nature Vit Soy Milk Powder, Non-GMO and 49% Protein",itemQuan:"MRP:400",id: 1, price: 320, discount:"20%",lineTotal: 0},
          {quantity: 1, name: 'https://m.media-amazon.com/images/I/81EEyEAOGIL._AC_UY218_ML3_.jpg',description:"The Divine Foods Organic Golden Milk, Latte (250 gm)",itemQuan:"MRP:995", id: 2, price:851, discount:"14%", lineTotal: 0},
          {quantity: 1, name: 'https://m.media-amazon.com/images/I/61A3UeaGxiL._AC_UY218_ML3_.jpg',description:"Sri Sri Tattva Ojasvita Chocolate Powder - 500 g",itemQuan:"MRP:265", discount:"6%", id: 3, price: 249, lineTotal: 0},
          {quantity: 1, name: 'https://m.media-amazon.com/images/I/61oy+mHuntL._AC_UL320_ML3_.jpg',description:"As Fresh Freeze Dried A2 Cow Milk Powder 100g",itemQuan:"MRP:550", discount:"17%", id: 4, price: 454, lineTotal: 0},
          {quantity: 1, name: 'https://m.media-amazon.com/images/I/71rnnh9UBQL._AC_UL320_ML3_.jpg',description:"Aadvik Freeze Dried Camel Milk Powder | Pack of 30g x 10 Sachets (300g)",itemQuan:"MRP:1200",discount:"7%", id: 5, price: 1115, lineTotal: 0},
          {quantity: 1, name: 'https://m.media-amazon.com/images/I/71nz91LZfQL._AC_UL320_ML3_.jpg',description:"Urban Platter Vanilla Bean Powder, 10 g",itemQuan:"MRP:600", discount:"5%", id: 6, price: 570, lineTotal: 0},
          {quantity: 1, name: 'https://m.media-amazon.com/images/I/71MO3fAn6GL._AC_UL320_ML3_.jpg',description:"Nutra Vita Freeze Dried A2 Gir Cow Milk Powder 1000 g (2x500g)",itemQuan:"MRP:6000", id: 7, price: 5000, discount:"17%", lineTotal: 0},
          {quantity: 1, name: 'https://m.media-amazon.com/images/I/71x9onReBAL._AC_UL320_ML3_.jpg', description:"Nestle Everyday Dairy Whitener, 400g Pouch",itemQuan:"MRP:150",id: 8, price: 120,discount:"20%", lineTotal: 0},
          {quantity: 1, name: 'https://m.media-amazon.com/images/I/715MRs2VY2L._AC_UL320_ML3_.jpg', description:"The Divine Foods Organic Golden Milk",itemQuan:"MRP:300",id: 9, price: 280,discount:"7%", lineTotal: 0},
          {quantity: 1, name: 'https://m.media-amazon.com/images/I/41ViFkbTYQL._AC_UL320_ML3_.jpg', description:"SriSatymev ® Skimmed Milk Powder, 500 g",itemQuan:"MRP:549",id: 10, price: 330,discount:"40%", lineTotal: 0}         
      ],
      cartTotal : 0,
      cartItemsCount : 0
    }
  }

  onIncrementHandler = (item) => {
    var cloneItems = [...this.state.items];
       var index = cloneItems.indexOf(item);
    cloneItems[index].quantity++;
    this.setState({items:cloneItems});

   var cartItemsCount = this.state.cartItemsCount + 1;
  //   this.setState({cartItemsCount: cartItemsCount});

   var total = this.state.cartTotal + (1 * item.price);
  //   this.setState({cartTotal: total});
  }

  onDecrementHandler = (item) => {
    var cloneItems = [...this.state.items];
    var index = cloneItems.indexOf(item);
    cloneItems[index].quantity--;
    this.setState({items:cloneItems});

     var cartItemsCount = this.state.cartItemsCount - 1;
    // this.setState({cartItemsCount: cartItemsCount});

    var total = this.state.cartTotal - (1 * item.price);
    // this.setState({cartTotal: total});
  }
/* addTocart =()=>{
  this.setState({cartItemsCount: cartItemsCount});
  this.setState({cartTotal: total});
} */
  onResetHandler = () => {
    var cloneItems = [...this.state.items];
     for(var i=0; i<= cloneItems.length-1; i++){
        cloneItems[i].quantity=0;
     }

     this.setState({items:cloneItems});
     this.setState({cartTotal:0});
     this.setState({cartItemsCount:0});
  }

  
  addTocart = (item) => {
     var cloneItems = [...this.state.items];
    var index = cloneItems.indexOf(item);
    console.log(index);
    var itemscount;
    itemscount= this.state.cartItemsCount+cloneItems[index].quantity;
    var total=this.state.cartTotal+cloneItems[index].price;
    this.setState({cartItemsCount: itemscount});
     this.setState({cartTotal: total});
    
  }

  render() {  
    return (
      <div className="cart container">  
          
          <div className="cart-header fixed-top">
                <span className="btn btn-info">Cart items: {this.state.cartItemsCount}</span>
                <span className="btn btn-info">Cart total:{this.state.cartTotal}</span>
                <span title="Reset Cart" className="btn btn-info" onClick={this.onResetHandler}>reset</span>
               

<button type="button" class="btn btn-primary mod" data-toggle="modal" data-target="#exampleModal">
  Checkout
</button>

<div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Thank You For Shopping</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <h4>Total Amount: {this.state.cartTotal}</h4>

        !!!!Transaction Successful.!!!!
      </div>
    
    </div>
  </div>
</div>
          </div>   
          {
            this.state.items.map(item=> 
              <CartItem 
                key={item.id} 
                item={item}
                onIncrement={this.onIncrementHandler}
                onDecrement={this.onDecrementHandler}
                addtocart={this.addTocart}
              />
            )
          }      
      </div>
    );
  }
}

export default Cart;