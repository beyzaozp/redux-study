import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

function Header() {
  const { dark, language } = useSelector((state) => state.site);
  return (
    <div>
      Header
      <nav>
        <NavLink to="/about">Hakkımızda</NavLink>
        <NavLink to="/profile">Profil</NavLink>
        <NavLink to="/">Anasayfa</NavLink>
      </nav>
      <h3>dark mode: {dark ? "evet" : "hayır"}</h3>
      <br />
      <h3>dil: {language}</h3>
    </div>
  );
}

export default Header;
