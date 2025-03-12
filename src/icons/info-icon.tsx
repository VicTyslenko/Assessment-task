export const InfoIcon = () => {
  return (
    <>
      <svg width="15" height="15" viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg">
        <circle cx="25" cy="25" r="18" fill="none" stroke="url(#outerGradient)" strokeWidth="6" />
        <circle cx="25" cy="25" r="10" fill="yellow" />

        <defs>
          <linearGradient id="outerGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: "#FF5733", stopOpacity: 1 }} />
            <stop offset="30%" style={{ stopColor: "#FFBF00", stopOpacity: 1 }} />
            <stop offset="60%" style={{ stopColor: "#33FF57", stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: "#337FFF", stopOpacity: 1 }} />
          </linearGradient>
        </defs>
      </svg>
    </>
  );
};
