export const ChargeLevelIcon = () => {
  return (
    <>
      <svg width="350" height="50" viewBox="0 0 350 50" xmlns="http://www.w3.org/2000/svg">
        <rect x="5" y="15" width="250" height="15" rx="10" ry="10" fill="url(#gradientBar)" stroke="#ccc" strokeWidth="1" />

        <defs>
          <linearGradient id="gradientBar" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" style={{ stopColor: "#FFA500", stopOpacity: 1 }} />
            <stop offset="50%" style={{ stopColor: "#7FFF00", stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: "#00BFFF", stopOpacity: 1 }} />
          </linearGradient>
        </defs>
      </svg>
    </>
  );
};
