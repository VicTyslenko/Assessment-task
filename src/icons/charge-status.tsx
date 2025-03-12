export const ChargeStatusIcon = ({ color }: { color: string }) => {
  return (
    <>
      <svg width="9" height="9" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
        <circle cx="10" cy="10" r="8" stroke="#ccc" strokeWidth="2" fill="white" />

        <circle cx="10" cy="10" r="6" fill={color} />
      </svg>
    </>
  );
};
