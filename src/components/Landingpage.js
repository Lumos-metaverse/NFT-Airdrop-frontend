import React from 'react'
import "./Landingpage.css"

export default function Landingpage() {
  return (
    <>
      <div className="container" class="landing-page-container">
      <div className="row">
        <div className="col md-12 sm-12">
          <h1 className="landing-page-heading">
            NFT Air Drop
          </h1>



          <p className="landing-page-text">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
          when an unknown printer took a galley of type and scrambled it to make a 
          </p>

          <p className="landing-page-text"> 
          <h3>Lorem Ipsum</h3>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
          when an unknown printer took a galley of type and scrambled it to make a 
          </p>


        </div>
        <div className="col md-12 sm-12">  

          <div className='container' id="login-card">
          {/* area for metamask */}
              <div className="metamask">
                <img type="button" className='btn metamask-image' src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/metamask-icon.png" />
                {/* <button type="button" class="btn btn-light">connect your wallet</button> */}
                <p className='metamask-text'>connect your metamask wallet by pressing on metamask image</p>
              </div>


          {/* area for email field entry */}
              <div className='email-area'>
              <div class="form-floating mb-3 ">
                <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com"/>
                <label for="floatingInput">Email address</label>
              </div>
              <p>*put you same mail id which you used while filling whitelist form*</p>
              </div>

          {/* area for claiming nft*/}
              <div className='nft-button-area'>
                <button type="button" className="btn btn-dark">claim NFT</button>
              </div>

          </div>
        </div>
      </div>
       </div>
    </>
  )
}
