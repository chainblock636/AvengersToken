import React, { useEffect, useState } from "react";

const BuyPresale = () => {  
    return (
        <div>
            <section class="ex-lottery" id="buypresale">
                <div class="container">
                    <div class="row">
                        <div class="col-xl-12">
                            <main>
                                <div class="main-box wallet-box">
                                    <div class="wallet-tab-menu">
                                        <ul class="nav" id="pills-tab" role="tablist">
                                            <li class="nav-item" role="presentation">
                                                <div class="sh-wrpper">
                                                    <img src="assets/images/arcive/i1.png" alt="" />
                                                    <div class="section-heading">
                                                        <h2 class="title ">
                                                        Early Investors
                                                        </h2>
                                                    </div>
                                                </div>
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
                                                            <h4>1,800,000,000 AVET = 1 BNB</h4>
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
                                                                        <button type="submit" class="mybtn2">Buy</button>
                                                                    </form>
        
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="notice-area">
                                                            {/* <div style={{overflowX: "auto"}}>
                                                                <table>
                                                                    <tr>
                                                                        <th style={{width: "75%"}}>
                                                            <p><span>Presale Price:</span>1,650,000,000 AVET = 1 BNB </p>
                                                                        </th>
                                                                        <th>
                                                            <p><span>31st of Dec, 2021</span></p>
                                                                        </th>
                                                                    </tr>
                                                                </table>
                                                            </div> */}
                                                            <p><span>Presale Price:</span>1,650,000,000 AVET = 1 BNB <span>31st of Dec, 2021</span></p>
                                                            <p><span>Public Sale:</span>1,500,000,000 AVET = 1 BNB <span>11th of Feb, 2022</span></p>
                                                            <p><span>Listing Price:</span>1,200,000,000 AVET = 1 BNB <span>13th of Feb, 2022</span></p>
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
