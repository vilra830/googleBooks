import { useState } from "react";
import Form from "./components/Form/Form";
import BooksDetails from "./containers/BookDetails/BookDetails";

function App() {
  const [value, setValue] = useState("");

  const onFormSubmit = (data) => {
    setValue(data);
    console.log("WHAT IS THE DATA", data);
  };

  return (
    <>
      {/* <Header>Google Books</Header> */}
      <Form onSubmit={onFormSubmit} />
      <BooksDetails value={value} />
    </>
  );
}

export default App;
