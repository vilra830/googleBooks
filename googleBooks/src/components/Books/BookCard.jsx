import classes from "./Books.module.scss";

const BookCard = ({ bookData, onClick }) => {
  const authors = bookData.author;
  const categories = bookData.categories;
  console.log(authors.length);
  return (
    <>
      <article className={classes.card}>
        <h3>{bookData.title}</h3>

        <img src={bookData.image} alt={bookData.title} onClick={onClick} />
        <h4>Authors</h4>
        {authors.map((author, i) => (
          <p key={i}>{author}</p>
        ))}
        <h4>Categories</h4>
        {categories.map((category, i) => (
          <p key={i}>{category}</p>
        ))}
        {/* <p>{bookData.description}</p> */}
      </article>
    </>
  );
};

export default BookCard;
