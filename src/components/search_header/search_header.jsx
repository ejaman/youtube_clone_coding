import styles from "./search_header.module.css";
import React from "react";

const SearchHeader = (props) => {
  return (
    <header className={styles.header}>
      <img className={styles.img} src="/images/logo.png" alt="logo" />
      <h1 className={styles.logo}>YOUTUBE</h1>
      <input className={styles.input} type="search"></input>
      <button className={styles.btn} type="submit">
        <img src="./images/search.png" alt="search" />
      </button>
    </header>
  );
};

export default SearchHeader;
