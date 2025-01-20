import classes from "./Header.module.scss";
const Header = () => {
  return (
    <>
      <div className={classes.header}>
        <h1 className={classes.h1}> Google Books </h1>
        <img className={classes.img} src="./src/images/books.png" alt="books" />
      </div>
    </>
  );
};

export default Header;
