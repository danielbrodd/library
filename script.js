const library = []
class Book {
    constructor (titel, author, pages, isread) {
        this.titel = titel,
        this.author = author,
        this.pages = pages,
        this.isread = Boolean(isread)
    }
}

let testBook1 = new Book('Hobbit','J.R.R Tolkien', 295, false);

const test_book = new Book('test', 'tester Mctester', 1, false);

library.push(test_book);
library.push(testBook1);

function openNav() {
    // document.querySelector('#side-menu').style.width = '300px';
    document.querySelector('#side-menu').classList.add('open');

    // document.querySelector('main').style.marginLeft = '300px';
    document.querySelector('main').classList.add('shift');


    setTimeout(function () {
        document.querySelector('.newBook').style.visibility = 'visible';
        document.querySelector('.addBookText').style.visibility = 'visible';
    }, 250  )
    setTimeout(function () {
        document.querySelector('main').addEventListener('click', () => {
            closeNav();
        }, 200)
    })
}
function closeNav() {
    // document.querySelector('#side-menu').style.width = '0px';
    document.querySelector('#side-menu').classList.remove('open');
    // document.querySelector('main').style.marginLeft = '0px';
    document.querySelector('main').classList.remove('shift');



    // document.querySelector('.newBook').style.visibility = 'hidden';
    document.querySelector('.addBookText').style.visibility = 'hidden';
}

function createTable() {
    let table = document.querySelector('.table');
    let tbody = document.querySelector('.table > tbody');
    while (tbody.firstChild) {
        tbody.removeChild(tbody.firstChild)
    };
    library.forEach((book, index) => {
        let tr = document.createElement('tr');
        for (let key in book) {
            let td = document.createElement('td');
            tr.appendChild(td);
            td.innerText = book[key];
        }
        let deleteButton = document.createElement('button');
        deleteButton.innerText = 'Remove';
        deleteButton.classList.add('rmvBtn')
        deleteButton.addEventListener('click', () => {
            library.splice(index, 1);
            createTable();
        })
        let td = document.createElement('td');
        td.appendChild(deleteButton);
        tr.appendChild(td);

        tbody.appendChild(tr);
    })
}


    document.querySelector('.newBook').addEventListener('submit', function(event) {
        event.preventDefault();

        let formData = new FormData(this);

        let isRead = formData.get('isread') === 'true';
        let newBook = new Book(
            formData.get('title'),
            formData.get('author'),
            parseInt(formData.get('pages')),
            isRead
        );
        library.push(newBook);
        createTable();
        this.reset();
    });

document.addEventListener('DOMContentLoaded', () => {
    createTable();

});