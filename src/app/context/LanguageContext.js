"use client";
import { createContext, useState, useContext } from 'react';

const LanguageContext = createContext();

const LanguageProvider = ({ children }) => {
  const savedLanguage = localStorage.getItem("language");
  const [language, setLanguage] = useState(savedLanguage ? "English" : "Spanish");

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export default LanguageProvider;
export const useLanguage = () => useContext(LanguageContext);
