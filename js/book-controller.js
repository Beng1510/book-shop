'use strict'

function onInit() {
    init()
    renderBooks()

}


// function renderBooks() {
//     var strHTML = `<table><thead>
//     <tr><th data-trans="Id">ID</td>
//     <th data-trans="Title">Title</td>
//     <th data-trans="Price">Price</td>
//     <th data-trans="Rating">Rating</td>
//     <th data-trans="Actions">Actions</td>
//     </tr></thead>
//     <tbody>`;
//     var books = getBooksForDisplay();
//     books.forEach(function (book) {

//         strHTML += `<tr>
//         <td>${book.id}</td>
//         <td>${book.title}</td>
//         <td>${book.price}</td>
//         <td>${book.rate}</td>
//         <td><button  class="btn btn-primary" data-trans="Read" onclick="onReadBook('${book.id}')">Read</button>
//         <button  class="btn btn-primary" data-trans="Update" onclick="onUpdateBook('${book.id}')">Update</button>
//         <button  class="btn btn-primary" data-trans="Delete" class="delete-btn" onclick="onRemoveBook(event,'${book.id}')">Delete</button>
//         </td> </tr>`
//     })

//     strHTML += `</tbody></table>`;
//     document.querySelector('.books-container').innerHTML = strHTML;
// }

function renderBooks() {
    var strHTML = `<table><thead>
    <tr><th onclick="onSetSort('id')" data-trans="Id">ID</td>
    <th onclick="onSetSort('title')" data-trans="Title">Title</td>
    <th onclick="onSetSort('price')" data-trans="Price">Price</td>
    <th data-trans="Rating">Rating</td>
    <th data-trans="Actions">Actions</td>
    </tr></thead>
    <tbody>`;
    var books = getBooksForDisplay();
    books.forEach(function (book) {

        strHTML += `<tr>
        <td>${book.id}</td>
        <td>${book.title}</td>
        <td>$${book.price}</td>
        <td>${book.rate}</td>
        <td><button onclick="onReadBook('${book.id}')" type="button" class="btn btn-primary" data-toggle="modal" data-target="#staticBackdrop" data-trans="Read">Read</button>
        <button  class="btn btn-primary" data-trans="Update" onclick="onUpdateBook('${book.id}')">Update</button>
        <button  class="btn btn-primary" data-trans="Delete" class="delete-btn" onclick="onRemoveBook(event,'${book.id}')">Delete</button>
        </td> </tr>`
    })

    strHTML += `</tbody></table>`;
    document.querySelector('.books-container').innerHTML = strHTML;
}





function onRemoveBook(ev, bookId) {
    ev.stopPropagation();
    removeBook(bookId)
    renderBooks()
}


function onReadBook(bookId) {
    var book = getBookById(bookId);
    console.log('book',book);

    var elModal = document.querySelector('.modal')
    // $('.book-modal').show();
    console.log('elModal', elModal);
    elModal.querySelector('.modal-title').innerText = book.title
    elModal.querySelector('h2').innerHTML =  `<img class="card-img-top" src="img/${book.title}.jpg"></img>`
    elModal.querySelector('h3').innerText = 'Book Rating: ' + book.rate
    elModal.querySelector('h4').innerText = 'Price: $' + book.price
    elModal.querySelector('p').innerText = book.desc
    
   
    var elRate = document.querySelector('.rate-book')
    elRate.innerHTML =
    
    `
    <p>Rate this book:</p> <button class="btn btn-outline-primary"y onclick="onRateHigher('${book.id}','${book.rate}')">+</button>
    <span class="rate">${book.rate}</span>
    <button class="btn btn-outline-primary" onclick="onRateLower('${book.id}','${book.rate}')">-</button>
    `
    elModal.hidden = false;

}



function onRateHigher(bookId, bookRate) {
    rateHigher(bookId, bookRate)
    renderBooks()
}
function onRateLower(bookId, bookRate) {
    rateLower(bookId, bookRate)
    renderBooks()
}


function onUpdateBook(bookId) {
    var newPrice = +prompt('Price?');
    updateBook(bookId, newPrice);
    renderBooks()
}


// function onCloseModal() {
//     $('.modal').hide();
// }

function onAddBook() {
    // var elBookTitle = document.querySelector('.add-book select[name=book-name]');
    var elBookName = document.querySelector('.add-book-container input[name=book-name]');
    var elBookPrice = document.querySelector('.add-book-container input[name=book-price]')
    var title = elBookName.value;
    var price = +elBookPrice.value;

    console.log('title', title);

    console.log('price', price);

    addBook(title, price);
    elBookName.value = '';
    elBookPrice.value = '';
    renderBooks()
}

function onRateBook() {
    // var rate = 0;
    var elBookRate = document.querySelector('.book-modal input[name=book-rate]')
    var newRate = +elBookRate.value;
    console.log('rating', newRate);

    rateBook(newRate);
    elBookRate.value = '';
    renderBooks()
}


function onSetLang(lang) {
    setLang(lang);
    // if (lang === 'he') document.body.classList.add('rtl')
    // else document.body.classList.remove('rtl')
    renderBooks();
    doTrans();
}

function onSetSort(sortBy) {
    sortForDisplay(sortBy)
    renderBooks();
}