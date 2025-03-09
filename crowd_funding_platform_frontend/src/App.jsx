import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import LandingPage from "./Routes/landingPage";
import Campaign from "./Routes/campaign";
import LoginAdmin from "./Routes/loginAdmin";
import RegisterAdmin from "./Routes/registerAdmin";
import AdminDashboard from "./Routes/adminDashboard";
import AboutUs from "./Routes/aboutUs";
import ContactUs from "./Routes/contactUs";
import PageNotFound from "./Routes/PageNotFound";
import NewCampaign from "./Routes/newCampaign";
import AllCampaigns from "./Routes/allCampaigns";
import EditCampaign from "./Routes/editCampaign";
import DonationSuccess from "./Routes/donationSuccess";
import DonationFailure from "./Routes/donationFailure";

import "./App.css";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <div id="page-container">
      <div id="content-wrap">
        <ToastContainer />
        <Routes>
          <Route path="/all-campaigns" element={<AllCampaigns />} />
          <Route path="/donation/success/:id" element={<DonationSuccess />} />
          <Route path="/donation/failure" element={<DonationFailure />} />
          <Route path="/campaign/:id" element={<Campaign />} />
          <Route path="/admin/login" element={<LoginAdmin />} />
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
          <Route path="/admin/new" element={<RegisterAdmin />} />
          <Route path="/admin/campaign/:id/edit" element={<EditCampaign />} />
          <Route path="/admin/campaign/new" element={<NewCampaign />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/page-not-found" element={<PageNotFound />} />
          <Route path="/" element={<LandingPage />} />
          <Route path="*" element={<Navigate to="/page-not-found" />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
