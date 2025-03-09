import React from "react";
import { useNavigate } from "react-router-dom";
import jwtDecode from "jwt-decode";
import NavBar from "../Components/navbar_notLanding";
import ShowQuery from "../Components/showquery";
import ScrollToTop from "../Components/scrollToTop";
import { logout, isAuthorised } from "../services/auth";
import { toast } from "react-toastify";
import styles from "../Components/styles/dashboard.module.css";
import user from "../Components/assets/admin.png";

const AdminDashboard = () => {
  const navigate = useNavigate();

  if (!isAuthorised()) {
    toast.error("Not authorised");
    navigate("/page-not-found", { replace: true });
    return null;
  }

  let email = jwtDecode(localStorage.getItem("token")).email;

  return (
    <React.Fragment>
      <NavBar />
      <ScrollToTop />
      <div className={`col-md-10 m-auto border ${styles.container}`}>
        <img src={user} className={`${styles.image}`} alt="userIcon" />
        <h2 className={`${styles.text}`}>Admin Dashboard</h2>
        <b>{email}</b>
        <hr />
        <button className="btn btn-warning m-2" onClick={() => navigate("/admin/new")}>
          New Admin +
        </button>
        <button className="btn btn-warning" onClick={() => navigate("/admin/campaign/new")}>
          New Campaign
        </button>
        <button className="btn btn-primary m-2" onClick={() => navigate("/all-campaigns")}>
          All Campaigns
        </button>
        <button
          className="btn btn-danger"
          onClick={() => {
            logout().then(() => {
              window.location = "/";
            });
          }}
        >
          Logout
        </button>
        <hr />
        <ShowQuery />
        <br />
      </div>
    </React.Fragment>
  );
};

export default AdminDashboard;
