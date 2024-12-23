import "./Result.css";
import {calculateInvestmentResults, formatter} from "../../util/investment.js";

export default function Result({input}) {
  const results = calculateInvestmentResults(input);
  const initialInvestment = results[0].valueEndOfYear - results[0].interest - results[0].annualInvestment;

  return (
    <table id="result">
      <thead>
      <tr>
        <th>Year</th>
        <th>Investment value</th>
        <th>Interest (Year)</th>
        <th>Total Interest</th>
        <th>Invested Capital</th>
      </tr>
      </thead>
      <tbody>
      {results.map(yearData => {
        const totalInterest = yearData.valueEndOfYear - yearData.year * yearData.annualInvestment - initialInvestment
        const totalAmountInvested = yearData.valueEndOfYear - totalInterest;

        return (
          <tr key={yearData.year}>
            <td>{yearData.year}</td>
            <td>{formatter.format(yearData.valueEndOfYear)}</td>
            <td>{formatter.format(yearData.interest)}</td>
            <td>{formatter.format(totalInterest)}</td>
            <td>{formatter.format(totalAmountInvested)}</td>
          </tr>
        );
      })}
      </tbody>
    </table>
  );
}