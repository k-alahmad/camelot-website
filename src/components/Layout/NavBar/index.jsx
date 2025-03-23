import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import Drawer from "./Drawer";
import { MdDehaze } from "react-icons/md";
import { handleScroll } from "../../../helpers/scroll";
import { NavElement } from "../../../data/navData";
import Logo from "../../../assets/logos/LogoShort.png";
import { useNavigate } from "react-router-dom";
import Dropdown from "./Language";

const NavBar = () => {
  const { t, i18n } = useTranslation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [header, setHeader] = useState(false);
  const navigate = useNavigate();
  const listenScrollEvent = (event) => {
    if (document.documentElement.scrollTop < 40) {
      setHeader(false);
    } else if (document.documentElement.scrollTop > 40) {
      setHeader(true);
    }
  };
  useEffect(() => {
    document.addEventListener("scroll", listenScrollEvent);
    return () => {
      document.removeEventListener("scroll", listenScrollEvent);
    };
  }, []);
  return (
    <>
      <div className="w-full">
        <div
          dir={i18n.language == "en" ? "ltr" : "rtl"}
          className={`fixed max-w-[1920px] top-0 left-1/2 -translate-x-1/2 z-40 flex items-center gap-x-2 sm:gap-x-6 transition-all duration-300 p-4 2xl:p-5 justify-between text-white w-full h-[75px] 2xl:h-[80px] px-[3%] bg-primary ${
            header ? "shadow-lg" : "shadow-none"
          }`}
        >
          <img
            src={Logo}
            alt="Logo Camelot"
            className="h-full w-[170px] object-contain cursor-pointer"
            onClick={() => {
              navigate("/");
            }}
          />
          <div
            className="flex justify-center items-center gap-x-8 2xl:gap-x-12"
            dir={i18n.language == "en" ? "ltr" : "rtl"}
          >
            {NavElement.map((e, index) => {
              return (
                <p
                  key={index}
                  className="cursor-pointer text-tiny md:text-smaller max-md:hidden"
                  onClick={() => {
                    handleScroll(e.link);
                  }}
                >
                  {t(e.name)}
                </p>
              );
            })}
            <Dropdown />
            <div
              onClick={() => setMobileOpen(true)}
              className="cursor-pointer text-secondary flex justify-center items-center gap-x-2 md:hidden"
            >
              <MdDehaze size={24} />
            </div>
          </div>
        </div>
      </div>

      <Drawer isOpen={mobileOpen} setIsOpen={setMobileOpen}>
        {NavElement.map((e, index) => (
          <p
            key={index}
            className="cursor-pointer text-smaller text-white"
            onClick={() => {
              handleScroll(e.link);
            }}
          >
            {t(e.name)}
          </p>
        ))}
      </Drawer>
    </>
  );
};

export default NavBar;
