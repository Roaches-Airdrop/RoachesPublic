import { useState, useEffect } from 'react';

const TopLoader = () => {
  const [loadCount, setLoadCount] = useState(0);

  useEffect(() => {
    if (loadCount < 3) {
      const timeout = setTimeout(() => {
        setLoadCount((prev) => prev + 1);
      }, 1000); // 1-second delay before loading next phase

      return () => clearTimeout(timeout);
    }
  }, [loadCount]);

  return (
    <div className="fixed top-0 left-0 w-full">
      <div
        className={`bg-gradient-to-l from-amber-800 via-yellow-300 to-yellow-800 to-100% h-[6px] transition-all duration-1000 ease-in-out ${
          loadCount > 0 ? 'w-full' : 'w-0'
        }`}
        style={{
          width: loadCount === 0 ? '0%' : loadCount === 1 ? '33%' : loadCount === 2 ? '66%' : '100%',
        }}
      ></div>
    </div>
  );
};

export default TopLoader;
