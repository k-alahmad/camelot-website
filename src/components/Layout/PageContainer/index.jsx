import React, { useEffect } from "react";
import NavBar from "../NavBar";
import Footer from "../Footer";
import MessageBox from "../../UI/Message";
import { useLocation } from "react-router-dom";
import FilterModal from "../../UI/FilterModal/FilterModal";
import { FaWhatsapp } from "react-icons/fa";

const PageLayout = ({ children }) => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="flex flex-col justify-center items-center relative bg-white text-black font-light text-tiny">
      <NavBar />
      <MessageBox />
      <FilterModal />
      <div className="min-h-screen w-full max-w-[1920px]">{children}</div>
      <Footer />

      <div
        className="fixed bottom-5 right-5 bg-green-600 rounded-full p-3 z-50 cursor-pointer"
        onClick={() => {
          window.open(
            "https://wa.me/971503192940",
            "_blank",
            "noopener,noreferrer"
          );
        }}
      >
        <FaWhatsapp className="text-med md:text-big text-white" />
      </div>
    </div>
  );
};

export default PageLayout;
