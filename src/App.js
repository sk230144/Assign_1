import React from 'react';
import './App.css'
import { BrowserRouter, Link, Navigate, Route, Routes } from 'react-router-dom';
import SellerAgreement from './components/SellerAgreement';
import BuyerAgreement from './components/BuyerAgreement';
import TermsOfService from './components/MarketPlace';
import DeveloperAgreement from './components/DevAgree';
import ServiceLevelAgreement from './components/SeviceLevel';
import Navbar from './Navbar';

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/seller-agreement" element={<SellerAgreement />} />
        <Route path="/buyer-agreement" element={<BuyerAgreement />} />
        <Route path="/terms-of-service" element={<TermsOfService />} />
        <Route path="/developer-agreement" element={<DeveloperAgreement />} />
        <Route path="/service-level-agreement" element={<ServiceLevelAgreement />} />
      </Routes>
    </BrowserRouter>
  );
};

const Home = () => {
  return (
    <div className="home-container">
      <h1>3D Assets Marketplace</h1>
      <p>Welcome to our 3D Assets Marketplace!</p>
      <p>
        Please review the following agreements and terms to get started:
      </p>
      <ul>
        <li><Link to="/seller-agreement">Seller Agreement</Link></li>
        <li><Link to="/buyer-agreement">Buyer Agreement</Link></li>
        <li><Link to="/terms-of-service">Marketplace Terms of Service</Link></li>
        <li><Link to="/developer-agreement">Developer Agreement</Link></li>
        <li><Link to="/service-level-agreement">Service Level Agreement</Link></li>
      </ul>
    </div>
  );
};

export default App;