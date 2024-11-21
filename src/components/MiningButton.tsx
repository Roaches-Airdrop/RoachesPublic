import React, { useEffect, useState } from "react";
import "./MiningButton.css";
import TonImg from "../assets/others/ton.svg"

interface MiningButtonProps {
  onMine: () => void;
  onClaim: () => void;
}

const packs = [
  { quantity: "X2", price: 0.15, label: "", bonus: "" },
  { quantity: "x3", price: 0.18, label: "", bonus: "" },
  { quantity: "x5", price: 0.2, label: "", bonus: "" },
  { quantity: "X8", price: 0.32, label: "", bonus: "" },
  { quantity: "X10", price: 0.35, label: "", bonus: "TRENDING" },
  { quantity: "x15", price: 0.5, label: "", bonus: "HOT" },
];

const MiningButton: React.FC<MiningButtonProps> = ({ onMine, onClaim }) => {
  const [isActive, setIsActive] = useState(true);
  const [remainingTime, setRemainingTime] = useState(2000); // 24 hours in seconds
  const [counter, setCounter] = useState(0.0000000); // Initial counter value

  // Countdown timer logic
  useEffect(() => {
    if (remainingTime > 0) {
      const interval = setInterval(() => {
        setRemainingTime((prev) => prev - 1);
      }, 1000);
      return () => clearInterval(interval);
    } else {
      setIsActive(false); // Disable the mine button after countdown ends
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
    <div className="mining-button-container">
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
        <button className="claim-button" onClick={onClaim}>
          Claim
        </button>
      )}

      {/* Rewards Grid */}
      <div className="packs-grid">
        {packs.map((pack, index) => (
          <div key={index} className="pack-card">
            {pack.bonus && <div className={`pack-label ${pack.bonus.toLowerCase()}`}>{pack.bonus}</div>}
            <div className="pack-quantity">{pack.quantity}</div>
            <div className="pack-bonus">{pack.label}</div>
            <div className="pack-price flex items-center justify-center mb-4">
              <img src={TonImg} alt="Toncoin" className="h-5 w-5 mr-2" />
              <span>{pack.price}</span>
            </div>
            <button className="multiply-btn bg-blue-500 text-white py-1 px-4 rounded-full">
              Multiply
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MiningButton;
