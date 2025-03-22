import React, { useEffect } from "react";
import NavBar from "../NavBar";
import Footer from "../Footer";
import MessageBox from "../../UI/Message";
import { useLocation } from "react-router-dom";
import FilterModal from "../../UI/FilterModal/FilterModal";

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
    </div>
  );
};

export default PageLayout;
