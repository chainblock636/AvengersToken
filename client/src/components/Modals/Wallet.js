import React from 'react'
import { useState, useEffect } from "react";
import { ethers } from "ethers";
import abiAVET from "./../../abiAVET.json";

const Wallet = () => {
    const [errorMessage, setErrorMessage] = useState(null);
    const [flag, setFlag] = useState(false);
    const [defaultAccount, setDefaultAccount] = useState("");
    const [balance, setBalance] = useState(10);
    const [connButtonText, setConnButtonText] = useState("Connect Wallet");
  
    const [provider, setProvider] = useState(null);
    const [signer, setSigner] = useState(null);
    const [tokenContract, setTokenContract] = useState(null);

    async function connectWallet() {
        if (window.ethereum) {
            // try {
                // check if the chain to connect to is installed
                // await window.ethereum.request({
                //   method: 'wallet_switchEthereumChain',
                //   params: [{ chainId: '0x38' }], // chainId must be in hexadecimal numbers
                // });
                // setErrorMessage(null);
                try {
                        let accounts = await window.ethereum.request({
                        method: "eth_requestAccounts"
                    });
                    let address = accounts[0];
                    setConnButtonText("Wallet Connected");
                    setDefaultAccount(address);
                    setErrorMessage(null);
                    setFlag(true);
                    updateProvider();
                    getTokenBal();
                } catch (error) {
                    setErrorMessage(error["message"]);
                }
            // } catch (error) {
            //     // This error code indicates that the chain has not been added to MetaMask
            //     // if it is not, then install it into the user MetaMask
            //     if (error.code === 4902) {
            //       try {
            //         await window.ethereum.request({
            //           method: 'wallet_addEthereumChain',
            //           params: [
            //             {
            //                 chainId: '0x38',
            //                 chainName: 'Binance Smart Chain',
            //                 nativeCurrency:
            //                     {
            //                         name: 'BNB',
            //                         symbol: 'BNB',
            //                         decimals: 18
            //                     },
            //                 rpcUrls: ['https://bsc-dataseed.binance.org/'],
            //                 blockExplorerUrls: ['https://bscscan.com/'],
            //             },
            //           ],
            //         });
            //       } catch (addError) {
            //         setErrorMessage("Could not find Binance Smart Chain Network. Try adding the BSC to your metamask.");
            //       }
            //     }
            //     setErrorMessage("Binance Smart Chain is not in use. Try switching to the BSC network.");
            // }
        } else {
          setErrorMessage('Install metamask or use blockchain enabled browser.');
        }
    }

    const updateProvider = () =>{
        let provider = new ethers.providers.Web3Provider(window.ethereum);
        setProvider(provider);

        let signer = provider.getSigner();
        setSigner(signer);
        const tokenAddress = "0xF46FFD755142c32cE1b4bF8d47bb7b4fdA61a5E4";
        
        let tokenContract = new ethers.Contract(tokenAddress, abiAVET, signer);
        setTokenContract(tokenContract);
    }

    const getTokenBal = async () =>{
        console.log(tokenContract);
        console.log("accont ", defaultAccount);
        let balance = await tokenContract.balanceOf(defaultAccount);
        console.log("bal 1 ", balance);
        balance = ethers.utils.formatUnits(balance, 6);
        console.log("Bal 2 ", balance);
        setBalance(balance);
    }

    useEffect(() => {
        connectWallet();
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
                                    <div class="header-area" style={{padding: 0}}>
                                        <p class="text" style={{color: "#ea842a"}}>
                                            {errorMessage}
                                        </p>
                                        {flag && (
                                            <div>
                                                <h4 class="title" style={{fontSize: "15px"}}>
                                                address:
                                                </h4>
                                                <p class="text" style={{color: "#FFF"}}>
                                                    {defaultAccount}
                                                </p>
                                                <h4 class="title" style={{fontSize: "15px"}}>
                                                balance:
                                                </h4>
                                                <span class="bunnus_btn">
                                                    <h4>{balance} AVET</h4>
                                                </span>
                                            </div>
                                        )}
                                    </div>
                                    <div class="form-area">
                                        <div class="form-group">
                                            <button type="submit" onClick={connectWallet} class="mybtn2">{connButtonText}</button>
                                        </div>
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
