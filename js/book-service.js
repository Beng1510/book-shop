
// debugger
const STORAGE_KEY = 'booksDB';
var gBooks;
console.log('gBooks', gBooks);


function init() {
    _createBooks();
    // console.log('gbo',books);
}


function getBooksForDisplay() {
    var books = gBooks;
    console.log('books', books);
    // sortBooks(books)
    // books = _createBooks() 
    return books;
}
function sortBy(sortBy) {
    gSortBy = sortBy;
}


function getBooks() {
    return gBooks;
}


function removeBook(bookId) {
    var bookIdx = gBooks.findIndex(function (book) {
        return bookId === book.id
    })
    gBooks.splice(bookIdx, 1)
    _saveBooksToStorage();
}


function addBook(title, price) {
    var book = _createBook(title, price)

    gBooks.unshift(book)
    _saveBooksToStorage()
    console.log('gbooks check', gBooks);
}


function getBookById(bookId) {
    console.log('gBooks', gBooks);
    var book = gBooks.find(function (book) {
        return bookId === book.id
    })
    console.log('book', book);
    return book
}


function updateBook(bookId, newPrice) {
    var bookIdx = gBooks.findIndex(function (book) {
        return book.id === bookId;
    })
    gBooks[bookIdx].price = newPrice;
    _saveBooksToStorage();
}


function _createBook(title, price) {
    return {
        id: makeId(),
        title: title,
        price: price,
        desc: makeLorem(),
        rate: 0
    }
}


function _createBooks() {
    // console.log('check2', books);
    gBooks = loadFromStorage(STORAGE_KEY)

    if (!gBooks || !gBooks.length) {
        //     books = []
        //     books.push(_createBook('Harry Potter and The Philosophers Stone', 12.99,))
        //     books.push(_createBook('Gone Girl', 9.99))
        //     books.push(_createBook('Inferno', 10.48))
        //     books.push(_createBook('Game of Thrones', 15.79))
        // }

        gBooks = [
            {
                id: makeId(),
                title: 'Harry Potter and The Philosophers Stone',
                price: 12.99,
                // imgUrl: img,
                desc: "Hidden deep within, in the school lies an object that can make you immortal,that can make you powerful,that can make you deadly!",
                rate: 0,
                publishedAt: 1448693940000,
                labels: ["Fantasy" , " Adventure"],
            },
            {
                id: makeId(),
                title: 'Gone Girl',
                price: 9.99,
                // imgUrl: img,
                desc: "You don't know what you've got 'til it's...",
                rate: 0,
                publishedAt: 1448693940000,
                labels: ["Thriller" , " Crime"],
            },
            {
                id: makeId(),
                title: 'Lord of the Flies',
                price: 11.99,
                // imgUrl: img,
                desc: "We did everything just the way grown-ups would have... what went wrong?",
                rate: 0,
                publishedAt: 1448693940000,
                labels: ["Psychological Fiction" , " Allegorical"],
            },
            {
                id: makeId(),
                title: 'Inferno',
                price: 10.48,
                // imgUrl: img,
                desc: "Every clue will take him deeper",
                rate: 0,
                publishedAt: 1448693940000,
                labels: ["Action" , " Puzzle"],
            },
            {
                id: makeId(),
                title: 'Game of Thrones',
                price: 15.78,
                // imgUrl: img,
                desc: "When you play the game of thrones, you win or you die. You win or you die.",
                rate: 0,
                publishedAt: 1448693940000,
                labels: ["Action" , " Fantasy"],
            },
        ]
        // gBooks = books
        _saveBooksToStorage();
        // console.log('books', books);
        console.log('check', gBooks);

    }

}

function _saveBooksToStorage() {
    saveToStorage(STORAGE_KEY, gBooks);
}


function rateBook(bookId, newRate) {
    var bookIdx = gBooks.findIndex(function (book) {
        return book.id === bookId;
    })
    gBooks[bookIdx].rate = newRate;
    _saveBooksToStorage();
}


function rateHigher(bookId, rate) {
    if (rate >= 10) return
    var bookIdx = gBooks.find(function (book) {
        return bookId === book.id
    })
    console.log('bookIdx', bookIdx);
    bookIdx.rate++;
    _saveBooksToStorage();
    onReadBook(bookId);

}

function rateLower(bookId, rate) {
    if (rate <= 0) return
    var bookIdx = gBooks.find(function (book) {
        return bookId === book.id
    })
    console.log('bookIdx', bookIdx);
    bookIdx.rate--;
    _saveBooksToStorage();
    onReadBook(bookId);
}



function sortForDisplay(sortBy) {
    gBooks.sort(function (book1, book2) {
        var result = (book1[sortBy] < book2[sortBy]) ? -1 : (book1[sortBy] > book2[sortBy]) ? 1 : 0;
        return result;
    })
}