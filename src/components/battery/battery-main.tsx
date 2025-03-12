import * as S from "./styles";
import { BatteryIcon } from "../../icons/battery-icon";
import { CapacityIcon } from "../../icons/capacity-icon";
import { ChargeStatusIcon } from "../../icons/charge-status";
import { ChargeLevelIcon } from "../../icons/charge-level";
import { CurrentChargeIcon } from "../../icons/current-charge";
import { useState } from "react";

import { InfoIcon } from "../../icons/info-icon";

type Props = {
  handleOpen: () => void;
};
export const BatteryMain = ({ handleOpen }: Props) => {
  return (
    <S.BatteryWrapper onClick={handleOpen}>
      <S.InnerWrapper>
        <S.Header>Battery</S.Header>

        <S.BatteryIconWrapp>
          <BatteryIcon />
        </S.BatteryIconWrapp>

        <S.MainText>Battery capacity</S.MainText>

        <S.InfoFlexWrapp>
          <S.FlexWrapp>
            <InfoIcon />

            <CapacityIcon />
          </S.FlexWrapp>
          <S.MainText>
            <span className="number">500</span> mAh
          </S.MainText>
        </S.InfoFlexWrapp>

        <S.MainText>Battery level</S.MainText>

        <S.InfoFlexWrapp>
          <S.FlexWrapp>
            <InfoIcon />
            <CurrentChargeIcon />
          </S.FlexWrapp>
          <S.MainText>
            <span className="number">80%</span>
          </S.MainText>
        </S.InfoFlexWrapp>

        <S.InfoFlexWrapp
          style={{
            marginTop: "20px",
          }}
        >
          <S.StatusWrapp>
            <ChargeStatusIcon color="#4CAF50" />

            <S.Description>Charging</S.Description>
          </S.StatusWrapp>
          <ChargeStatusIcon color="#8c8c8c" />
        </S.InfoFlexWrapp>
      </S.InnerWrapper>
    </S.BatteryWrapper>
  );
};
