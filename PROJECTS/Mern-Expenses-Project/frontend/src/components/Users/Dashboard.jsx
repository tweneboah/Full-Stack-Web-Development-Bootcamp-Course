import React from "react";

import TransactionChart from "../Transactions/TransactionChart";
import TransactionList from "../Transactions/TransactionList";

const Dashboard = () => {
  return (
    <>
      <TransactionChart />
      <TransactionList />
    </>
  );
};

export default Dashboard;
