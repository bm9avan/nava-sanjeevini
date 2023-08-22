import React, { useState } from "react";
import "./LoanDetails.css";
import { useTranslation } from "react-i18next";
import LandLoan from "../components/calculation/LandLoan";
import AadharLoan from "../components/calculation/AadharLoan";
import RD from "../components/calculation/RD";

const LoanDetails = () => {
  const [option, setOption] = useState("1");
  const { t } = useTranslation("global");
  return (
    <div className="top">
      <div className="radio-container">
        <input
          type="radio"
          id="loanChoice1"
          name="loan"
          value="lone.1"
          className="radio-input"
          checked={option === "1" ? true : false}
          onChange={() => setOption("1")}
        />
        <label htmlFor="loanChoice1" className="radio-label">
          {t("loan.1.title")}
        </label>

        <input
          type="radio"
          id="loanChoice2"
          name="loan"
          value="lone.2"
          className="radio-input"
          onChange={() => setOption("2")}
        />
        <label htmlFor="loanChoice2" className="radio-label">
          {t("loan.2.title")}
        </label>

        <input
          type="radio"
          id="loanChoice3"
          name="loan"
          value="lone.3"
          className="radio-input"
          onChange={() => setOption("3")}
        />
        <label htmlFor="loanChoice3" className="radio-label">
          {t("loan.3.title")}
        </label>
      </div>

      {option === "1" ? (
        <LandLoan/>
      ) : option === "2" ? (
        <AadharLoan/>
      ) : (
        <RD/>
      )}

    </div>
  );
};

export default LoanDetails;
