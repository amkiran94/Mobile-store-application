import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { ProductConsumer } from './ProductProvider'

class Product extends Component {
  render() {
    const { id, title, img, price, inCart } = this.props.product;
    return (
      <div className="col-9 mx-auto col-md-6 col-lg-3 my-3">
        <div className="card">
          <ProductConsumer>
            {value => {
              return (
                <div
                  className="img-container p-5"
                  onClick={() => value.handleData(id)}
                >
                  <Link to="/details">
                    <img src={img} alt="" className="card-img-top" />
                  </Link>
                  <button
                    className="btn btn-primary" type=""
                    disabled={inCart ? true : false}
                    onClick={() => {
                      value.addtoCart(id);
                      value.openModal(id);
                    }}
                  >
                    {inCart ? (
                      <p className="text-capitalize" disabled>
                        in cart
                      </p>
                    ) : (
                        <i className="fas fa-cart-plus" />
                      )}
                  </button>
                </div>
              );
            }}
          </ProductConsumer>
          <div className="card-footer d-flex justify-content-between">
            <p className="align-self-center mb-0">{title}</p>
          </div>
          <div className="card-footer d-flex justify-content-between">
            <h5 className="text-blue font-italic mb-0">
              <span className="mr-1"><i className="fas fa-rupee-sign"></i></span>
              {price.toLocaleString()}
            </h5>
          </div>
        </div>
      </div>
    )
  }
}
export default Product