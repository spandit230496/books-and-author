const express = require("express");
const { createBook,editBook,removeBook,getBooks,getSingleBook} = require('../controller/BookController');
const router = express.Router();

router.post('/add-book', createBook);
router.delete('/delete-book/:id', removeBook);
router.post("/edit/:id", editBook)
router.get('/get-books', getBooks);
router.get('/get-single-book/:id', getSingleBook);

module.exports = router;


