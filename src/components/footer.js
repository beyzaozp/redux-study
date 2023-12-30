import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setLanguage, setDarkMode } from "../stores/site";
import { logout } from "../stores/auth";

function Footer() {
  const { dark, language } = useSelector((state) => state.site);
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const languages = ["tr", "en"];
  const handleLanguage = (lang) => {
    dispatch(setLanguage(lang));
  };
  return (
    <div>
      Footer
      <div>
        {languages.map((lang, index) => (
          <button
            key={index}
            className={lang === language ? "active" : ""}
            onClick={() => handleLanguage(lang)}
          >
            {lang}
          </button>
        ))}
      </div>
      <div>
        <button onClick={() => dispatch(setDarkMode())}>
          {dark ? "Light Moda Geç" : "Dark Moda Geç"}
        </button>
        {user && (
          <button onClick={() => dispatch(logout())}>
            Çıkış yap
          </button>
        )}
      </div>
    </div>
  );
}

export default Footer;
