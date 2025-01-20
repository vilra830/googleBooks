import { useState } from "react";
import classes from "./Form.module.scss";

const Form = ({ onSubmit }) => {
  const [inputVal, setInputVal] = useState("");

  const handleChange = (e) => {
    const value = e.target.value;
    setInputVal(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(inputVal);
    setInputVal("");
  };

  console.log(onSubmit, "on submit");
  console.log(inputVal, "is the input");

  return (
    <div className={classes.wrapper}>
      <h1 className={classes.h1}> Google Books </h1>
      <form onSubmit={handleSubmit}>
        <input
          className={classes.search_bar}
          type="text"
          name="searchInput"
          value={inputVal}
          onChange={handleChange}
        />

        <button className={classes.search_button}>Search</button>
      </form>
    </div>
  );
};

export default Form;
