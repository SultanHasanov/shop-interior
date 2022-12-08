import React from "react";
import styles from "../Sort/sort.module.sass";

const Sort = ({ select, setSelect }) => {
  const handleSelect = (e) => {
    setSelect(e.target.value);
    console.log(e.target.value);
  };

  return (
    <div className={styles.sort}>
      <select value={select} onChange={handleSelect}>
        <option value="сперва дешевле">Порядок: сперва дешевле</option>
        <option value="сперва дороже">Порядок: сперва дороже</option>
      </select>
    </div>
  );
};

export default Sort;
