import React, { useEffect, useState } from 'react';
import { FaUsers, FaTrophy, FaCoins } from 'react-icons/fa';

const Ranks: React.FC = () => {
    const [totalUsers, setTotalUsers] = useState<number | null>(null);
    const [topUsers, setTopUsers] = useState<any[]>([]);

    const fetchTotalUsers = async (): Promise<{ totalUsers: number }> => {
        const mockDatabase = { totalUsers: 1234 };
        return new Promise((resolve) =>
            setTimeout(() => resolve(mockDatabase), 2000)
        );
    };

    const fetchTopUsers = async (): Promise<any[]> => {
        const mockTopUsers = [
            { username: 'jayjay', coins: 5000 },
            { username: 'deebaby', coins: 4000 },
            { username: 'perry', coins: 3000 },
            { username: 'bobbyt', coins: 2500 },
            { username: 'salamilli', coins: 2000 },
            { username: 'vicki', coins: 1800 },
            { username: 'ninja', coins: 1600 },
            { username: 'shalli', coins: 1400 },
            { username: 'nakademus', coins: 1200 },
            { username: 'messi', coins: 1000 },
        ];
        return new Promise((resolve) =>
            setTimeout(() => resolve(mockTopUsers), 2000)
        );
    };

    useEffect(() => {
        const fetchData = async () => {
            const totalData = await fetchTotalUsers();
            setTotalUsers(totalData.totalUsers);

            const topUsersData = await fetchTopUsers();
            // Sort by coins in descending order
            const sortedUsers = topUsersData.sort((a, b) => b.coins - a.coins);

            // Add position names dynamically
            const positions = ["diamond", "gold", "silver", "bronze", "wood", "steel","iron", "copper", "stone", "clay"];
            const updatedUsers = sortedUsers.map((user, index) => ({
                ...user,
                rank: index + 1,
                position: positions[index] || `${index + 1}`,
                cupColor:
                    index === 0
                        ? "text-cyan-300" // Diamond
                        : index === 1
                        ? "text-yellow-400" // Gold
                        : index === 2
                        ? "text-gray-300" // Silver
                        : index === 3
                        ? "text-orange-500" // Bronze
                        : index === 4
                        ? "text-amber-700" // Wood
                        : "", // No color for other ranks
            }));

            setTopUsers(updatedUsers);
        };

        fetchData();
    }, []);

    const initialTime = 7 * 24 * 60 * 60 * 1000; // 7 days
    const [timeLeft, setTimeLeft] = useState(initialTime);

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft((prevTime) => (prevTime <= 1000 ? initialTime : prevTime - 1000));
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    const formatTime = (ms: number) => {
        const days = Math.floor(ms / (24 * 60 * 60 * 1000));
        const hours = Math.floor((ms % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000));
        const minutes = Math.floor((ms % (60 * 60 * 1000)) / (60 * 1000));
        const seconds = Math.floor((ms % (60 * 1000)) / 1000);

        return { days, hours, minutes, seconds };
    };

    const { days, hours, minutes, seconds } = formatTime(timeLeft);

    return (
        <div className="flex flex-col items-center min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white p-4 space-y-8">
            {/* Total Users */}
            <div className="flex flex-col items-center bg-black bg-opacity-30 rounded-lg shadow-md p-6 w-full max-w-md">
                <FaUsers className="text-5xl text-yellow-500 mb-4" />
                <div className="text-3xl font-bold">{totalUsers !== null ? totalUsers : 'Loading...'}</div>
                <div className="text-gray-300 capitalize text-[22px] text-white font-medium py-3 px-2 font-roachfont1">
                    Total Users
                </div>
            </div>

            {/* Countdown Timer */}
            <div className="flex flex-col items-center bg-black bg-opacity-30 rounded-lg shadow-md p-6 w-full max-w-md">
                <h2 className="text-center text-lg mb-4 capitalize text-white font-semibold py-3 px-2 font-roachfont1">
                    Fight Your Way To The Top!
                </h2>
                <p className="text-center text-base mb-4 font-roachfont1">Be among the top 10 Users for 7 days and get an increase in your balance!</p>
                <div className="flex space-x-2">
                    {[
                        { label: 'd', value: days },
                        { label: 'h', value: hours },
                        { label: 'm', value: minutes },
                        { label: 's', value: seconds },
                    ].map((unit) => (
                        <div
                            key={unit.label}
                            className="text-base font-bold py-2 rounded-lg shadow-lg font-roachfont1"
                        >
                            {String(unit.value).padStart(2, '0')}
                            <span className="text-sm text-gray-200 ml-1">{unit.label}</span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Top Users */}
            <div className="flex flex-col items-center bg-black bg-opacity-30 rounded-lg shadow-md p-4 w-full max-w-3xl">
                <div className="text-xl font-bold text-left mb-2 w-full pl-4 font-roachfont1">Top 10</div>
                {topUsers.length === 0 ? (
                    <div className="text-gray-400">Loading top users...</div>
                ) : (
                    <ul className="space-y-2 w-full">
                        {topUsers.map((user) => (
                            <li
                                key={user.username}
                                className="flex items-center justify-between bg-gray-800 rounded-lg p-3 shadow-md hover:bg-gray-700 transition"
                            >
                                {user.rank <= 5 && (
                                    <FaTrophy className={`text-3xl ${user.cupColor} mr-4`} />
                                )}
                                <div className="flex-grow">
                                    <div className="font-bold text-sm text-white">{user.username}</div>
                                    <div className="text-xs text-gray-400 capitalize">
                                        {user.position}
                                    </div>
                                    <div className="text-xs text-gray-400 flex items-center">
                                        <FaCoins className="text-yellow-500 mr-2" />
                                        {user.coins} <p className="capitalize text-roachgold">ROACH</p>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
};

export default Ranks;
