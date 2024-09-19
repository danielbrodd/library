const form = document.querySelector("form")
const title = document.querySelector('#title');
const author = document.querySelector('#author');
const pages = document.querySelector('#pages');


title.addEventListener("input", (e) => {
    if (title.validity.valid) {
        title.classList.remove("error");
    }
});


form.addEventListener("submit", (event) => {
    if (!title.validity.valid) {
        title.className = "error"
    }
    console.log("submit")
})
