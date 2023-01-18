import React, {useState} from 'react'
import "./Navbar.css"

export default function Navbar() {

    const [errorMessage, setErrorMessage] = useState(null);
	const [connButtonText, setConnButtonText] = useState('Connect Wallet');

	const connectWalletHandler = () => {
		if (window.ethereum && window.ethereum.isMetaMask) {
			console.log('MetaMask Here!');

			window.ethereum.request({ method: 'eth_requestAccounts'})
			.then(result => {
				// accountChangedHandler(result[0]);
				setConnButtonText('Wallet Connected');
				// getAccountBalance(result[0]);
			})
			.catch(error => {
				setErrorMessage(error.message);
			
			});

		} else {
			console.log('Need to install MetaMask');
			setErrorMessage('Please install MetaMask browser extension to interact');
		}
	}



  return (
    <>

    <nav class="navbar navbar-default navbar-fixed-top transparent" id="nav1"> 
    <div class="container-fluid">
        <a class="navbar-brand" href="#">Navbar</a>
        <button type="button" class="btn btn-primary" onClick={connectWalletHandler}>Primary</button>
    </div>
    </nav>

    </>
  )
}
