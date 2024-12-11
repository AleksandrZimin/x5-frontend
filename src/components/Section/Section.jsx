import React, { useState } from "react";
import cl from "./Section.module.css"

function Section(props) {
   const handleSubmit = (e) => {
      e.preventDefault();
      console.log("Submit form")
      
   };

  return (
      <section className={cl.section}>
         <h1 className={cl.title}>Test form</h1>
         <form className={cl.form} onSubmit={handleSubmit}>
            <label className={cl.label} htmlFor="">Имя</label>
            <input className={cl.input} type="text" />

            <label className={cl.label} htmlFor="">Фамилия</label>
            <input className={cl.input} type="text" />

            <label className={cl.label} htmlFor="">Email</label>
            <input className={cl.input} type="text" />

            <button className={cl.button}>Отправить</button>
         </form>
      </section>
  );
}

export default Section;