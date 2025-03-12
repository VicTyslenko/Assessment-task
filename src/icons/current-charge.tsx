export const CurrentChargeIcon = () => {
  return (
    <>
      <svg width="100" height="30" viewBox="0 0 300 30" xmlns="http://www.w3.org/2000/svg">
        <rect x="5" y="5" width="290" height="20" rx="10" ry="10" fill="#ddd" />

        <rect x="5" y="5" width="200" height="20" rx="10" ry="10" fill="url(#chargeGradient)" />

        <defs>
          <linearGradient id="chargeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" style={{ stopColor: "#FF9800", stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: "#FFC107", stopOpacity: 1 }} />
          </linearGradient>
        </defs>
      </svg>
    </>
  );
};
