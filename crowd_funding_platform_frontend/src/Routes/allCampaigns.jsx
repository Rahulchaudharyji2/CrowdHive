import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import NavBar from "../Components/navbar_notLanding";
import Campaign from "../Components/everyOngoingCampaigns";
import Pagination from "../Components/pagination";
import Loader from "../Components/loaderFullPage";
import ScrollToTop from "../Components/scrollToTop";
import { paginate } from "../utills/paginate";
import { getAllCampaigns } from "../services/campaign";
import { compare } from "../utills/math";
import styles from "../Components/styles/allCampaigns.module.css";

const AllCampaigns = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchData() {
      try {
        const { data } = await getAllCampaigns();
        setData(data.sort(compare));
      } catch (err) {
        toast.error(err?.response?.data?.message || "Something went wrong");
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  const handleClick = (id) => {
    navigate(`/campaign/${id}`);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const pageSize = 6;
  const paginatedCampaigns = paginate(data, currentPage, pageSize);

  return (
    <>
      <NavBar />
      <div className="background" style={{ backgroundColor: "rgb(4, 4, 6)" }}>
        <ScrollToTop />
        {loading && <Loader />}
        <div className={styles.header} style={{ color: "rgb(213, 114, 9)" }}>
          <p>All Campaigns</p>
        </div>
        <div className={`row ${styles.section}`} style={{ color: "white" }}>
          {paginatedCampaigns.map((campaign) => (
            <div key={campaign._id} className={`col-md-6 col-12 ${styles.campaign}`}>
              <Campaign
                id={campaign._id}
                handleClick={handleClick}
                title={campaign.title}
                description={campaign.description}
                image={campaign.imageUrl}
                requiredAmount={campaign.required}
                isActivated={campaign.isActivated}
              />
            </div>
          ))}
        </div>
        <Pagination
          itemsCount={data.length}
          pageSize={pageSize}
          currentPage={currentPage}
          onPageChange={handlePageChange}
        />
      </div>
    </>
  );
};

export default AllCampaigns;
