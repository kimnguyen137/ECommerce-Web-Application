﻿import React, { Component } from 'react';
import AuthService from './_Services/AuthService';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from 'axios';
import './Checkout.css';
import { Container } from 'reactstrap';
import  CartItem  from './CartData/CartItem';
import CartTotal from './CartData/CartTotal';
import { Cart } from './Cart';
import { Link } from 'react-router-dom';

export class Checkout extends Component {

/*    constructor(props) {
        super(props)*/
        state = {
            Name: '', NameError:"",
            Address1: '', Address1Error: "",
            Address2: '', Address2Error: "",
            City: '', CityError: "",
            State: '', StateError: "",
            Zip5: '', Zip5Error: "",
            Zip4: '', Zip4Error: "",
            ValidateResult: {},
            cardname: "", CardNameError:"",
            cartnumber: "", CardNumberError: "",
            expmonth: "", ExpMonthError: "",
            expyear: "", ExpYearError: "",
            cvv: "", CvvError: ""
        }
        /*this.handleChange = this.handleChange.bind(this);
        this.handleValidate = this.handleValidate.bind(this);*/

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value })
    }
    handleValidate = event => {
        event.preventDefault();
        //console.log(this.state)       
        axios.post('/api/validate/validate', this.state)
            .then(response => {
                this.setState({ ValidateResult: response.data });
                localStorage.setItem("ship", JSON.stringify(response.data));
                console.log(this.state.ValidateResult)
            })
            .catch(error => {
                console.log(error)
            })
    };

    render() {
        const { Name, Address1, Address2, City, State, Zip5, Zip4, cardname, cardnumber, expmonth, expyear, cvv } = this.state;
        return (
            <div class="row rrr">
                <div className="page-header" style={{marginLeft: '50px'}}><h1>CHECKOUT INFORMATION</h1></div>
                <div class="col-75 c75">
                    <div class="container ctn">
                        <form onSubmit={this.handleValidate}>

                            <div class="row rrr">
                                <div class="col-50 c50">
                                    <h3>Shipping Address</h3>
                                    <label for="fname"><i class="fa fa-user"></i> Full Name</label>
                                    <input onChange={this.handleChange} value={Name} type="text1" id="fname" name="Name" placeholder="John M. Doe" />
                                    <label for="adr"><i class="fa fa-address-card-o"></i> Address 1</label>
                                    <input onChange={this.handleChange} value={Address1} type="text1" id="adr1" name="Address1" placeholder="542 W. 15th Street" />
                                    <label for="adr"><i class="fa fa-address-card-o"></i> Address 2 (optional)</label>
                                    <input onChange={this.handleChange} value={Address2} type="text1" id="adr2" name="Address2" placeholder="Apt 123" />
                                    <label for="city"><i class="fa fa-institution"></i> City</label>
                                    <input onChange={this.handleChange} value={City} type="text1" id="city" name="City" placeholder="New York" />

                                    <div class="row rrr">
                                        <div class="col-50 c50">
                                            <label for="state">State</label>
                                            <input onChange={this.handleChange} value={State} type="text1" id="state" name="State" placeholder="NY" />
                                        </div>
                                        <div class="col-50 c50">
                                            <label for="zip5">Zip 5</label>
                                            <input onChange={this.handleChange} value={Zip5} type="text1" id="zip" name="Zip5" placeholder="10001" />
                                        </div>
                                        <div class="col-50 c50">
                                            <label for="zip4">Zip 4</label>
                                            <input onChange={this.handleChange} value={Zip4} type="text1" id="zip4" name="Zip4" placeholder="1111" />
                                        </div>
                                    </div>
                                </div>

                                <div class="col-50 c50">
                                    <h3>Payment</h3>
                                    <label for="fname">Accepted Cards</label>
                                    <div class="icon-container">
                                        <i id="visa" class="fa fa-cc-visa" >   </i>
                                        <i id="amex" class="fa fa-cc-amex" >   </i>
                                        <i id="mastercard" class="fa fa-cc-mastercard" >   </i>
                                        <i id="discover" class="fa fa-cc-discover" >   </i>
                                    </div>
                                    <label for="cname">Name on Card</label>
                                    <input onChange={this.handleChange} value={cardname} type="text1" id="cname" name="cardname" placeholder="John More Doe" />
                                    <label for="ccnum">Credit card number</label>
                                    <input onChange={this.handleChange} value={cardnumber} type="text1" id="ccnum" name="cardnumber" placeholder="1111-2222-3333-4444" />
                                    <label for="expmonth">Exp Month</label>
                                    <input onChange={this.handleChange} value={expmonth} type="text1" id="expmonth" name="expmonth" placeholder="September" />

                                    <div class="row rrr">
                                        <div class="col-50 c50">
                                            <label for="expyear">Exp Year</label>
                                            <input onChange={this.handleChange} value={expyear} type="text1" id="expyear" name="expyear" placeholder="2018" />
                                        </div>
                                        <div class="col-50 c50">
                                            <label for="cvv">CVV</label>
                                            <input onChange={this.handleChange} value={cvv} type="text1" id="cvv" name="cvv" placeholder="352" />
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <label>
                                <input type="checkbox" checked="checked" name="sameadr" /> Billing address same as billing
                            </label>

                            <button type="submit" >validate</button>

                            {this.state.ValidateResult.address1 != "" && // able to return result
                                <div>
                                <p2>Shipping Address Recommend:</p2><br/><br/> 
                                {this.state.ValidateResult.name} <br />
                                {this.state.ValidateResult.address1} <br />
                                {this.state.ValidateResult.address2} <br />
                                {this.state.ValidateResult.city} <br />
                                {this.state.ValidateResult.state} <br />
                                {this.state.ValidateResult.zip5}-{this.state.ValidateResult.zip4}
                                
                                </div>
                            }
                            {this.state.ValidateResult.address1 == "" && // return null if couldn't validate
                                <div>
                                    <p2>Cannot validate your address, please type it correcty</p2>
                                </div>
                            }


                            {/*<input type="submit" value="Continue to checkout" class="btnnn" />*/}
                            <Link to='/confirm'>
                                <button>Continue to checkout</button>
                            </Link>
                        </form>
                    </div>
                </div>

                <div class="col-25 ccc">
                    <div class="container">
                        {/*<h4>Cart
                            <span id="pr" class="price" >
                                <i class="fa fa-shopping-cart"></i>
                                <b>4</b>
                            </span>
                        </h4>
                        <p><a href="#">Product 1</a> <span class="price">$15</span></p>
                        <p><a href="#">Product 2</a> <span class="price">$5</span></p>
                        <p><a href="#">Product 3</a> <span class="price">$8</span></p>
                        <p><a href="#">Product 4</a> <span class="price">$2</span></p>
                        <hr/>
                            <p>Total <span id="pr" class="price" ><b>$30</b></span></p>*/}
                        <Cart/>
                        
                    </div>
                </div>
            </div>

            );
        }
    }
