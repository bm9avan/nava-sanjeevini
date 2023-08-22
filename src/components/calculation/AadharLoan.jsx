import React, { useState, useEffect, useRef } from "react";
import Table from "../Table";
import "../Table.css";

const AadharLoan = () => {
  const [arr, setArr] = useState([]);
  const [loan, setLoan] = useState(100000);
  const inref = useRef();

  useEffect(() => {
    inref.current.focus();
  }, []);

  useEffect(() => {
    let fakearr = [];
    fakearr[0] = 1200;
      fakearr[1] = 1200;
      fakearr[2] = loan/50;
      fakearr[3] = loan / 500;

    fakearr[4] = 200 //kjaehfka

    fakearr[5] = fakearr[4];
    fakearr[6] = (loan * 3) / 250;
    fakearr[7] = 250; 
    fakearr[8] = 300;
    fakearr[9] = 50;

    let sum=0;
    for (let i = 0; i < 10; i++) {
      if (fakearr[i] !== undefined) {
        sum += fakearr[i];
      }
    }
    fakearr[11] = sum; 

    fakearr[12]=1000 //hgyjgyu

    fakearr[13]=fakearr[11]+fakearr[12];
    fakearr[14] = 2250 + fakearr[2];
    fakearr[15] = fakearr[13] - fakearr[14];

    setArr(fakearr);
  }, [loan]);

  function printHandler(e) {
    e.preventDefault();
    inref.current.blur();
    setLoan(inref.current.value);
  }

  return (
    <>
      <form onSubmit={printHandler} className="loanForm">
        <h3 className="amount-heading">
          <label htmlFor="amount">Amount</label>
        </h3>
        <input
          ref={inref}
          type="number"
          min="1"
          id="amount"
          placeholder="Enter Amount"
          className="amount-input"
        />
      </form>
      <Table option={2} arr={arr} loan={loan} />
    </>
  );
};

export default AadharLoan;
