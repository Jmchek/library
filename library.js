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
  const tblBodySelector = document.querySelector("tbody");

  //able to add to form without duping
  if (tbl.childElementCount == 2) {
    tblBodySelector.remove();
  }

  // creating all cells
  for (let i = 0; i < myLibrary.length; i++) {
    // creates a table row
    const row = document.createElement("tr");

    for (let j = 0; j < 5; j++) {
      let values = Object.values(myLibrary[i]);
      row.setAttribute("data-index-number", i);
      // Create a <td> element and a text node, make the text
      // node the contents of the <td>, and put the <td> at
      // the end of the table row
      const cell = document.createElement("td");
      // const cellText = document.createTextNode(`cell in row ${i}, column ${j}`);
      const cellText = document.createTextNode(values[j]);
      const buttonCreate = document.createElement("button");
      buttonCreate.innerText = "DELETE";
      buttonCreate.setAttribute("class", "delButton");
      buttonCreate.setAttribute("data-index-number", i);
      buttonCreate.onclick = (x) => {
        // tblBody.deleteRow(x.target.dataset.indexNumber);
        // tblBody.deleteRow(x);
        //working here, find way to delete row
        console.log(x);
      };
      if(j == 4) {
        cell.appendChild(buttonCreate);
      } else {
        cell.appendChild(cellText);
      }
      //i would reference the object itself whereas j would represent the key in the object
      row.appendChild(cell);
    }

    // add the row to the end of the table body

    //testing here
    // row.appendChild(cell);

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

  addBookToLibrary({title : title.value, author : author.value, pages : pages.value, read : read.value});
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