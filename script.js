const library = []

function Book(titel, author, pages, isread) {
    this.titel = titel,
    this.author = author,
    this.pages = pages,
    this.isread = Boolean(isread)
}

const test_book = Book('test', 'tester Mctester', 1, true);


function openNav() {
    document.querySelector('#side-menu').style.width = '300px';
    document.querySelector('main').style.marginLeft = '300px';

    document.querySelector('.table').style.visibility = 'hidden';
    setTimeout(function () {
        document.querySelector('.newBook').style.visibility = 'visible';
        document.querySelector('.addBookText').style.visibility = 'visible';
    }, 250  )
}
function closeNav() {
    document.querySelector('#side-menu').style.width = '0px';
    document.querySelector('main').style.marginLeft = '0px';
    document.querySelector('.table').style.visibility = 'visible';

    document.querySelector('.newBook').style.visibility = 'hidden';
    document.querySelector('.addBookText').style.visibility = 'hidden';
}