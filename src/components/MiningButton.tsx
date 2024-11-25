import React, { useEffect, useState } from "react";
import "./MiningButton.css";
import SlideUpModal from "./SlideUpModal";

interface MiningButtonProps {
  onMine: () => void;
  onClaim: () => void;
}

const MiningButton: React.FC<MiningButtonProps> = ({ onMine, onClaim }) => {
  const initialTime = 2000; // 24 hours in seconds
  const [isModalOpen, setModalOpen] = useState<boolean>(false);
  const [isActive, setIsActive] = useState<boolean>(true);
  const [remainingTime, setRemainingTime] = useState<number>(initialTime);
  const [counter, setCounter] = useState<number>(0.0);

  // Load stored data
  useEffect(() => {
    const savedEndTime = localStorage.getItem("endTime");
    const savedCounter = parseFloat(localStorage.getItem("counter") || "0.0");

    if (savedEndTime) {
      const endTime = parseInt(savedEndTime, 10);
      const currentTime = Math.floor(Date.now() / 1000); // Current time in seconds
      const newRemainingTime = endTime - currentTime;

      if (newRemainingTime > 0) {
        setRemainingTime(newRemainingTime);
        setIsActive(true);
      } else {
        setRemainingTime(0);
        setIsActive(false);
      }
    }

    setCounter(savedCounter);
  }, []);

  // Countdown logic
  useEffect(() => {
    if (remainingTime > 0) {
      const interval = setInterval(() => {
        setRemainingTime((prev) => prev - 1);
      }, 1000);
      return () => clearInterval(interval);
    } else {
      setIsActive(false);
    }
  }, [remainingTime]);

  // Counter increment logic
  useEffect(() => {
    if (isActive) {
      const counterInterval = setInterval(() => {
        setCounter((prev) => parseFloat((prev + 0.0000001).toFixed(7)));
      }, 10000); // Increment every 10 seconds
      return () => clearInterval(counterInterval);
    }
  }, [isActive]);

  // Save state on claim or on significant changes
  const saveState = (endTime: number) => {
    localStorage.setItem("endTime", String(endTime));
    localStorage.setItem("counter", counter.toFixed(7));
  };

  // Reset the countdown and counter
  const handleClaim = () => {
    const newEndTime = Math.floor(Date.now() / 2000) + initialTime; // Calculate new end time
    setRemainingTime(initialTime);
    setCounter(0.0);
    setIsActive(true);
    saveState(newEndTime);
    onClaim(); // Call the parent-provided `onClaim` function
  };

  // Format time (hh:mm:ss)
  const formatTime = (time: number) => {
    const hours = Math.floor(time / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = time % 60;
    return `${hours.toString().padStart(2, "0")}:${minutes
      .toString()
      .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
  };

  return (
    <>
      <div className="flex fixed top-0 left-0 right-0 rounded-b-[20px] items-center justify-between py-2 px-4 w-full h-10 bg-slate-800">
        <div className="text-[#DA9F0F] flex items-center gap-2 font-bold">
        <img  width={18}
            height={18} src="https://harlequin-legal-ox-300.mypinata.cloud/ipfs/QmSA4t9dGeqwrF4C4Y69byrironksZBy5mB2tggw26wjgc" alt="" />
        0.00026473
        </div>
        <div className="flex gap-2 font-bold text-[#4ec9cb]">
          <img
            width={10}
            height={10}
            src="https://harlequin-legal-ox-300.mypinata.cloud/ipfs/QmNz3LhJbRCEuANaLWwCbFFYa7sgV5ESj5m79hPVqQnrBT"
            alt=""
          />
          2.0%
        </div>
      </div>

      <div className="mining-button-container flex items-center justify-center">
        {isActive && <div className="thunder-animation"></div>}
        <button
          className={`mining-button ${!isActive ? "disabled" : ""}`}
          onClick={isActive ? onMine : undefined}
          disabled={!isActive}
        >
          Mining
        </button>
        <span className="countdown-timer">{formatTime(remainingTime)}</span>

        {/* Counter displayed below the button */}
        <div className="counter">{counter.toFixed(7)}</div>

        {/* Claim Button */}
        {!isActive && (
          <button className="claim-button" onClick={handleClaim}>
            Claim
          </button>
        )}

        {/* Rewards Grid */}
        <div className="flex flex-col items-center justify-center text-white">
          <button
            onClick={() => setModalOpen(true)}
            className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
          >
            Increase mining speed
          </button>
          <p className="text-[10px] text-gray-400 mt-3">
            Purchasing energies increases your mining speed by 0.3%
          </p>

          {/* SlideUpModal Component */}
          <SlideUpModal isOpen={isModalOpen} onClose={() => setModalOpen(false)} />
        </div>
      </div>
    </>
  );
};

export default MiningButton;
