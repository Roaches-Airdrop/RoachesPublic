import React from "react";
import MiningButton from "../MiningButton";

const App: React.FC = () => {
  const handleMine = () => {
    console.log("Mining started...");
  };

  const handleClaim = () => {
    console.log("Claim reward!");
    // Add your claim logic here
  };
  return (
    <div>
      <h1>Telegram Mining App</h1>
      <MiningButton onMine={handleMine}  onClaim={handleClaim}/>
    </div>
  );
};

export default App;
