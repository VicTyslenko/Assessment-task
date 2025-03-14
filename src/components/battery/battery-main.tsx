import * as S from "./styles";
import { BatteryIcon } from "../../icons/battery-icon";
import { CapacityIcon } from "../../icons/capacity-icon";
import { ChargeStatusIcon } from "../../icons/charge-status";

import { useEffect, useState } from "react";
import LinearProgress from "@mui/material/LinearProgress";
import type { BatteryInfo } from "../../shared/models";
import { InfoIcon } from "../../icons/info-icon";

type Props = {
  handleOpen: () => void;
};

export const BatteryMain = ({ handleOpen }: Props) => {
  const [info, setInfo] = useState<BatteryInfo>();

  const [batteryLevel, setBatteryLevel] = useState<number | null>(null);

  useEffect(() => {
    (navigator as any).getBattery().then((battery: BatteryInfo) => {
      setInfo(battery);

      setBatteryLevel(Math.round(battery.level * 100));

      const updateChargingStatus = () => {
        setInfo((prev) => ({
          ...prev!,
          charging: battery.charging,
          level: battery.level,
        }));
      };

      battery.addEventListener("chargingchange", updateChargingStatus);
      battery.addEventListener("levelchange", updateChargingStatus);

      return () => {
        battery.removeEventListener("chargingchange", updateChargingStatus);
        battery.removeEventListener("levelchange", updateChargingStatus);
      };
    });
  }, []);

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
            <span className="number">4097</span> mAh
          </S.MainText>
        </S.InfoFlexWrapp>

        <S.InfoFlexWrapp
          style={{
            marginTop: "20px",
          }}
        >
          <S.MainText>Battery level</S.MainText>

          <S.MainText>
            <span className="number">{batteryLevel ? batteryLevel + "%" : <S.Description>Loading...</S.Description>}</span>
          </S.MainText>
        </S.InfoFlexWrapp>

        <LinearProgress
          variant="determinate"
          value={batteryLevel ?? 100}
          sx={{
            height: 10,
            borderRadius: 6,
            marginTop: "15px",
            "& .MuiLinearProgress-bar": {
              backgroundColor: batteryLevel && batteryLevel < 50 ? "#FFBF00" : "#78e38b",
            },
          }}
        />

        <S.InfoFlexWrapp
          style={{
            marginTop: "32px",
          }}
        >
          <S.StatusWrapp>
            <ChargeStatusIcon color="#4CAF50" />

            {info && info.charging && <S.Description>Charging</S.Description>}
          </S.StatusWrapp>

          <S.StatusWrapp>
            {info && !info.charging && <S.Description>Not charging</S.Description>}
            <ChargeStatusIcon color="#8c8c8c" />
          </S.StatusWrapp>
        </S.InfoFlexWrapp>
      </S.InnerWrapper>
    </S.BatteryWrapper>
  );
};
