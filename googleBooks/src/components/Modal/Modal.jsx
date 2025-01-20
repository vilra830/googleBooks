import classes from "./Modal.module.scss";

const Modal = ({ selectedBook, onClose }) => {
  const authors = selectedBook.author;
  console.log(authors);
  return (
    <div className={classes.modal}>
      <article className={classes.modal_content}>
        <span className={classes.close} onClick={onClose}>
          &times;
        </span>

        <div className={classes.modal_content_main}>
          {selectedBook.image && (
            <img
              className={classes.modal_image}
              src={selectedBook.image}
              alt={selectedBook.title}
            />
          )}
          <div className={classes.modal_content_text}>
            <h3>{selectedBook.title}</h3>

            <h4>Authors</h4>
            {authors.map((author, i) => (
              <span key={i}>{author}</span>
            ))}
            <h4>Publish Date</h4>
            <p>{selectedBook.publishedDate}</p>
            <h4>Language</h4>

            <p>{selectedBook.language}</p>
            <h4>Description</h4>
            <p className={classes.modal_content_text_description}>
              {selectedBook.description}
            </p>
          </div>
        </div>
      </article>
    </div>
  );
};

export default Modal;
