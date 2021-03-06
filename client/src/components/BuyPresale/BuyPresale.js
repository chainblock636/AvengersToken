import React, { useState, useEffect } from "react";
import { ethers } from "ethers";
import abiAVET from "./../../abiAVET.json";
import abiSeedContract from "./../../abiSeedContract.json";

const BuyPresale = () => {   
    const min = 0.02;
    const max = 0.4;
    const errorStyle = {
        fontSize: "16px",
        color: "red",
        margin: 0
    }
       
    const [errorMessage, setErrorMessage] = useState(null);
    const [errorInput, setErrorInput] = useState(null);
    const [flag, setFlag] = useState(false);
    const [defaultAccount, setDefaultAccount] = useState("");
    const [balance, setBalance] = useState(0);
  
    const [provider, setProvider] = useState(null);
    const [signer, setSigner] = useState(null);
    const [tokenContract, setTokenContract] = useState(null);
    const [seedContract, setSeedContract] = useState(null);

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
                    setDefaultAccount(address);
                    setErrorMessage(null);
                    setFlag(true);
                    updateProvider();
                    getTokenBal();
                } catch (error) {
                    setFlag(false);
                    setErrorMessage("Blockchain connection error");
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
        const tokenAddress = "0x024A9Ac101587517BEd42FeFf0d304e500d58f73";
        const seedContractAddress = "0x4fc8ED67AA8C26b3983c5aB0AD61b9Beef19eB80";
        
        let tokenContract = new ethers.Contract(tokenAddress, abiAVET, signer);
        setTokenContract(tokenContract);

        let seedContract = new ethers.Contract(seedContractAddress, abiSeedContract, signer);
        setSeedContract(seedContract);
    }

    const getTokenBal = async () =>{
        try {
            let balance = await tokenContract.balanceOf(defaultAccount);
            balance = ethers.utils.formatUnits(balance, 8);
            setBalance(balance);
            setErrorMessage(null);
        } catch (error) {
            setErrorMessage("reload wallet");
            setFlag(false);
        }
    }

	const buySeedSale = async (event) => {
		event.preventDefault();
        setErrorInput(null);
        let amount = event.target.setAmount.value;
        if (!(!isNaN(amount) && amount.toString().indexOf('.') != -1))
        {
            setErrorInput("Enter a valid amount - Min: 0.02 BNB, Max: 0.4 BNB");
            return false
        }
        if (amount > max){
            setErrorInput("You cannot invest more than 0.4 BNB");
            return false
        };
        if (amount < min) {
            setErrorInput("minimum investment is 0.02 BNB");
            return false
        };
        connectWallet();
        try {
            await seedContract.functions.invest({
                value: ethers.utils.parseEther(amount),
                gasLimit: 100000,
                gasPrice: 20e9
            });
            setErrorMessage(null);
        } catch (error) {
            setErrorInput("Blockchain connection error");
            // console.log(error.message);
            // setErrorInput(error.message);
        }
	}

    if (window.ethereum) {
        window.ethereum.on('accountsChanged', function (accounts) {
            let address = accounts[0];
            setDefaultAccount(address);
            getTokenBal();
            connectWallet();
        })
    }

    useEffect(() => {
        connectWallet();
    }, [balance, defaultAccount]);

    return (
        <div>
            <section class="ex-lottery" id="buy-presale">
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
                                                        <h5 class="subtitle">
                                                            Limited offer
                                                        </h5>
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
                                                            {balance} <span>AVET</span>
                                                        </h4>
                                                        <span class="t-sm">
                                                            {/* 1BTC = 39746.90 USD */}
                                                        </span>
                                                    </div>
                                                </div>
                                                <div class="col-lg-8">
                                                    <div class="dipo_btc">
                                                        <div class="header-area">
                                                            <h4>1,800,000,000 AVET = 1 BNB (Limited offer)</h4>
                                                            <p>
                                                                Min Presale Investment 0.02BNB - Max Presale Investment 0.4BNB
                                                            </p>
                                                        </div>
                                                        <div class="form-area">
                                                            <div class="row">
                                                                <div class="col-md-12">
                                                                    <form  onSubmit={buySeedSale}>
                                                                        <div class="form-group">
                                                                            <label for="">Amount</label>
                                                                            <input type="text" id="setAmount" class="input-field" placeholder="Amount"/>
                                                                        </div>
                                                                        <p style={errorStyle} class="text-center">{errorInput}</p>
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
                                                            {/* Fair-launched by BabyCake Core Team */}
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
