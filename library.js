// function Book(title, author, pages, read) {
//     this.title = title;
//     this.author = author;
//     this.pages = pages;
//     this.read = read;
//     this.info = function() {
//          return title + " by " + author + ", " + pages + " pages, " + read;
//     }
// }

const TheHobbit = new Book("The Hobbit", "J.R.R. Tolkien", 295, "not read yet");

// console.log(TheHobbit.info());

let myLibrary = [{title: 'The Way of Kings', author: 'Brandon Sanderson', pages: 500, read: 'not read yet'}, {title: 'The Bible', author: 'God', pages: 500, read: 'not read yet'}];

function Book(title, author, pages, read) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
        this.info = function() {
             return title + " by " + author + ", " + pages + " pages, " + read;
        }
    }

function addBookToLibrary(userBook) {
  myLibrary.push(userBook);
}

function displayBooks() {
  for (books of myLibrary) {
    console.log(books);
  }
}

function generateTable() {
  // creates a <table> element and a <tbody> element
  const tbl = document.querySelector(".bookTable");
  const tblBody = document.createElement("tbody");

  // creating all cells
  for (let i = 0; i < myLibrary.length; i++) {
    // creates a table row
    const row = document.createElement("tr");

    for (let j = 0; j < 4; j++) {
      // Create a <td> element and a text node, make the text
      // node the contents of the <td>, and put the <td> at
      // the end of the table row
      const cell = document.createElement("td");
      // const cellText = document.createTextNode(`cell in row ${i}, column ${j}`);
      const cellText = document.createTextNode(myLibrary[i].value);
      //i would reference the object itself whereas j would represent the key in the object
      cell.appendChild(cellText);
      row.appendChild(cell);
    }

    // add the row to the end of the table body
    tblBody.appendChild(row);
  }

  // put the <tbody> in the <table>
  tbl.appendChild(tblBody);
}

generateTable();