import React, { Component } from 'react'
import AdminView from './AdminView'
import ShopView from './ShopView'
import CartView from './CartView'

class Shop extends Component {
  constructor () {
    super()

    this.state = {
      isAdmin: true,
      productList: [
        {
          productName: 'Hammer',
          description: 'Its a hammer',
          price: 12.3
        },
        {
          productName: 'Nail',
          description: 'Its a nail',
          price: 0.12
        }
      ],

      cartList: [{}]
    }
  }


  addProductToCartList = (newCartItem) => {
    const newCartList = [...this.state.cartList]
    newCartList.push(newCartItem)
    this.setState({cartList: newCartList})
  }

  addProductToProductList = (newProduct) => {
    const newProductList = [...this.state.productList]
    newProductList.push(newProduct)
    this.setState({productList: newProductList})
  }

  deleteProductFromProductList = (id) => {
    const newProductList = [...this.state.productList]
    newProductList.splice(id, 1)
    this.setState({productList: newProductList})
  }

  toggleIsAdmin = () => {
    this.setState({isAdmin: !this.state.isAdmin})
  }

  render () {
    return (
      <div >
        <button onClick={this.toggleIsAdmin}>Toggle Admin</button>
        <div className="shop">
          <div className="products">
            {this.state.isAdmin
              ? <AdminView
                productList={this.state.productList}
                addProductToProductList={this.addProductToProductList}
                deleteProductFromProductList={this.deleteProductFromProductList}
              /> : <ShopView
                productList={this.state.productList}
                addProductToCartList={this.addProductToCartList}
              />}
          </div>
          <CartView 
              cartList={this.state.cartList}
          />
        </div>
      </div>
    )
  }
}

export default Shop