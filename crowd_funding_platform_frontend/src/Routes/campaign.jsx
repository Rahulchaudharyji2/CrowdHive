import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import NavBar from "../Components/navbar_notLanding";
import ProgressBar from "../Components/progressBar";
import Donated from "../Components/donors";
import FloatBtn from "../Components/campaignFloatingBtns";
import Loader from "../Components/loaderFullPage";
import ScrollToTop from "../Components/scrollToTop";
import { isNormalInteger } from "../utills/math";
import { getCampaignData, deleteCampaign } from "../services/campaign";
import { isAuthorised } from "../services/auth";
import styles from "../Components/styles/campaign.module.css";

const Campaign = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [campaign, setCampaign] = useState({});
  const [loading, setLoading] = useState(true);
  const [amount, setAmount] = useState("");

  const handleAmountChange = (e) => {
    if (e.target.value === "" || isNormalInteger(e.target.value)) {
      setAmount(e.target.value);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await getCampaignData(id);
        setCampaign(data);
      } catch (error) {
        navigate("/page-not-found");
        toast.error(error.response?.data?.message || "Something went wrong");
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [id, navigate]);

  const handleEdit = () => navigate(`/admin/campaign/${id}/edit`);

  const handleDelete = async () => {
    try {
      await deleteCampaign(id);
      toast.success("Campaign deleted successfully");
      navigate("/");
    } catch (error) {
      toast.error("Failed to delete campaign");
    }
  };

  return (
    <>
      <NavBar />
      <ScrollToTop />
      {loading && <Loader />}
      <FloatBtn campaign={campaign} />
      <div className={`col-md-10 col-11 m-auto py-2 ${styles.container}`}>
        {campaign.isActivated === false && (
          <div className="alert alert-warning alert-dismissible fade show" role="alert">
            <b>Warning:</b> Campaign is deactivated. Please contact admin for more info.
            <button type="button" className="close" data-dismiss="alert" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
        )}

        {isAuthorised() && (
          <>
            <button onClick={handleEdit} className="btn btn-warning m-2">EDIT</button>
            <button onClick={handleDelete} className="btn btn-danger m-2">Delete</button>
          </>
        )}

        <div className="row">
          <div className="col-lg-6 col-md-5">
            <div className={styles.img}>
              <img className={styles.image} src={campaign.imageUrl} alt={campaign.title} />
            </div>
          </div>
          <div id="DonateForm" className={`col-lg-6 col-md-7 p-2 m-auto ${styles.info}`}>
            <div className={styles.header}>
              <h2 className={styles.title}>{campaign.title}</h2>
              {campaign.subTitle ? <p className={styles.subtitle}>- {campaign.subTitle}</p> : <div className={styles.divider}></div>}
            </div>
          </div>
        </div>

        <p className={styles.description}>{campaign.description}</p>
            <ProgressBar 
              fundRequired={campaign.required} 
              fundRaised={campaign.raised} 
              id={id} 
              amount={amount} 
              onAmountChange={handleAmountChange} 
              isActivated={campaign.isActivated} 
            />
        <hr />
        <Donated data={campaign.donors} num={campaign.donorsNum} />
      </div>
    </>
  );
};

export default Campaign;
