import React, { Component } from 'react';
import { render } from 'react-dom';
import './style.css';
import CartItem from './cartitem';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import  FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { faTumblr, faTwitter } from '@fortawesome/free-brands-svg-icons';

class Cart extends Component {
  constructor() {
    super();
    this.state = {
        items : [
          {quantity: 1, name: 'https://m.media-amazon.com/images/I/71m8eUIO8YL._AC_UY218_ML3_.jpg', description:"Nature Vit Soy Milk Powder, Non-GMO and 49% Protein",itemQuan:"MRP:400",id: 1, price: 320, lineTotal: 0},
          {quantity: 1, name: 'https://m.media-amazon.com/images/I/81EEyEAOGIL._AC_UY218_ML3_.jpg',description:"The Divine Foods Organic Golden Milk, Latte (250 gm)",itemQuan:"MRP:995", id: 2, price:851, lineTotal: 0},
          {quantity: 1, name: 'https://m.media-amazon.com/images/I/61A3UeaGxiL._AC_UY218_ML3_.jpg',description:"Sri Sri Tattva Ojasvita Chocolate Powder - 500 g",itemQuan:"MRP:265", id: 3, price: 249, lineTotal: 0},
          {quantity: 1, name: 'https://m.media-amazon.com/images/I/61A3UeaGxiL._AC_UY218_ML3_.jpg',description:"Sri Sri Tattva Ojasvita Chocolate Powder - 500 g",itemQuan:"MRP:265", id: 3, price: 249, lineTotal: 0},
          {quantity: 1, name: 'https://m.media-amazon.com/images/I/61A3UeaGxiL._AC_UY218_ML3_.jpg',description:"Sri Sri Tattva Ojasvita Chocolate Powder - 500 g",itemQuan:"MRP:265", id: 3, price: 249, lineTotal: 0},
          {quantity: 1, name: 'https://m.media-amazon.com/images/I/61A3UeaGxiL._AC_UY218_ML3_.jpg',description:"Sri Sri Tattva Ojasvita Chocolate Powder - 500 g",itemQuan:"MRP:265", id: 3, price: 249, lineTotal: 0},
          {quantity: 1, name: 'https://m.media-amazon.com/images/I/61A3UeaGxiL._AC_UY218_ML3_.jpg',description:"Sri Sri Tattva Ojasvita Chocolate Powder - 500 g",itemQuan:"MRP:265", id: 3, price: 249, lineTotal: 0},
          {quantity: 1, name: 'https://m.media-amazon.com/images/I/71m8eUIO8YL._AC_UY218_ML3_.jpg', description:"Nature Vit Soy Milk Powder, Non-GMO and 49% Protein",itemQuan:"MRP:400",id: 1, price: 320, lineTotal: 0}         
      ],
      cartTotal : 0,
      cartItemsCount : 0
    }
  }

  onIncrementHandler = (item) => {
    var cloneItems = [...this.state.items];
    console.log(cloneItems);
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
addTocart =()=>{
  this.setState({cartItemsCount: cartItemsCount});
  this.setState({cartTotal: total});
}
  onResetHandler = () => {
    var cloneItems = [...this.state.items];
     for(var i=0; i<= cloneItems.length-1; i++){
        cloneItems[i].quantity=0;
     }

     this.setState({items:cloneItems});
     this.setState({cartTotal:0});
     this.setState({cartItemsCount:0});
  }

  itemsCount = () => {
    var countItems = this.state.items.reduce((total, item) => (total + item.quantity), 0);
    return countItems;
  }

  cartTotal = () => {
    var total = this.state.items.reduce((total, item) => (total + (item.quantity * item.price)), 0);
    return total;
  }
  // addTocart = () =>{
  //   console.log("hgjhg");
     
  // }

  addTocart = () => {
    var count = this.itemsCount();
    this.setState({cartItemsCount: count});
    var total = this.cartTotal();
    this.setState({cartTotal: total});
  }

  render() {  
    return (
      <div className="cart container">  
          
          <div className="cart-header">
                <span className="btn btn-info">Cart items: {this.state.cartItemsCount}</span>
                <span className="btn btn-info">Cart total: ${this.state.cartTotal}</span>
                <span title="Reset Cart" className="btn btn-info" onClick={this.onResetHandler}>reset</span>
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