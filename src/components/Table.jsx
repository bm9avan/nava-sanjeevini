import React from "react";
import "./Table.css";
import knJSON from "../translation/kn.json";
import { useTranslation } from "react-i18next";

const Table = ({ option, arr, loan }) => {
  const { t } = useTranslation("global");
  return (
    <>
      <table className="result">
        <thead>
          <tr id="highlight">
            <th id="highlight" className="table-header">
              {t(`loan.${option}.title`)}
            </th>
            <th id="highlight" className="table-header">
              {loan}
            </th>
          </tr>
        </thead>
        <tbody>
          {Object.keys(knJSON.loan[option].row).map((r) => {
            return (
              <tr key={r} className="table-row">
                <th className="table-header">{t(`loan.${option}.row.${r}`)}</th>
                <td className="table-data">{arr[+r.slice(1) - 1]}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default Table;
