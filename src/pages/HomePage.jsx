import React from 'react';
import './HomePage.css'; 
import logo from "../assets/logo.jpg"
import { useTranslation } from 'react-i18next';
import knJSON from "../translation/kn.json"

const loanTypes = knJSON.home.type

const HomePage = () => {
  const { t } = useTranslation("global")
  return (
    <div className="home-page top">
      <header className="header">
        <div className="bank-header">
          <img src={logo} alt={t('home.homeHeading')} className="logo" />
          <div className="title-group">
            <h1 className="title">{t('home.homeHeading')}</h1>
            <h3 className="sub-title">{t("home.subHead")}</h3>
          </div>
        </div>
      </header>
      <div className='offhrs'>
        {t("home.offHrs")}
      </div>
      <div className="landing-page">
        <div className="loan-types">
          {Object.keys(loanTypes).map((loan) => (
            <div className="loan-card" key={loan}>
              <div className="loan-icon">{loanTypes[loan].charAt(0)}</div>
              <h3>{t(`home.type.${loan}`)}</h3>
            </div>
          ))}
        </div>
      </div>
      <footer className="footer">
        <p>&copy; 2023 {t('home.homeHeading')} All rights reserved.</p>
      </footer>
    </div>
  );
};

export default HomePage;
