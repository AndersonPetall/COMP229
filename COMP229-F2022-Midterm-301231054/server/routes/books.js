// modules required for routing
let express = require("express");
let router = express.Router();
let mongoose = require("mongoose");

// define the book model
let book = require("../models/books");

/* GET books List page. READ */
router.get("/", (req, res, next) => {
  // find all books in the books collection
  book.find({}, (err, books) => {
    if (err) {
      return next(err);
    } else {
      res.render("books/index", {
        title: "All Books Page",
        books: books,
      });
    }
  });
});

//  GET the Book Details page in order to add a new Book
router.get("/add", (req, res, next) => {
  /*****************
   * ADD CODE HERE *
   *****************/
  res.render("books/details", {
    title: "Book Add Page",
    books: "",
  });
});

// POST process the Book Details page and create a new Book - CREATE
router.post("/add", async (req, res, next) => {
  /*****************
   * ADD CODE HERE *
   *****************/
  // let sample = new book({
  //   Title: req.body.title,
  //   Description: req.body.description,
  //   Price: req.body.price,
  //   Author: req.body.author,
  //   Genre: req.body.genre,
  // });
  try {
    await book.create(req.body);
    // let onebook = await new book(req.body);
    // onebook.save();
    res.redirect("/books");
  } catch (err) {
    console.log("no");
    return next(err);
  }
});

// GET the Book Details page in order to edit an existing Book
router.get("/:id", (req, res, next) => {
  /*****************
   * ADD CODE HERE *
   *****************/
  book.findById(req.params.id, (err, book) => {
    if (err) {
      return next(err);
    } else {
      console.log(book);
      res.render("books/details", {
        title: "Book Edit Page",
        books: "book",
      });
    }
  });
});

// POST - process the information passed from the details form and update the document
router.post("/:id", (req, res, next) => {
  /*****************
   * ADD CODE HERE *
   *****************/
  book.findByIdAndUpdate(req.params.id, req.body, (err, book) => {
    if (err) {
      return next(err);
    } else {
      console.log(book);
      res.redirect("/books");
    }
  });
});

// GET - process the delete by user id
router.get("/delete/:id", (req, res, next) => {
  /*****************
   * ADD CODE HERE *
   *****************/
  book.findByIdAndDelete(req.params.id, (err) => {
    if (err) {
      return next(err);
    } else {
      res.redirect("/books");
    }
  });
});

module.exports = router;
