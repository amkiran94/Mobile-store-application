import React, { Component } from 'react'
import { ProductConsumer } from './ProductProvider'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

class Modal extends Component {
    render() {
        return (
            <ProductConsumer>
                {value => {
                    const { modalOpen, closeModal } = value;
                    const { img, title, price } = value.modalProduct;
                    console.log(value.modalProduct)

                    if (!modalOpen) {
                        return null;
                    } else {
                        return (
                            <ModalContainer>
                                <div className="container">
                                    <div className="row">
                                        <div id="modal" className="col-8 mx-auto col-md-6 col-lg-4 text-center text-capitalize py-5">
                                            <h5>item added to the cart</h5>
                                            <img src={img} alt="product" className="img-fluid"/>
                                            <h5>{title}</h5>
                                            <h5 className="text-muted"><i className="fas fa-rupee-sign"></i> {price.toLocaleString()}</h5>
                                            <Link to="/">
                                                <button className=" btn btn-dark text-capitalize mr-3" onClick={() => closeModal()}>back to store</button>
                                            </Link>
                                            <Link to="cart">
                                                <button className=" btn btn-dark text-capitalize" onClick={() => closeModal()}>go to cart</button>
                                            </Link>
                                        </div>

                                    </div>
                                </div>
                            </ModalContainer>)
                    }
                }}
            </ProductConsumer>
        )
    }
}
const ModalContainer = styled.div`
position:fixed;
top:0;
left:0;
right:0;
bottom:0;
background:rgba(0,0,0,0.4);
display:flex;
align-items:center;
justify-content:center;
#modal{
    background:var(--mainWhite);
}

`
export default Modal
