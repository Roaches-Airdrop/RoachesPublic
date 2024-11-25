import { useState, useEffect } from 'react';

// Helper functions
const calculateLevel = (balance: number) => Math.floor(balance / 1000); // Level based on $1000 increments
const calculateProgress = (balance: number) => (balance % 1000) / 10; // Progress as a percentage of the $1000 increment

const useBalance = () => {
  const [balance, setBalance] = useState<number>(25890); // Default balance set to $500
  const [level, setLevel] = useState<number>(calculateLevel(balance));
  const [progress, setProgress] = useState<number>(calculateProgress(balance));

  // Effect to fetch balance from API
  useEffect(() => {
    const fetchBalance = async () => {
      try {
        const response = await fetch('/api/balance'); // Replace with your actual API endpoint
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        
        setBalance(data.balance ?? 2500); // Default to 500 if no balance is found
      } catch (error) {
        console.error("Failed to fetch balance:", error);
        setBalance(2500); // Set to default balance on error
      }
    };

    fetchBalance();
  }, []);

  // Update level and progress whenever balance changes
  useEffect(() => {
    const newLevel = calculateLevel(balance);
    const newProgress = calculateProgress(balance);

    // Update level and progress
    setLevel(newLevel);
    setProgress(newProgress);
  }, [balance]);

  const addBalance = (amount: number) => {
    setBalance(prevBalance => prevBalance + amount);
  };

  // Format the balance in en-US currency format
  const formattedBalance = new Intl.NumberFormat('en-US', {
    style: 'decimal',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(balance);

  return {
    balance,
    formattedBalance,
    level,
    progress,
    setBalance,
    addBalance
  };
};

export default useBalance;
