export const searchBook = async (keyWord) => {
  console.log("Searching for Keyword:", keyWord);
  if (keyWord === "") {
    throw new Error("Please enter a word to search");
  }

  try {
    const key = "AIzaSyCHVo2wy6L3ccg-rshpMQrjQyMiX-t0Qs8"; // Make sure to add your API key
    const response = await fetch(
      `https://www.googleapis.com/books/v1/volumes?q=${keyWord}&key=${key}`
    );

    if (!response.ok) {
      throw new Error("Failed to fetch Books");
    }
    const data = await response.json();

    if (!data.items || data.items.length === 0) {
      throw new Error(`No Results found on "${keyWord}".`);
    }

    console.log(data.items);
    console.log(cleanUpData(data));

    return cleanUpData(data);
  } catch (error) {
    console.error("ERROR shown in service", error.message);
    throw error;
  }
};

const cleanUpData = (data) => {
  const dataItems = data.items.map((book) => {
    const title = book.volumeInfo.title || "";
    const author = book.volumeInfo.authors || [];
    const image =
      book.volumeInfo.imageLinks?.thumbnail || "./src/images/default-cover.png";
    const description = book.volumeInfo.description || "";

    const publishedDate = book.volumeInfo.publishedDate || "";
    const language = book.volumeInfo.language || "";
    const categories = book.volumeInfo.categories || [];
    const publisher = book.volumeInfo.publisher || "";
    const country = book.accessInfo.country || "";

    return {
      title,
      author,
      image,
      description,
      publishedDate,
      language,
      categories,
      publisher,
      country,
    };
  });

  return dataItems;
};
