import React from "react";
import TransactionList from "../Transactions/TransactionList";
import TransactionChart from "../Transactions/TransactionChart";
import FilterSection from "../Transactions/FilterSection";

const Dashboard = () => {
  return (
    <>
      <TransactionChart />
      <FilterSection />
    </>
  );
};

export default Dashboard;
