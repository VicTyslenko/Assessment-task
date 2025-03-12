export const CapacityIcon = () => {
  return (
    <>
      <svg width="100" height="30" viewBox="0 0 300 30" xmlns="http://www.w3.org/2000/svg">
        <rect x="5" y="5" width="290" height="20" rx="10" ry="10" fill="#ddd" />

        <rect x="5" y="5" width="250" height="20" rx="10" ry="10" fill="url(#capacityGradient)" />

        <defs>
          <linearGradient id="capacityGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" style={{ stopColor: "#4CAF50", stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: "#87e698", stopOpacity: 1 }} />
          </linearGradient>
        </defs>
      </svg>
    </>
  );
};
