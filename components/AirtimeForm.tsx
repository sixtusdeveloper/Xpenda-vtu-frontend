import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const AirtimeForm = () => {
  const [phone, setPhone] = useState("");
  const [amount, setAmount] = useState("");
  const [network, setNetwork] = useState("MTN");

  const buyAirtime = async () => {
    try {
      const response = await axios.post("http://localhost:5000/buy-airtime", {
        phone,
        amount,
        network,
      });

      toast.success("Airtime purchase successful!");
    } catch (error) {
      toast.error("Transaction failed!");
    }
  };

  return (
    <div>
      <h2>Buy Airtime</h2>
      <input
        type="text"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        placeholder="Phone Number"
      />
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        placeholder="Amount"
      />
      <select value={network} onChange={(e) => setNetwork(e.target.value)}>
        <option value="MTN">MTN</option>
        <option value="AIRTEL">Airtel</option>
        <option value="GLO">Glo</option>
        <option value="9MOBILE">9mobile</option>
      </select>
      <button onClick={buyAirtime}>Buy Airtime</button>
    </div>
  );
};

export default AirtimeForm;
