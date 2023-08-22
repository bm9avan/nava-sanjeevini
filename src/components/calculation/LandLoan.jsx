import React, { useState, useEffect, useRef } from "react";
import Table from "../Table";
import "../Table.css";

const LandLoan = () => {
  const [arr, setArr] = useState([]);
  const [loan, setLoan] = useState(100000);
  const inref = useRef();

  useEffect(() => {
    inref.current.focus();
  }, []);

  useEffect(() => {
    let fakearr = [];
    fakearr[0] = 1200;
    if (loan >= 50000) {
      fakearr[1] = 1200;
    }
    if (loan >= 100000) {
      fakearr[2] = 1200;
    }
    if (loan <= 100000) {
      fakearr[3] = 200;
    }
    fakearr[4] = loan / 50;
    fakearr[5] = loan / 500;

    fakearr[6] = 150; //jskhf
    fakearr[7] = 150; //lhdjfvil

    fakearr[8] = (loan * 3) / 250;

    fakearr[9] = 100; //hrfj

    fakearr[10] = 300;
    if (loan >= 50000) {
      fakearr[11] = 50;
    }

    fakearr[12] = 30; //khgjrigri

    let sum = 0;
    for (let i = 0; i < 13; i++) {
      if (fakearr[i] !== undefined) {
        sum += fakearr[i];
      }
    }
    fakearr[13] = sum;
    fakearr[14] = 1200 + loan / 40;
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
      <Table option={1} arr={arr} loan={loan} />
    </>
  );
};

export default LandLoan;
