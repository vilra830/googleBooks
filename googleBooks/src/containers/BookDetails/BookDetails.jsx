import { useEffect, useState } from "react";
import { searchBook } from "../../services/googleBooks.js";
import BookCard from "../../components/Books/BookCard";
import classes from "./BookDetails.module.scss";
import Modal from "../../components/Modal/Modal";
import Loading from "../../components/Loading/Loading.jsx";

const BooksDetails = ({ value }) => {
  const [data, setData] = useState("");
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
    <div>
      {fetchStatus === "LOADING" && (
        <p>
          <Loading />
        </p>
      )}
      {fetchStatus === "FAILURE" && (
        <p className={classes.error}>{error.message}</p>
      )}
      {fetchStatus === "SUCCESS" && (
        <div className={classes.wrapper}>
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
