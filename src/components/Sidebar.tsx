import { useState } from "react";
import styles from "../styles/Sidebar.module.scss"

export function Sidebar() {
  const [isSidebarClosed, setSidebarClosed] = useState(false);

  function toggleSidebarHandler() {
    setSidebarClosed(prev => !prev);
  }

  return (
    <div className={styles.container}>
      <div className={`${styles.sidebar} ${isSidebarClosed ? styles.closed : ""}`}>
        
      </div>

      <button className={styles.toggler}
        onClick={toggleSidebarHandler}>
        {">"}
      </button>
    </div>
  )
}