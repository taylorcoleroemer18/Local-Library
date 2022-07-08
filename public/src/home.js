function getTotalBooksCount(books) {
  return books.length;
}

function getTotalAccountsCount(accounts) {
  return accounts.length;
}

function getBooksBorrowedCount(books) {
  let checkedOut = 0;
  books.forEach(book => {
    if(book.borrows[0].returned === false){
      checkedOut += 1;
    }
  }); 
  return checkedOut;
}

function _splice(array){
  return array.sort((a, b) => (a.count < b.count ? 1 : -1)).slice(0, 5);
}

function getMostCommonGenres(books) {
  let objArray = [];
  let genres = books.map(book => book.genre);
  genres.map((genre) => {
    let index = objArray.findIndex((element) => element.name === genre);
    if (index >= 0) {
      objArray[index].count = objArray[index].count += 1;
    } else {
      objArray.push({ name: genre, count: 1 });
    }
  });
  objArray = _splice(objArray);
  return objArray;
}

function getMostPopularBooks(books) {
  let mostPopular = [];
  let borrows = books.reduce((acc, book) => {
    mostPopular.push({ name: book.title, count: book.borrows.length });
  })
  mostPopular = _splice(mostPopular);
  return mostPopular;
}

function getMostPopularAuthors(books, authors) {
  let mostPopularAuthors = [];
  authors.forEach(author => {
    let authorInfo = { name: `${author.name.first} ${author.name.last}`, count: 0 };
    books.forEach((book) => {
      if (book.authorId === author.id) {
        authorInfo.count += book.borrows.length;
      }
    });
    mostPopularAuthors.push(authorInfo);
  });
  mostPopularAuthors = _splice(mostPopularAuthors);
  return mostPopularAuthors;
}



module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
