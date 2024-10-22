const UpgradeTab = () => {
    return ( 
        <>
      {/* Glass Effect Container */}
      <div className="bg-white bg-opacity-20 backdrop-blur-md rounded-lg shadow-lg p-10 max-w-md">
        <h1 className="text-4xl font-bold text-white mb-4">Glassmorphism</h1>
        <p className="text-white text-lg">
          This is an example of a glass-like, frosted background effect using Tailwind CSS.
        </p>
      </div>

      {/* <div className="text-center mb-6">
        <h2 className="text-xl font-bold text-gray-700">
          User Level: <span className="text-blue-600">Level {level}</span>
        </h2>
        <p className="text-gray-500">Balance: ${numericBalance.toFixed(2)}</p>
      </div>

      Progress Bar

      Progress Label
      <div className="text-right text-sm text-gray-500">
        {progress.toFixed(2)}% complete for Level {level}
      </div>

      Level Info
      <div className="mt-4">
        <p className="text-gray-600">Level Progress:</p>
        <ul className="list-disc list-inside text-gray-500">
          {Array.from({ length: maxLevel }, (_, index) => (
            <li key={index}>
              Level {index + 1}: {index * levelThreshold} - {(index + 1) * levelThreshold}
            </li>
          ))}
        </ul>
      </div> */}
        </>
     );
}
 
export default UpgradeTab;