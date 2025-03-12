import { NavLink } from "react-router-dom";
import colors from "../../../settings";
const LinkElement = ({ name, link, styled, onClick }) => {
  return (
    <NavLink
      onClick={onClick}
      style={({ isActive }) => {
        return {
          color: isActive ? "#4ECD9D" : "white",
          borderRadius: 0,
          fontWeight: isActive ? "bold" : "normal",
        };
      }}
      to={link}
    >
      <p className={`px-2 py-4 h-full cursor-pointer text-smaller  ${styled}`}>
        {name}
      </p>
    </NavLink>
  );
};

export default LinkElement;
