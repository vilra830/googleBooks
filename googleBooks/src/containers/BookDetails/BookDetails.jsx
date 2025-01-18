import { useEffect, useState } from "react";
import { searchBook } from "../../data/googleBooks";
import BookCard from "../../components/Books/BookCard";
import classes from "./BookDetails.module.scss";
import Modal from "../../components/Modal/Modal";

const BooksDetails = ({ value }) => {
  const [data, setData] = useState(null);
  const [fetchStatus, setFetchStatus] = useState("PENDING");
  const [error, setError] = useState(null);
  const [selectedBook, setSelectedBook] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  //fetch data from API using keyword coming from Form
  useEffect(() => {
    if (!value) {
      return;
    }
    setFetchStatus("LOADING");
    searchBook(value)
      .then((data) => {
        setData(data);
        setFetchStatus("SUCCESS");
      })
      .catch((e) => {
        setError(e);
        setFetchStatus("FAILURE");
      });
  }, [value]);

  console.log(data);
  console.log(value);

  // Open modal and set the selected book
  const openModal = (book) => {
    console.log("What is book here", book);

    setSelectedBook(book);
    setIsModalOpen(true);
  };

  // Close modal
  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedBook(null);
  };

  return (
    <div className={classes.wrapper}>
      {fetchStatus === "LOADING" && <p>Loading...</p>}
      {fetchStatus === "FAILURE" && <p>{error.message}</p>}
      {fetchStatus === "SUCCESS" && (
        <div>
          {data.map((book) => (
            <BookCard
              key={book.id}
              bookData={book}
              onClick={() => openModal(book)}
            />
          ))}
        </div>
      )}
      {isModalOpen && (
        <Modal selectedBook={selectedBook} onClose={closeModal} />
      )}
    </div>
  );
};

export default BooksDetails;
