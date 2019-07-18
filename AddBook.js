export default function AddBook(state, books) {
    return `
    <form class="bookAddForm">
        <fieldset>
        <legend> Add a book </legend>
        <p>Title:  <input type="text" name="title" placeholder="Title" id = "bookTitle"></p>
        <p>Author:  <input type="text" name="author" placeholder="Author" id = "bookAuthor"></p>
        <p>Cover:  <input type="image" name="Cover" placeholder="Cover" id = "bookCover"></p>
        <p>Price:  <input type="text" name="price" placeholder="$0.00" id = "bookPrice"></p>
        <p>Fun Points:</br>
        <input type="text" name="fun1" id="funPoint1"><br>
        <input type="text" name="fun2" id="funPoint2"><br>
        <input type="text" name="fun3" id="funPoint3"><br>
        </p>
        <button type="button" id="buttonAddBook">Add Book</button>
        </fieldset>
    </form>`;
};