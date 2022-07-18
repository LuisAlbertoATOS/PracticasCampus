document.addEventListener('DOMContentLoaded', function(){

// GET ELEMENT BY ID
// const elementID = document.getElementById("id-example");

// GET ELEMENT BY CLASS 
// const elementsClass = document.getElementsByClassName("class-example");
// elementsClass[0];

// GET ELEMENT BY TAG
// const elementsTag = document.getElementsByTagName('li');
// elementsTag[0];

let titles = document.getElementsByClassName('title');

// convert from element to array... the loop it
Array.from(titles).forEach(function(item){
    // console.log(item);
})

// QUERY SELECTOR
// this returns a node list and there's no need to do Array.from(name)
let wmf = document.querySelector('#book-list li:nth-child(2) .name');
// console.log(wmf);

// select all elements that match, not just the first one
let books = document.querySelectorAll("#book-list li .name");
books.forEach(function(book){
    book.textContent += " (available)"; // text inside of elements
})

let bookList = document.querySelector("#book-list");
// console.log(bookList.innerHTML);
// bookList.innerHTML = "<h2>Books and more books...</h2>";
bookList.innerHTML += "<p>This is how you add HTML</p>";

let banner = document.querySelector("#page-banner");
console.log("#page-banner node type is:", banner.nodeType);
console.log("#page-banner node name is:", banner.nodeName);
console.log("#page-banner child nodes are:", banner.hasChildNodes());

// true to get nested elements, false to get only that element
let clonedBanner = banner.cloneNode(true);
console.log(clonedBanner);

console.log(bookList.parentNode.parentNode); // or .parentElement

console.log(bookList.children); // without line breaks
console.log(bookList.childNodes);

console.log(bookList.nextSibling);
console.log(bookList.nextElementSibling);
console.log(bookList.previousSibling);
console.log(bookList.previousElementSibling);

bookList.previousElementSibling.querySelector('p').innerHTML += '<br /> Too cool for everyone else';

let head2 = document.querySelector("#book-list h2");
head2.addEventListener('click', function(e){
    console.log(e.target);
    console.log(e);
});

// DELETE ELEMENT with EVENT LISTENER
let list = document.querySelector("#book-list ul");
list.addEventListener('click', function(e){
    if(e.target.className == 'delete'){
        let li = e.target.parentElement;
        list.removeChild(li);
    }
});

let link = document.querySelector("#page-banner a");
link.addEventListener('click', function(e){
    e.preventDefault();
    console.log("navigation to", e.target.textContent, 'prevented');
});

// FORMS
let addBookForms = document.forms['add-book'];
addBookForms.addEventListener('submit', function(e){
    e.preventDefault();
    let bookTitle = addBookForms.querySelector('input[type="text"]').value;

    // create elements
    let li = document.createElement('li');
    let bookname = document.createElement('span');
    let deleteBtn = document.createElement('span');

    // add content and classes
    bookname.textContent = bookTitle;
    bookname.classList.add('name');

    deleteBtn.textContent = 'Delete';
    deleteBtn.classList.add('delete');

    // append to dom
    li.appendChild(bookname);
    li.appendChild(deleteBtn);
    list.appendChild(li);
});

// ATTRIBUTES
// .removeAttribute('class');
// .hasAttribute('class'); (true / false)
// .setattribute('class', 'name-2');
// .getAttribute('class');

let hideBox = document.querySelector('#hide');
hideBox.addEventListener('change', function(e){
    if(hideBox.checked){
        list.style.display = "none";
    } else{
        list.style.display = "initial";
    }
});

// SEARCH

let searchBar = document.forms['search-books'].querySelector('input');
searchBar.addEventListener('keyup', function(e){
    let term = e.target.value.toLowerCase();
    let books = list.getElementsByTagName('li');

    Array.from(books).forEach(function(book){
        let title = book.firstElementChild.textContent;
        if(title.toLowerCase().indexOf(term) != -1){
            book.style.display = "block";
        } else{
            book.style.display = "none";
        }
    });
});

// tabbed content
let tabs = document.querySelector('.tabs');
let panels = document.querySelectorAll('.panel');
tabs.addEventListener('click', function(e){
    if(e.target.tagName == 'LI'){
        let targetPanel = document.querySelector(e.target.dataset.target);
        panels.forEach(function(panel){
            if(panel == targetPanel){
                panel.classList.add('active');
            } else{
                panel.classList.remove('active');
            }
        });
    }
});

// DOM CONTENT LOADED EVENT
})



