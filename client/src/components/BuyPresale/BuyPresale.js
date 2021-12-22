import React, { useEffect, useState } from "react";

const BuyPresale = () => {  
    React.useEffect(() => {
        if (window.ethereum) {
            console.log(window.ethereum);
        } else {
            alert('Current network "undefined", Use ethereum enabled browser.');
        }
    }, []);
    
    return (
        <div>
            <section class="ex-lottery">
                <div class="container">
                    <div class="row">
                        <div class="col-xl-12">
                            <main>
                                <div class="main-box wallet-box">
                                    <div class="wallet-tab-menu">
                                        <ul class="nav" id="pills-tab" role="tablist">
                                            <li class="nav-item" role="presentation">
                                                <a class="nav-link active">Buy Presale</a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div class="wallet-tab-content" id="pills-tabContent">
                                        <div class="dipo-box">
                                            <div class="row">
                                                <div class="col-lg-4">
                                                    <div class="current-balance">
                                                        <p>Current Balance</p>
                                                        <h4>
                                                            0.00051 <span>BTC</span>
                                                        </h4>
                                                        <span class="t-sm">
                                                            1BTC = 39746.90 USD
                                                        </span>
                                                    </div>
                                                </div>
                                                <div class="col-lg-8">
                                                    <div class="dipo_btc">
                                                        <div class="header-area">
                                                            <h4>Withdraw BITCOIN</h4>
                                                            <p>
                                                                Min Presale Investment 0.02BNB - Max Presale Investment 0.4BNB
                                                            </p>
                                                        </div>
                                                        <div class="form-area">
                                                            <div class="row">
                                                                <div class="col-md-12">
                                                                    <form action="#">
                                                                        <div class="form-group">
                                                                            <label for="">Amount</label>
                                                                            <input type="text" class="input-field" placeholder="Amount"/>
                                                                        </div>
                                                                        <div class="form-group">
                                                                            <label for="">Payment Address</label>
                                                                            <input type="text" class="input-field" placeholder="Payment Address"/>
                                                                        </div>
                                                                        <button type="submit" class="mybtn2">Submit</button>
                                                                    </form>
        
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="notice-area">
                                                            <p><span>Transaction fee:</span> Your withdrawal will also have 0.0006 BTC  subtracted to cover the transaction fee.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </main>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default BuyPresale
