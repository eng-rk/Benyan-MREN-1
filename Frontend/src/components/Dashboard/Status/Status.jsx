import { useState } from "react";
import StatusCard from "../../ui/StatusCard/StatusCard";
import styles from "./Status.module.css";
function Status() {
  // Layer 1 => (states & Global Data)
  const [state, setState] = useState([
    { id: 1, count: "120", title: "Projects" },
    { id: 2, count: "12", title: "Developers" },
    { id: 3, count: "1500", title: "Users" },
    { id: 4, count: "700", title: "Blogs" },
  ]);
  // layer 2 => (Effects) => Call Api
  // Layer 3 => (Handler)
  // Layer 4 => JSX
  return (
    <div className="py-4">
      <div className={`${styles.title} mb-4`}>Status</div>

      <div className="container">
        <div className="row g-3">
          {state.map((item) => (
            <div key={item.id} className="col-12 col-sm-6 col-lg-3">
              <StatusCard count={item.count} title={item.title} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Status;
