import React, { useState } from "react";

const AddressModal = ({ closeModal }) => {
  const [address, setAddress] = useState("");

  const handleSaveAddress = () => {
    closeModal();
  };

  return (
    <div className="fixed w-[50rem] h-[40rem] top-16 left-80 p-8 z-10 shadow-xl bg-white">
      <div className="text-black">
        <div className="flex justify-between items-center">
          <p>Delivery Address</p>
          <span className="cursor-pointer text-2xl" onClick={closeModal}>
            &times;
          </span>
        </div>
        <input
          type="text"
          placeholder="Enter your address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          className="block ring-1 ring-black"
        />
        <button
          onClick={handleSaveAddress}
          className="border border-green-300 bg-green-300 px-4 py-1 rounded-md mt-4"
        >
          Add Address
        </button>
      </div>
    </div>
  );
};

export default AddressModal;
