// useUserProgress.ts
import { useState, useEffect } from 'react';

const maxLevel = 10;
const levelThreshold = 10000; // $10,000 per level

const useUserProgress = (balance: string) => {
    const [level, setLevel] = useState<number>(0); // Default level is 0
    const [progress, setProgress] = useState<number>(0); // Initial progress is 0%

    // Convert balance to a number for calculations
    const numericBalance = parseFloat(balance) || 0;

    // Calculate user's level and progress based on balance
    useEffect(() => {
        // Calculate level based on balance
        const calculatedLevel = Math.min(Math.floor(numericBalance / levelThreshold), maxLevel);
        setLevel(calculatedLevel);

        // Calculate progress for current level
        const currentLevelBalance = numericBalance % levelThreshold;
        const calculatedProgress = Math.min((currentLevelBalance / levelThreshold) * 100, 100);
        setProgress(calculatedProgress);
    }, [numericBalance]);

    const formatBalance = new Intl.NumberFormat('en-US', {
        style: 'decimal',
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
    }).format(numericBalance);

    return { level, progress, formatBalance };
};

export default useUserProgress;
