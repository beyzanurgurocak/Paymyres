import React, { useState } from "react";
import i18next from "i18next";

function Header() {
  const [selectedLanguage, setSelectedLanguage] = useState(i18next.language);


  const changeLanguage = (language) => {
    setSelectedLanguage(language.toLowerCase());
    i18next.changeLanguage(language.toLowerCase());
  };
  
  const languageOptions = [
    { value: "tr", label: "TR"},
    { value: "us", label: "EN" },
  ];

  return (
    <div>
      <nav className="flex items-center justify-between  bg-lime-50 p-6">
        <div className="flex items-center flex-shrink-0 text-white mr-6">
          <img src="../logo.png" className="mr-3 h-12" alt="Paymyres Logo" />
        </div>
        <div>
          <select
            className="p-2 bg-lime-50"
            value={selectedLanguage}
            onChange={(e) => changeLanguage(e.target.value)}
          >
            {languageOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
      </nav>
     
    </div>
  );
}

export default Header;
