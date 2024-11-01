import React from 'react';

const ProgressBar: React.FC<{ progress: number }> = ({ progress }) => {
  const percentage = Math.min(progress, 100); // Ensure it doesn't exceed 100%

  return (
    <div style={{ width: '100%', background: '#e0e0df', borderRadius: '5px', overflow: 'hidden' }}>
      <div
        style={{
          width: `${percentage}%`,
          height: '5px',
          background: '#ffd700',
          transition: 'width 0.3s ease-in-out',
        }}
      />
    </div>
  );
};

export default ProgressBar;
