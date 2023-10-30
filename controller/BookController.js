const Book = require("../model/book")


// api to create a new book
const createBook = async (req, res) => {
    console.log("New Book", req.body);

    const { title, author, summary } = req.body;

    try {
        const book = new Book({
            title,
            author,
            summary
        });

        await book.save();

        res.status(200).json("Book created successfully");
    } catch (err) {
        console.log(err);
        res.status(500).json("Error occurred");
    }
};

// api to delete a book by its id;
const removeBook = async (req, res) => {
    const bookId = req.params.id;

    try {
        const deletedBook = await Book.findByIdAndRemove(bookId);

        if (!deletedBook) {
            return res.status(404).json({ error: 'Book not found' });
        }
        res.status(200).json({ message: 'Book deleted successfully' });
    } catch (error) {
        console.log(error)
    }
};

// api to get all books saved in database
const getBooks = async (req, res) => {
    try {
        const books = await Book.find();

        res.status(200).json(books);
    } catch (error) {
        console.log(error)
    }
};

// api to get a single book by id
const getSingleBook = async (req, res) => {
    const id = req.params.id;

    try {
        const book = await Book.findById(id);

        if (!book) {
            return res.status(404).json({ error: 'Book not found' });
        }
        res.status(200).json(book);
    } catch (error) {
        console.log(error)
    }
};

// api to edit a book by its id
const editBook = async (req, res) => {
    const id = req.params.id;
    const newData = req.body;
    try {
        const updatedBook = await Book.findByIdAndUpdate(id, newData, { new: true });

        if (!updatedBook) {
            return res.status(404).json({ error: 'Book not found' });
        }
        res.status(200).json(updatedBook);
    } catch (error) {
        console.log(error)
    }
};

module.exports = { createBook, removeBook, getBooks, getSingleBook, editBook };

