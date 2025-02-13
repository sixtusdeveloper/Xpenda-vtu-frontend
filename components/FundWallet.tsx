"use client";
import { useState } from "react";
import axios from "axios";

const FundWallet = () => {
  const [amount, setAmount] = useState("");
  const [loading, setLoading] = useState(false);

  const initiatePayment = async () => {
    if (!amount || parseFloat(amount) <= 0) {
      alert("Enter a valid amount");
      return;
    }

    setLoading(true);
    try {
      const response = await axios.post("/api/wallet/fund", {
        amount,
        email: "user@example.com", // Replace with authenticated user email
      });

      window.location.href = response.data.paymentUrl; // Redirect to Flutterwave payment page
    } catch (error) {
      console.error("Payment initiation failed:", error);
      alert("Payment failed, try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h2>Fund Wallet</h2>
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        placeholder="Amount"
      />
      <button onClick={initiatePayment} disabled={loading}>
        {loading ? "Processing..." : "Deposit"}
      </button>
    </div>
  );
};

export default FundWallet;
