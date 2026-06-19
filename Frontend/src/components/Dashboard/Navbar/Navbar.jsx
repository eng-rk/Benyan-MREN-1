import { useState } from "react";
import styles from "./Navbar.module.css";
import Logo from "../../../assets/logo.png";

const Navbar = ({ adminName = "Super Admin", adminImg }) => {
  // Layer 1 => (states & Global Data)
  // let notfiCount = initial value (4) => useState(Init Value)
  const [notfiCount, setNotfiCount] = useState(15);
  // layer 2 => (Effects) => Call Api
  // Layer 3 => (Handler)
  const onIncreaseNotification = () => {
    setNotfiCount(notfiCount + 1);
  };
  // Layer 4 => JSX (Re-render)
  return (
    <nav
      className={`${styles.navbar} d-flex justify-content-between align-items-center shadow-sm`}
    >
      <div className="d-flex align-items-center">
        <img src={Logo} alt="Bunyan" className={styles.logoImg} />
      </div>

      <div className={styles.adminSection}>
        <div className={styles.notifIcon}>
          <i className="fa-solid fa-bell"></i>
          <span className={`badge rounded-pill bg-info ${styles.badge}`}>
            {notfiCount}
          </span>
        </div>
        <button onClick={onIncreaseNotification}>Increase Notification</button>

        <div className="d-flex align-items-center gap-2">
          <span className="fw-semibold d-none d-md-block">{adminName}</span>
          {adminImg ? (
            <img src={adminImg} alt="admin" className={styles.avatarCircle} />
          ) : (
            <div className={styles.avatarCircle}>
              {adminName.charAt(0).toUpperCase()}
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
