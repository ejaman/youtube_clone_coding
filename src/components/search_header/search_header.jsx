import styles from "./search_header.module.css";
import React, { memo } from "react";
import { useRef } from "react";

const SearchHeader = memo(({ onSearch }) => {
  // search가 되면 컴포넌트 안에서 버튼이 눌려졌는지, 엔터키가 눌렸는지 상관없이 검색 이벤트가 발생하면 내가 전달해주는 콜백함수(onSearch)를 불러라!
  const inputRef = useRef();
  const handleSearch = () => {
    const value = inputRef.current.value;
    // 검색하는 것을 props로 받아와야함
    onSearch(value);
  };
  const onClick = () => {
    // console.log(`onclick`);
    handleSearch();
  };

  const onKeyPress = (event) => {
    // console.log(`onkeypress`);
    if (event.key === "Enter") {
      handleSearch();
    }
  };
  console.log("header!");
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img className={styles.img} src="/images/logo.png" alt="logo" />
        <h1 className={styles.title}>YOUTUBE</h1>
      </div>
      <input
        ref={inputRef}
        className={styles.input}
        type="search"
        onKeyPress={onKeyPress}
      />
      <button className={styles.btn} type="submit" onClick={onClick}>
        <img className={styles.btnImg} src="./images/search.png" alt="search" />
      </button>
    </header>
  );
});
export default SearchHeader;
