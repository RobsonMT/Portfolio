import React from "react";
import styles from "./header.module.sass";
import { HiOutlineMenu } from "react-icons/hi";
import { MotionContainer } from "../MotionContainer";

const Header = () => {
  return (
    <MotionContainer>
      <header className={styles.header}>
        <div className={styles.header_logo}>
          <h3>Robson F. Martins</h3>
        </div>
        <nav className={styles.header_nav}>
          <ul className={styles.header_ul}>
            <li className={styles.header_li}>
              <HiOutlineMenu className={styles.menu_icon} size={20} />
            </li>
          </ul>
        </nav>
      </header>
    </MotionContainer>
  );
};

export default Header;
