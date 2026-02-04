// import React from 'react'

import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import styles from "./Layout.module.css";
export default function Layout() {
  return (
    <div>
      {/* Sidebar */}
      <aside className={styles.sidebar + "bg-gray-900 text-white"}>
        <Sidebar />
      </aside>

      {/* Navbar */}
      <div className={styles.navbar}>
        <header
          className={
            "bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800"
          }
        >
          <Navbar />
        </header>
      </div>
      {/* Main content */}
      <div>
        <div className={styles.widthTop}></div>
        {/* <div className="flex"> */}
        {/* <div className={styles.widthleft}></div> */}
        <main className="overflow-auto bg-gray-50 h-screen ms-[25%]">
          <Outlet />
        </main>
        {/* </div> */}
      </div>
    </div>
  );
}
