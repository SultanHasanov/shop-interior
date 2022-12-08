import React, { useState } from "react";
import Content from "../components/Content/Content";
import Sort from "../components/Sort/Sort";
import data from "../components/Content/dataBase";
import styles from '../sass/pages/catalog.module.sass'

const Catalog = () => {
const [select, setSelect] = useState("");

// const sortById =
//   select === "сперва дешевле"
//     ? data.sort((a, b) => b.price - a.price)
//     : data

const sortById =
  select === "сперва дешевле"
    ? data.sort((a, b) => b.price - a.price)
    : select === "сперва дороже"
    ? data.sort((a, b) => a.price - b.price)
    : data.map((item) => item);
    

console.log(sortById)
  return (
    <div>
      <Sort select={select} setSelect={setSelect} />
      <div className={styles.content}>
        {sortById.map((obj) => {
          return <Content key={obj.id} {...obj} />;
        })}
      </div>
    </div>
  );
};

export default Catalog;
