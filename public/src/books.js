const { findAccountById } = require("./accounts");

function findAuthorById(authors, id) {
  return authors.find(author => author.id === id);
}

function findBookById(books, id) {
  return books.find(book => book.id === id);
}

function partitionBooksByBorrowedStatus(books) {
  let returned = books.filter(book => book.borrows[0].returned);
  let notReturned = books.filter(book => book.borrows[0].returned === false);
  return [notReturned, returned];
}

function getBorrowersForBook(book, accounts) {
    let array = [];
    let borrow = book.borrows;  
    borrow.forEach(borrow=>{
      let account = findAccountById(accounts, borrow.id);
      account['returned'] =  borrow.returned;
      array.push(account);
    })
    return array.slice(0,10);
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
