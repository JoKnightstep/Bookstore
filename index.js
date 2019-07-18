// const book1 = {
//     "id": 1,
//     "name": "The Wonderful Wizard of Oz",
//     "author": "L. Frank Baum"
//     "pictureUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Wizard_title_page.jpg/220px-Wizard_title_page.jpghttp://graphics8.nytimes.com/images/2015/10/15/dining/15RECIPE20DIN/15RECIPE20DIN-articleLarge.jpg",
//     "price": 19.00,
//     "sellingPoints": [
//         "America's greatest and best-loved homegrown fairytale",
//         "Translated in over 50 languages.",
//         "One of the most-read children's books."
//     ]
// }

// const book2 = {
//     "id": 2,
//     "name": "Alice's Adventure in Wonderland",
//     "author": "Louis Carrol"
//     "pictureUrl": "https://https://cannonballread3.files.wordpress.com/2012/01/alice06.jpg.wikimedia.org/wikipedia/commons/thumb/d/d2/Wizard_title_page.jpg/220px-Wizard_title_page.jpghttp://graphics8.nytimes.com/images/2015/10/15/dining/15RECIPE20DIN/15RECIPE20DIN-articleLarge.jpg",
//     "price": 18.65,
//     "sellingPoints": [
//         "tale plays with logic, giving the story lasting popularity with adults as well as with children",
//         "one of the best examples of the literary nonsense genre",
//         "I am the Carpenter. Goo goo g'joob"
//     ]
// }

// const book3 = {
//     "id": 3,
//     "name": "Robinson Crusoe",
//     "author": "Daniel Defoe"
//     "pictureUrl": "https://https://images-na.ssl-images-amazon.com/images/I/61vx%2B62ckJL.jpg://cannonballread3.files.wordpress.com/2012/01/alice06.jpg.wikimedia.org/wikipedia/commons/thumb/d/d2/Wizard_title_page.jpg/220px-Wizard_title_page.jpghttp://graphics8.nytimes.com/images/2015/10/15/dining/15RECIPE20DIN/15RECIPE20DIN-articleLarge.jpg",
//     "price": 17.19,
//     "sellingPoints": [
//         "often credited as marking the beginning of realistic fiction as a literary genre",
//         "become one of the most widely published books in history",
//         "Gave way to the term Man Friday and Girl Friday"

import AddBook from "./components/AddBook.js";
import Header from "./components/Header.js";
import Content from "./components/Content.js";
import Footer from "./components/Footer.js";
// import * as states from "./store";

const home = {
    title: "Welcome to bookstore"
};

const root=document.querySelector("#root");

let book = JSON.parse(localStorage.getItem('books')); // 

function render(state, books) {
    root.innerHTML = `
        ${Header(state)}
        ${Content(state, books)}
        ${AddBook(state)}
        ${Footer(state)}
    `
    document.querySelectorAll('nav li > a')
        .forEach((link) => link.addEventListener('click', (event) => {
            event.preventDefault();
            console.log("event.target.textContent", event.target.textContent);
            render(states[event.target.textContent]);
            localStorage.setItem('books', JSON.stringify(book));
        })
    );

    document.getElementById("buttonAddBook").addEventListener("click", function() {
        let title = document.getElementById('bookTitle').value;
        let cover = document.getElementById('bookcover').value;
        let author = document.getElementById('bookAuthor').value;
        let price = document.getElementById('bookPrice').value;
        let funPoint1 = document.getElementById('funPoint1').value;
        let funPoint2 = document.getElementById('funPoint2').value;
        let funPoint3 = document.getElementById('funPoint3').value;
    
        let newBook =  {
            id: book.length,
            title: title,
            cover: cover,
            author: author,
            price: price,
            funPoints: new Array()
        };
    
        let spIndex = 0;
    
        if (funPoint1 != "") {
            newBook.funPoints[spIndex] = funPoint1;
            spIndex++;
        }
    
        if (funPoint2 != "") {
            newBook.funPoints[spIndex] = funPoint2;
            spIndex++;
        }
    
        if (funPoint3 != "") {
            newBook.funPoints[spIndex] = funPoint3;
            spIndex++;
        }
    
        book.push(newBook);
    
        render(state,book);
    });
    localStorage.setItem('books', JSON.stringify(book));
};


render(home, book);