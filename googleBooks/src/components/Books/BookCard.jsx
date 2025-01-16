const BookCard = (bookData) => {
  return (
    <>
      <article className={classes.books}>
        <h3>{bookData.title}</h3>
        <h4>{bookData.author}</h4>
        {image && <img src={bookData.image} alt={bookData.title} />}
        <p>{bookData.description}</p>
      </article>
    </>
  );
};

export default BookCard;
