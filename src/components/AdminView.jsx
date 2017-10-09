import React, { Component } from 'react'
import Product from './Product'
import AdminForm from './AdminForm'

class AdminView extends Component {
  render () {
    return (
      <div>
        <h1>Admin View</h1>
        <h2>Products</h2>
        <div>
          { this.props.productList.map((product, index) => {
            return (
              <div key={index}>
                <Product
                  productName={product.productName}
                  price={product.price}
                  description={product.description}
                />
                <button onClick={() => this.props.deleteProductFromProductList(index)}>Delete</button>
              </div>

            )
          }) }
        </div>
        <h2>Create A New Product</h2>
        <AdminForm addProductToProductList={this.props.addProductToProductList} />
      </div>
    )
  }
}

export default AdminView