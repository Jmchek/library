//class overhaul
class Book {
  constructor(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
  }

  info() {
    return this.title + " by " + this.author + ", " + this.pages + " pages, " + this.read;
  }

  readChange() {
    if (this.read == "read") {
      this.read = "not read yet";
    } else {
      this.read = "read";
    };
  }
}

const TheHobbit = new Book("The Hobbit", "J.R.R. Tolkien", 295, "not read yet");

let myLibrary = [new Book ('The Way of Kings','Brandon Sanderson', 500, 'not read yet'), new Book ('Dune','Frank Herbert', 500, 'not read yet'), new Book ('The Road','Cormac McCarthy', 500, 'read')];

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
  const tblBodySelector = document.querySelector("tbody");

  //able to add to form without duping
  if (tbl.childElementCount == 2) {
    tblBodySelector.remove();
  }

  // creating all cells
  for (let i = 0; i < myLibrary.length; i++) {
    // creates a table row
    const row = document.createElement("tr");

    for (let j = 0; j < 6; j++) {
      let values = Object.values(myLibrary[i]);
      row.setAttribute("data-index-number", i);
      // Create a <td> element and a text node, make the text
      // node the contents of the <td>, and put the <td> at
      // the end of the table row
      const cell = document.createElement("td");
      const cellText = document.createTextNode(values[j]);
      const buttonCreate = document.createElement("button");
      // delete button
      buttonCreate.innerText = "DELETE";
      buttonCreate.setAttribute("class", "delButton");
      buttonCreate.setAttribute("data-index-number", i);
      buttonCreate.onclick = (x) => {
        tblBody.deleteRow(x.target.parentNode.parentNode.rowIndex - 1);
        myLibrary.splice(x.target.parentNode.parentNode.rowIndex - 1, 1);
      };
      // read button
      const buttonRead = document.createElement("button");
      buttonRead.innerText = "Read it?";
      buttonRead.setAttribute("class", "readButton");
      buttonRead.onclick = (x) => {
        console.log(x.target.parentNode.parentNode.rowIndex - 1);
        myLibrary[x.target.parentNode.parentNode.rowIndex - 1].readChange();
        generateTable();
      };
      if(j == 5) {
        cell.appendChild(buttonRead);
      } else if(j == 4) {
        cell.appendChild(buttonCreate);
      } else {
        cell.appendChild(cellText);
      }
      //i would reference the object itself whereas j would represent the key in the object
      row.appendChild(cell);
    }

    // add the row to the end of the table body

    tblBody.appendChild(row);
  }

  // put the <tbody> in the <table>
  tbl.appendChild(tblBody);
}

function generateForm() {
  const btn = document.querySelector(".newBookButton");
  const frm = document.getElementById("form");

  btn.addEventListener('click', () => {
    frm.classList.remove("form-hid");
  });
}

function userSubmission() {
  let userForm = document.getElementById("form");

  userForm.addEventListener("submit", (e) => {
  e.preventDefault();
  let title = document.getElementById("title");
  let author = document.getElementById("author");
  let pages = document.getElementById("pages");
  let read = document.getElementById("read");

  addBookToLibrary(new Book (title.value,author.value, pages.value, read.value));
  generateTable();

  //reset form after
  title.value = "";
  author.value = "";
  pages.value = "";
  read.value = "";
  });
}

userSubmission();
generateTable();
generateForm();