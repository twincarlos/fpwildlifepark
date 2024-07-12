"use client";
import { createContext, useState, useContext } from 'react';

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
    const [language, setLanguage] = useState("English");

  return (
    <ModalContext.Provider value={{ language, setLanguage }}>
      {children}
    </ModalContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);