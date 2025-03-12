import styled from "styled-components";

export const BatteryWrapper = styled.div`
  min-width: 250px;
  height: auto;
  /* background-color: #fff; */
  padding: 10px;
  background: linear-gradient(135deg, #1e3a8a, #3b82f6);
  /* box-shadow: inset 0px 10px 30px rgba(0, 0, 0, 0.4); */
  border-radius: 20px;
  color: #fff;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: scale(1.02);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.5); 
    cursor: pointer;
  }
`;

export const InnerWrapper = styled.div``;
export const Header = styled.h1`
  font-size: 20px;
`;

export const MainText = styled.h2`
  font-size: 15px;

  & .number {
    font-size: 30px;
  }
`;
export const InfoFlexWrapp = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const FlexWrapp = styled.div`
  display: flex;
  align-items: center;
`;
export const Description = styled.p`
  font-size: 10px;
`;
export const BatteryIconWrapp = styled.div`
  display: flex;
  justify-content: center;
`;

export const StatusWrapp = styled.div`
  display: flex;
  align-items: center;
  gap: 2px;
`;
