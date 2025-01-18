import classes from "./Modal.module.scss";

const Modal = ({ selectedBook, onClose }) => {
  return (
    <div className={classes.modal}>
      <article>
        <span onClick={onClose}>&times;</span>
        <h3>{selectedBook.title}</h3>
        <h4>{selectedBook.authors}</h4>
        {selectedBook.image && (
          <img src={selectedBook.image} alt={selectedBook.title} />
        )}
        <h5>Publish Date</h5>
        <p>{selectedBook.publishedDate}</p>
        <h5>Language</h5>

        <p>{selectedBook.language}</p>
        <h5>Description</h5>
        <p>{selectedBook.description}</p>
      </article>
    </div>
  );
};

export default Modal;
