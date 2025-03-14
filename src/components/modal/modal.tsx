import * as S from "./styles";

import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts";
import { motion } from "framer-motion";
import { fadeInOut } from "./data";
// mocking data //

import { batteryData } from "./data";

// import type { BatteryInfo } from "../../shared/models";

type Props = {
  open: boolean;
  handleClose: () => void;
};

export const Modal = ({ open, handleClose }: Props) => {
  /// Below is an example how to monitor a real battery data from the current device ///

  // const [batteryHistory, setBatteryHistory] = useState<{ time: string; battery: number }[]>([]);

  // useEffect(() => {
  //   (navigator as any).getBattery().then((battery: BatteryInfo) => {
  //     const updateBattery = () => {
  //       setBatteryHistory((prev) => [
  //         ...prev,
  //         {
  //           time: new Date().toLocaleTimeString(),
  //           battery: Math.round(battery.level * 100),
  //         },
  //       ]);
  //     };

  //     updateBattery();

  //     battery.addEventListener("levelchange", updateBattery);
  //     battery.addEventListener("chargingchange", updateBattery);

  //     const interval = setInterval(updateBattery, 60000);

  //     return () => {
  //       clearInterval(interval);
  //       battery.removeEventListener("levelchange", updateBattery);
  //       battery.removeEventListener("chargingchange", updateBattery);
  //     };
  //   });
  // }, []);

  if (!open) return null;

  return (
    <>
      <S.ModaOverlay onClick={handleClose}>
        <motion.div variants={fadeInOut} initial="hidden" animate="visible" exit="exit">
          <S.ModalInner onClick={(event) => event.stopPropagation()}>
            <AreaChart width={900} height={400} data={batteryData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
              <defs>
                <linearGradient id="colorBattery" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#0004ff" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#3c00ff" stopOpacity={0} />
                </linearGradient>
              </defs>

              <XAxis dataKey="time" tick={{ fontSize: 14, fontWeight: "bold", fill: "#333" }} />

              <YAxis tick={{ fontSize: 14, fontWeight: "bold", fill: "#333" }} />

              <CartesianGrid strokeDasharray="3 3" />
              <Tooltip
                contentStyle={{ fontSize: 14, backgroundColor: "white", borderRadius: 8 }}
                labelStyle={{ fontWeight: "bold", color: "#333" }}
              />

              <Area type="monotone" dataKey="battery" stroke="#ff7300" fillOpacity={1} fill="url(#colorBattery)" />
            </AreaChart>
          </S.ModalInner>
        </motion.div>
      </S.ModaOverlay>
    </>
  );
};
