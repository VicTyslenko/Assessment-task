import "./App.css";
import { useState } from "react";
import { BatteryMain } from "./components/battery/battery-main";
import { Modal } from "./components/modal/modal";

function App() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className="App">
      <BatteryMain handleOpen={handleOpen} />
      <Modal open={open} handleClose={handleClose} />
    </div>
  );
}

export default App;
