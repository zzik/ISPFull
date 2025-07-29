import React, { useState } from "react";
import { NavLink } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const [menuShown, setMenuShown] = useState(false);
  const handleMenuShown = () => {
    if (window.innerWidth < 640) {
      setMenuShown(!menuShown);
    } else {
      setMenuShown(true)
    }
  } 
  
  const list = [
    { name: "Home", route: "/" },
    { name: "Solutions", route: "solutions" },
    { name: "Consultants", route: "consultants" },
    { name: "Us", route: "us" },
    { name: "Contact", route: "contact" },
    { name: "Blog", route: "blog" },
  ];


  const navigationMap = list.map((el) => (
    <NavLink key={el.route} to={`${el.route}`} onClick={handleMenuShown}>
      {el.name}
    </NavLink>
  ));

  return (
    <nav className="container">
      <img
        src="assets/logo.png"
        className={`logo ${!menuShown ? "shown" : "hidden"}`}
      />
      <ul className={`${menuShown ? "shown" : "hidden"}`}>{navigationMap}</ul>
      <button className={`menu-btn`} onClick={handleMenuShown}>
        <FontAwesomeIcon size="xl" icon={menuShown ? faXmark : faBars} />
      </button>
    </nav>
  );
};

export default Header;
