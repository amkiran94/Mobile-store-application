import React from 'react'
import { Link } from 'react-router-dom'

function CartTotal({ value }) {
  const { cartSubTotal,
    cartTax,
    cartTotal, clearCart } = value;
  return (
    <React.Fragment>
      <div className="container">
        <div className="row">
          <div className="col-10 mt-2 ml-sm-5 ml-md-auto col-sm-8 text-capitalize text-right">
            <Link to="/">
              <button className="btn btn-danger text-uppercase mb-3 px-5" type="button" onClick={() => clearCart()}>Clear cart</button>
            </Link>
            <h5>
              <span className="text-title"> subtotal :</span>{" "}
              <strong><i className="fas fa-rupee-sign"></i> {cartSubTotal.toLocaleString()} </strong>
            </h5>
            <h5>
              <span className="text-title"> tax :</span>{" "}
              <strong><i className="fas fa-rupee-sign"></i> {cartTax.toLocaleString()} </strong>
            </h5>
            <h5>
              <span className="text-title"> total :</span>{" "}
              <strong><i className="fas fa-rupee-sign"></i> {cartTotal.toLocaleString()} </strong>
            </h5>
            <button className="btn btn-primary">Check Out</button>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default CartTotal
