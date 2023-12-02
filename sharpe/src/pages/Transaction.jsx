import React, { useEffect, useState } from "react";
import bg from "../assets/blurBg.png";
import axios from "axios";

const Transaction = () => {
  const initialValues = {
    wallet: "",
    amount: "",
  };

  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);

    if (Object.keys(formErrors).length === 0 && isSubmit) {
      const { wallet, amount } = formValues;
      const options = {
        method: "POST",
        headers: {
          "COntent-Type": "application/json",
        },
        body: JSON.stringify({
          wallet,
          amount,
        }),
      };

      const res = await axios.post(
        "https://sharpe-9e7f5-default-rtdb.firebaseio.com/Transaction.json",
        options
      );

      if (res) {
        alert("Sent!");
      } else {
        alert("Error!");
      }

      setFormValues(initialValues);
    }
  };

  useEffect(() => {}, [formErrors]);

  const validate = (values) => {
    const errors = {};
    const regex = /^0x[a-fA-F0-9]{40}$/g;

    if (!values.wallet) {
      errors.wallet = "Wallet address is required!";
    } else if (!regex.test(values.wallet)) {
      errors.wallet = "Invalid format!";
    }

    if (!values.amount) {
      errors.amount = "Amount is required!";
    } else if (values.amount < 0 || values.amount > 10000) {
      errors.amount = "Amount range must be 0 - 10,000!";
    }

    return errors;
  };

  return (
    <div className="absolute top-0 h-screen w-screen bg-[#09090B]">
      <div className="relative">
        <div className="w-full absolute top-28 h-[calc(100vh-7rem)] px-5 lg:px-24 xl:px-40 py-5 lg:py-10 text-white">
          <div className="flex justify-center w-full h-full items-center container mx-auto">
            <div className="w-[30rem] h-fit rounded-2xl relative blurbg">
              <img className="rounded-2xl" src={bg} alt="bg" />
              <div className="absolute top-0 w-full h-full px-10 py-10 md:py-16">
                <p className="mb-10 md:mb-16 font-bold text-5xl ">
                  Transaction
                </p>
                <form className="w-full h-full rounded-2xl flex flex-col">
                  <label className="mb-2 text-lg">Wallet Address </label>
                  <input
                    name="wallet"
                    value={formValues.wallet}
                    onChange={handleChange}
                    placeholder="0x71C7656EC7ab88b098..."
                    className="bg-transparent focus:outline-none py-1 border-b-[1px]"
                  />
                  <p className="py-2 text-red-500">{formErrors.wallet}</p>

                  <label className="mb-2 text-lg mt-5">Amount </label>
                  <input
                    name="amount"
                    value={formValues.amount}
                    onChange={handleChange}
                    type="number"
                    placeholder="0-10,000"
                    className="bg-transparent focus:outline-none py-1 border-b-[1px]"
                  />
                  <p className="py-2 text-red-500">{formErrors.amount}</p>

                  <div
                    onClick={handleSubmit}
                    className="w-fit px-3 py-2 mt-5 bg-pink-500 rounded-md hover:cursor-pointer"
                  >
                    Submit
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Transaction;
