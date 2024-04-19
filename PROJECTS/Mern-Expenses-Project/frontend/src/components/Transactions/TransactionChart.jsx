import React from "react";

const TransactionChart = () => {
  return (
    <div className="my-8 p-6 bg-white rounded-lg shadow-xl border border-gray-200">
      <h1 className="text-2xl font-bold text-center mb-6">
        Transaction Overview
      </h1>
      <div style={{ height: "350px" }}>{/* <Doughnut  /> */}</div>
    </div>
  );
};

export default TransactionChart;
