import React, { useState, useEffect } from "react";
import towel from '../Images/towel1.jpg'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

function Store() {

    return (
        <div>
            <header class="main-header">
                <nav class="main-nav nav">
                    <ul>
                        <Link to="/">Go Home </Link>
                        <Link to="/store">Store </Link>
                        <Link to="/AmithBio">AmithBio </Link>
                    </ul>
                </nav>
                <h1 class="band-name band-name-large">Das Products</h1>
            </header>
            <section class="container content-section">
                <h2 class="section-header">Towels</h2>
                <div class="shop-items">
                    <div class="shop-item">
                        <span class="shop-item-title">Style 1</span>
                        <img class="shop-item-image" src={towel} />
                        <div class="shop-item-details">
                            <span class="shop-item-price">$9.99</span>
                            <button class="btn btn-primary shop-item-button" type="button">BUY</button>
                        </div>
                    </div>
                    <div class="shop-item">
                        <span class="shop-item-title">Style 2</span>
                        <img class="shop-item-image" src="Images/towel2.jpeg" />
                        <div class="shop-item-details">
                            <span class="shop-item-price">$12.99</span>
                            <button class="btn btn-primary shop-item-button" type="button">BUY</button>
                        </div>
                    </div>
                    <div class="shop-item">
                        <span class="shop-item-title">Style 3</span>
                        <img class="shop-item-image" src="Images/towel3.jpeg" />
                        <div class="shop-item-details">
                            <span class="shop-item-price">$15.99</span>
                            <button class="btn btn-primary shop-item-button" type="button">BUY</button>
                        </div>
                    </div>
                    <div class="shop-item">
                        <span class="shop-item-title">Style 4</span>
                        <img class="shop-item-image" src="Images/towel4.jpg" />
                        <div class="shop-item-details">
                            <span class="shop-item-price">$19.99</span>
                            <button class="btn btn-primary shop-item-button" type="button">BUY</button>
                        </div>
                    </div>
                </div>
            </section>
            <section class="container content-section">

                <h2 class="section-header">Washclothes</h2>

                <div class="shop-items">
                    <div class="shop-item">
                        <span class="shop-item-title">Style One</span>
                        <img class="shop-item-image" src="Images/washcloth1.jpg" />
                        <div class="shop-item-details">
                            <span class="shop-item-price">$4.99</span>
                            <button class="btn btn-primary shop-item-button" type="button">BUY</button>
                        </div>
                    </div>
                    <div class="shop-item">
                        <span class="shop-item-title">Style Two</span>
                        <img class="shop-item-image" src="Images/washcloth3.jpg" />
                        <div class="shop-item-details">
                            <span class="shop-item-price">$6.99</span>
                            <button class="btn btn-primary shop-item-button" type="button">BUY</button>
                        </div>
                    </div>
                </div>
            </section>
            <section class="container content-section">
                <h2 class="section-header">CART</h2>
                <div class="cart-row">
                    <span class="cart-item cart-header cart-column">ITEM</span>
                    <span class="cart-price cart-header cart-column">PRICE</span>
                    <span class="cart-quantity cart-header cart-column">AMOUNT</span>
                </div>
                <div class="cart-items">
                </div>
                <div class="cart-total">
                    <strong class="cart-total-title">Total</strong>
                    <span class="cart-total-price">$0</span>
                </div>
                <button class="btn btn-primary btn-purchase" type="button">Check Out</button>
            </section>
            <footer class="main-footer">
                <div class="container main-footer-container">
                    <h3 class="band-name">Das Products</h3>
                    <ul class="nav footer-nav">
                        <li>
                            <a href="https://www.youtube.com" target="_blank">
                                <img src="Images/YouTube Logo.png" />
                            </a>
                        </li>
                        <li>
                            <a href="https://www.facebook.com" target="_blank">
                                <img src="Images/Facebook Logo.png" />
                            </a>
                        </li>
                    </ul>
                </div>
            </footer>
        </div>
    );
}

export default Store;
