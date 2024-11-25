import React, { useEffect, useState } from "react";
import TonImg from "../assets/others/ton.svg" // Replace with your Toncoin image path

interface SlideUpModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface Pack {
  quantity: string;
  price: number;
  label: string;
  bonus: string;
}

const packs: Pack[] = [
  { quantity: "X1", price: 0.35, label: "", bonus: "HOT" },

];

const SlideUpModal: React.FC<SlideUpModalProps> = ({ isOpen, onClose }) => {
  const [timeLeft, setTimeLeft] = useState(() => {
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 42); // Set the target date 42 days from now
    return targetDate.getTime() - new Date().getTime();
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft((prev) => Math.max(0, prev - 1000)); // Decrement by 1 second (1000ms)
    }, 1000);

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  // Format the time left as days, hours, minutes, and seconds
  const formatTimeLeft = (milliseconds: number) => {
    const totalSeconds = Math.floor(milliseconds / 1000);
    const days = Math.floor(totalSeconds / (3600 * 24));
    const hours = Math.floor((totalSeconds % (3600 * 24)) / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    return `${days}d ${hours}h ${minutes}m ${seconds}s`;
  };
  
  return (
    <div
      className={`fixed inset-0 bg-black bg-opacity-60 flex items-end justify-center  z-[9999] transition-opacity duration-300 ease-in-out ${
        isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <div
        className={`bg-blue-50 rounded-t-3xl w-full max-w-lg p-6 text-black transform transition-transform duration-[700ms] ease-[cubic-bezier(0.25, 1, 0.5, 1)] ${
          isOpen ? "translate-y-0" : "translate-y-full"
        }`}
        style={{ zIndex: 10000 }} // Ensures it's above everything
      >
        {/* Modal Header */}
        <div className="flex justify-between items-center mb-4">
        {/* <img width={20} height={20} src="https://harlequin-legal-ox-300.mypinata.cloud/ipfs/QmNz3LhJbRCEuANaLWwCbFFYa7sgV5ESj5m79hPVqQnrBT" alt="" /> */}
        .
        <button
            onClick={onClose}
            className="text-red-500 hover:text-red-700 font-bold"
          >
           <svg xmlns="http://www.w3.org/2000/svg" width="1.2rem" height="1.2rem" viewBox="0 0 12 12"><path fill="#000" d="M3.85 3.15a.5.5 0 0 0-.707.707l2.15 2.15l-2.15 2.15a.5.5 0 0 0 .707.707L6 6.714l2.15 2.15a.5.5 0 0 0 .707-.707l-2.15-2.15l2.15-2.15a.5.5 0 0 0-.707-.707L6 5.3z"/></svg>
          </button>
        </div>

        {/* Packs Grid */}
        <div className="flex items-center flex-col justify-center w-full gap-4">
          {packs.map((pack, index) => (
            <div
              key={index}
              className="bg-black rounded-lg p-4 w-40 text-center relative shadow-lg"
            >
              {pack.bonus && (
                <div
                  className={`absolute top-[-10px] left-1/2 transform -translate-x-1/2 text-[10px] text-white font-bold py-[2px] px-[18px] rounded ${
                    pack.bonus === "TRENDING"
                      ? "bg-green-500"
                      : "bg-orange-500"
                  }`}
                >
                  {pack.bonus}
                </div>
              )}
              <div className="text-xl font-bold text-[#DA9F0F] uppercase mb-2">
                {pack.quantity}
              </div>
              <div className="text-sm text-yellow-400">{pack.label}</div>
              <div className="flex items-center justify-center text-lg font-semibold mb-4">
                <img src={TonImg} alt="Toncoin" className="h-5 w-5 mr-2" />
                <span className="text-[12px] text-blue-50">{pack.price}</span>
              </div>
              <button  className="bg-blue-500 text-[9px] text-white py-1 px-2 rounded-full hover:bg-blue-600">
                Multiply
              </button>
           
            </div>
          ))}
             <p className="text-[10px]">Energies is currently unlimited</p>
             <p className="text-[10px]">increasing mining speed will be disabled in <span className="text-[#DA9F0F]">{timeLeft > 0 ? formatTimeLeft(timeLeft) : "Expired"}</span></p>
        </div>
        
      </div>
    </div>
  );
};

export default SlideUpModal;

