// src/components/Modal.js
import React from "react";

const Modal = ({ title, message, buttonText, isError, setIsModalVisible }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg w-96 text-center">
        <h2 className={`text-2xl ${isError ? "text-red-500" : "text-green-500"}`}>{title}</h2>
        <p className="mt-4">{message}</p>
        <button
          onClick={setIsModalVisible}
          className="mt-6 bg-blue-500 text-white py-2 px-4 rounded"
        >
          {buttonText}
        </button>
      </div>
    </div>
  );
};

export default Modal;
