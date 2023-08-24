import React, { useState, useEffect, useRef } from "react";
import Table from "../Table";
import "../Table.css";

const AadharLoan = () => {
  const [arr, setArr] = useState([]);
  const [loan, setLoan] = useState(100000);
  const [disLone, setDisLone] = useState(loan);
  const inref = useRef();

  useEffect(() => {
    inref.current.focus();
  }, []);

  useEffect(() => {
    let fakearr = [];
    setArr(fakearr)
  }, [loan]);

  function printHandler(e) {
    e.preventDefault();
    inref.current.blur();
    setLoan(inref.current.value);
  }

  return (
    <>
      <form onSubmit={printHandler} className="loanForm">
        <span className="amount-heading">
          <label htmlFor="amount">Amount</label>
        </span>
        <input
          ref={inref}
          type="number"
          min="1"
          value={disLone}
          onChange={(e) => setDisLone(e.target.value)}
          id="amount"
          placeholder="Enter Amount"
          className="amount-input"
        />
      </form>
      <Table option={3} arr={arr} loan={loan} />
    </>
  );
};

export default AadharLoan;
