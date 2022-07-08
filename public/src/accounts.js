function findAccountById(accounts, id) {
  return accounts.find(account => account.id === id);
}

function sortAccountsByLastName(accounts) {
  accounts.sort((accountA, accountB) => 
  accountA.name.last.toLowerCase() > accountB.name.last.toLowerCase() ? 1 : -1);
  return accounts;
}

function getTotalNumberOfBorrows(account, books) {
  let total = 0;
  const accountId = account.id;
  for(let book of books){
    let borrows = book.borrows;
    for(let borrow of borrows){
      if(accountId === borrow.id){
        total += 1;
      }
    }
  }
  return total;
}

const _findAuthorById = (authors, id) => {
  return authors.find(author => author.id === id);
}

function getBooksPossessedByAccount(account, books, authors) {
  let found = [];
  found = books.filter(book => {
    const borrows = book.borrows;
    return borrows.some(borrow => borrow.id === account.id && borrow.returned === false
  )})
  found = found.map(book => {
    let author = _findAuthorById(authors, book.authorId);
    let bookWithAuthor = {
      ...book,
      author,
    };
    return bookWithAuthor;
  });
  return found;
}





module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
