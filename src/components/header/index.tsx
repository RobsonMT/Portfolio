import React, { useState } from "react";
import styles from "./header.module.sass";
import { HiOutlineMenu } from "react-icons/hi";
import { MdOutlineDarkMode, MdDarkMode } from "react-icons/md";

const Header = () => {
  const [togle, setTogle] = useState(false);

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <div className={styles.nav_box}>
          <div className={styles.logo}>
            <h3>Robson F. Martins</h3>
          </div>
          <div className={styles.menu_div}>
            <HiOutlineMenu className={styles.menu_icon} size={20} />
          </div>
        </div>

        <ul className={styles.nav_ul}>
          <li className={styles.nav_li}>
            <h3>Home</h3>
          </li>
          <li className={styles.nav_li}>
            <h3>Sobre min</h3>
          </li>
          <li className={styles.nav_li}>
            <h3>Projetos</h3>
          </li>
          <li className={styles.nav_li}>
            <h3>Contato</h3>
          </li>
          <li className={styles.nav_li} onClick={() => setTogle(!togle)}>
            {togle ? <MdOutlineDarkMode size={20} /> : <MdDarkMode size={20} />}
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
