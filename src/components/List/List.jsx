import React, { useState } from "react";
import cl from "./List.module.css";

function List(props) {
  const listSessions = [
    {
      link: "https://test.ru/79846621",
      name: "Роман",
      surname: "Романов",
      email: "123@321.ru",
      phone: "89996665544",
    },
    {
      link: "https://test.ru/79846622",
      name: "Николай",
      surname: "Усманов",
      email: "222@32133.ru",
      phone: "89996664455",
    },
  ];


  return (
    <section className={cl.list}>
      {listSessions.map((item, index) => (
        <div className={cl.listItem} key={index}>
          <div className={cl.listItemEl}>№: {index + 1}</div>
          <div className={cl.listItemEl}>Имя: {item.name}</div>
          <div className={cl.listItemEl}>Фамилия: {item.surname}</div>
          <div className={cl.listItemEl}>Email: {item.email}</div>
          <a href={item.link} className={cl.listItemEl}>{item.link}</a>
          <div className={cl.listItemEl}>Тел. {item.phone}</div>
        </div>
      ))}
         <div className={cl.listItem} style={{backgroundColor: "#0000000a", fontWeight: "bold"}}>
          <div className={cl.listItemEl}>№</div>
          <div className={cl.listItemEl}>Имя</div>
          <div className={cl.listItemEl}>Фамилия</div>
          <div className={cl.listItemEl}>Email</div>
          <div className={cl.listItemEl}>Ссылка</div>
          <div className={cl.listItemEl}>Телефон</div>
        </div>
    </section>
  );
}

export default List;
