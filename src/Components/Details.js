import React, { Component } from 'react'
import { ProductConsumer } from './ProductProvider'
import { Link } from 'react-router-dom'

class Details extends Component {
    render() {
        return (
            <ProductConsumer>
                {(value) => {
                    const { id, company, img, info, price, title, inCart } = value.detailProduct;
                    return (
                        <div className="container py-1">
                            <div className="row">
                                <div className="col-10 text-center mx-auto text-slanted text-blue my-5" >
                                    <h1>{title}</h1>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-10 mx-auto col-md-6 my-3">
                                    <img src={img} className="img-fluid" alt="product" />
                                </div>
                                <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                                    <h2>Model : {title}</h2>
                                    <h4 className="text-title text-uppercase text-muted mt-3 mb-2">made by : <span className="text-uppercase">{company}</span></h4>
                                    <h4 className="text-blue"><strong>price : <i className="fas fa-rupee-sign"></i> {price.toLocaleString()} </strong></h4>
                                    <p className="text-capitalize font-weight-bold mt-3 mb-0">info about the product:</p>
                                    <p className="text-muted lead">{info}</p>
                                    <div className="mr-2">
                                        <Link to="/">
                                            <button className="btn btn-primary mr-2 text-capitalize">back to products</button>
                                        </Link>
                                        <button className="btn btn-warning text-capitalize"
                                            disabled={inCart ? true : false}
                                            onClick={() => {
                                                value.addtoCart(id);
                                                value.openModal(id);
                                            }}
                                        >
                                            {inCart ? "incart" : "add to cart"}
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                }}
            </ProductConsumer>)
    }
}

export default Details
