import { useState } from "react";

const Form = ({ onSubmit }) => {
  const [inputVal, setInputVal] = useState(null);

  const handleChange = (e) => {
    const value = e.target.value;
    setInputVal(value);
  };

  const handleSubmit = (e) => {
    onSubmit(inputVal);
  };

  console.log(onSubmit, "on submit");
  console.log(inputVal, "is the input");

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="searchInput" onChange={handleChange} />

      <button>Search</button>
    </form>
  );
};

export default Form;
