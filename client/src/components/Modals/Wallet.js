import React from 'react'
import { useState, useEffect } from "react";

const Wallet = () => {
    const [contractInfo, setContractInfo] = useState({
        message: "",
        address: "0xF46FFD755142c32cE1b4bF8d47bb7b4fdA61a5E4",
        tokenName: "-",
        tokenSymbol: "-",
        totalSupply: "-"
    });

    React.useEffect(() => {
        if (window.ethereum) { 
            console.log(window.ethereum);
            const message = "Connect to Binance Smart Chain";     
            setContractInfo({
                message
            });
        } else {
            const message = 'Current network "undefined", Install metamask or use blockchain enabled browser.';    
            setContractInfo({
                message
            });
        }
    }, []);
  
    return (
        <div>
			<div class="modal fade login-modal sign-in" id="signin" tabindex="-1" role="dialog" aria-labelledby="signin" aria-hidden="true">
				<div class="modal-dialog modal-dialog-centered " role="document">
					<div class="modal-content">
						<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
						<div class="modal-body">
                            <div class="tab-content" id="pills-tabContent">
                                <div class="tab-pane fade show active" id="pills-m_register" role="tabpanel" aria-labelledby="pills-m_register-tab">
                                    <div class="header-area">
                                        <p class="text">
                                            {contractInfo.message}
                                        </p>
                                    </div>
                                    <div class="form-area">
                                        {/* <form action="#" method="POST"> */}
                                            <div class="form-group">
                                                <button type="submit" class="mybtn2">Connect Wallet</button>
                                            </div>
                                            {/* <span class="bunnus_btn">
                                                <h4>Connect Wallet</h4>
                                            </span> */}
                                        {/* </form> */}
                                    </div>
                                </div>
                            </div>					
						</div>
					</div>
					</div>
			</div>
	    </div>
    )
}

export default Wallet
