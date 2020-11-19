import React, { useState } from "react";

const Account = (props) => {
  let [amount, setAmount] = useState(0);
  let [balance, setBalance] = useState(0);

  const handleDeposit = (e) => {
    e.preventDefault();
    console.log(e.target);
    if (isNaN(amount)) {
      console.log("Not a number");
    } else if (amount < 0) {
      console.log("No negative numbers");
    } else {
      setBalance(balance + Number(amount));
    }
    setAmount(0);
  };

  const handleWithdraw = (e) => {
    e.preventDefault();
    if (isNaN(amount)) {
      console.log("Not a number");
    } else if (amount < 0) {
      console.log("No negative numbers");
    } else if (balance < amount) {
      console.log("Not enough money");
    } else setBalance(balance - Number(amount));
    setAmount(0);
  };

  let balanceClass = "balance";
  if (balance <= 0) {
    balanceClass += " zero";
  }

  return (
    <div className="account">
      <h2>{props.name}</h2>
      <div className={balanceClass}>${balance}</div>
      <form>
        <input
          type="text"
          placeholder="enter an amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <input onClick={handleDeposit} type="submit" value="Deposit" />
        <input onClick={handleWithdraw} type="submit" value="Withdraw" />
      </form>
    </div>
  );
};

export default Account;
