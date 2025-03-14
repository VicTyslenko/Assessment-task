export interface BatteryInfo {
  level: number;
  charging: boolean;
  chargingTime: number;
  dischargingTime: number;

  addEventListener: (event: "levelchange" | "chargingchange", callback: () => void) => void;
  removeEventListener: (event: "levelchange" | "chargingchange", callback: () => void) => void;
}
