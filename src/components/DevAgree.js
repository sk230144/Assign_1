import React from 'react';
import './buy.css'


const DeveloperAgreement = () => {
  const handleAcceptAgreement = () => {
    alert('You have accepted the Dev Agreement.');
  };
  return (
    <div className="agreement-container">
    <h2>Developer Agreement</h2>
    <p>
      This agreement establishes the terms and conditions for individuals or businesses who wish to purchase 3D assets from our marketplace.
    </p>
    <h3>License Terms</h3>
    <p>
      By purchasing a 3D asset, the buyer is granted a non-exclusive, non-transferable license to use the asset for personal or commercial purposes. The asset may not be resold or redistributed without the express permission of the marketplace.
    </p>
    <h3>Pricing and Payment</h3>
    <p>
      All 3D assets are priced individually, with the option to purchase a bundle of assets at a discounted rate. Payments can be made securely through our online payment system, and refunds may be available in certain cases.
    </p>
    <h3>Permitted Use Cases</h3>
    <p>
      Buyers are permitted to use the 3D assets in various projects, including but not limited to: video games, 3D printing, virtual reality experiences, and architectural visualizations. Commercial use is allowed, but the assets may not be resold or redistributed as standalone products.
    </p>
    <button onClick={handleAcceptAgreement}>Accept Agreement</button>
  </div>
  );
};

export default DeveloperAgreement;