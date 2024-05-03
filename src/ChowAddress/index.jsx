import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";
import AddressModal from "./components/AddressModal";

const Index = () => {
  const [showAddressModal, setShowAddressModal] = useState(false);
  const handleEnterAddress = () => {
    setShowAddressModal(true);
  };
  return (
    <div className="px-16 py-4 flex justify-between items-center">
      <div className="flex gap-2">
        <div>
          <img />
        </div>
        <div>
          <icon />
          <button onClick={handleEnterAddress}>Enter Address</button>
          <icon />
        </div>
        <div>
          <img />
          <p>Wallet Balance (#0)</p>
        </div>
      </div>
      <div>
        <div className="flex items-center gap-2 bg-[#f2f2f2] py-2 px-2 rounded-lg">
          <FiSearch />
          <input
            type="text"
            placeholder="Search Chowdeck"
            className="bg-inherit outline-none"
          />
        </div>
        <div></div>
      </div>
      {showAddressModal && (
        <AddressModal closeModal={() => setShowAddressModal(false)} />
      )}
    </div>
  );
};

export default Index;
