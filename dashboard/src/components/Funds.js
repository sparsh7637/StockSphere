import React from "react";
import { Link } from "react-router-dom";

const Funds = () => {
  return (
    <>
      <div className="funds">
        <p>Instant, zero-cost fund transfers with UPI</p>
        <div className="mt-4 flex flex-col space-y-4">
          <Link className="btn btn-blue">Add funds</Link>
          <Link className="btn btn-blue">Withdraw</Link>
        </div>
      </div>

      <div className="">
        <div className="bg-gray-900 p-6 shadow rounded-md col">
          <table className="table border-collapse border border-slate-500 w-full">
            <tbody className="text-gray-400">
              <tr className="border-b border-slate-700">
                <td className="data border border-slate-700">
                  <p>Available margin</p>
                </td>
                <td className="data font-semibold text-green-500 border border-slate-700">
                  <p>4,043.10</p>
                </td>
              </tr>
              <tr className="border-b border-slate-700">
                <td className="data border border-slate-700">
                  <p>Used margin</p>
                </td>
                <td className="data font-semibold border border-slate-700">
                  <p>3,757.30</p>
                </td>
              </tr>
              <tr className="border-b border-slate-700">
                <td className="data border border-slate-700">
                  <p>Available cash</p>
                </td>
                <td className="data font-semibold border border-slate-700">
                  <p>4,043.10</p>
                </td>
              </tr>
              <tr className="border-b border-slate-700">
                <td className="data border border-slate-700">
                  <p>Opening Balance</p>
                </td>
                <td className="data font-semibold border border-slate-700">
                  <p>4,043.10</p>
                </td>
              </tr>
              <tr className="border-b border-slate-700">
                <td className="data border border-slate-700">
                  <p>Payin</p>
                </td>
                <td className="data font-semibold border border-slate-700">
                  <p>4,064.00</p>
                </td>
              </tr>
              <tr className="border-b border-slate-700">
                <td className="data border border-slate-700">
                  <p>SPAN</p>
                </td>
                <td className="data font-semibold border border-slate-700">
                  <p>0.00</p>
                </td>
              </tr>
              <tr className="border-b border-slate-700">
                <td className="data border border-slate-700">
                  <p>Delivery margin</p>
                </td>
                <td className="data font-semibold border border-slate-700">
                  <p>0.00</p>
                </td>
              </tr>
              <tr className="border-b border-slate-700">
                <td className="data border border-slate-700">
                  <p>Exposure</p>
                </td>
                <td className="data font-semibold border border-slate-700">
                  <p>0.00</p>
                </td>
              </tr>
              <tr className="border-b border-slate-700">
                <td className="data border border-slate-700">
                  <p>Options premium</p>
                </td>
                <td className="data font-semibold border border-slate-700">
                  <p>0.00</p>
                </td>
              </tr>
              <tr className="border-b border-slate-700">
                <td className="data border border-slate-700">
                  <p>Collateral (Liquid funds)</p>
                </td>
                <td className="data font-semibold border border-slate-700">
                  <p>0.00</p>
                </td>
              </tr>
              <tr className="border-b border-slate-700">
                <td className="data border border-slate-700">
                  <p>Collateral (Equity)</p>
                </td>
                <td className="data font-semibold border border-slate-700">
                  <p>0.00</p>
                </td>
              </tr>
              <tr className="border-b border-slate-700">
                <td className="data border border-slate-700">
                  <p>Total Collateral</p>
                </td>
                <td className="data font-semibold border border-slate-700">
                  <p>0.00</p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="bg-white p-6 shadow rounded-md">
          <div className="commodity">
            <p style={{ fontSize: "120%", marginBottom: "5%" }} className="">
              You don't have a commodity account
            </p>
            <Link className="btn btn-blue">Open Account</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Funds;
