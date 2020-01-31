const express = require('express')
const router = express.Router()

const books = require('../controllers/books')
const cameras = require('../controllers/cameras')
const posts = require('../controllers/posts')
const comments = require('../controllers/comments')
const contacts = require('../controllers/contacts')
const products = require('../controllers/sc-products')
const items = require('../controllers/sc-items')
const messages = require('../controllers/messages')

// Bookstore Routes (API Checkpoint Routes)
router.get('/books', books.getAll)
router.get('/books/:id', books.getOne)
router.post('/books', books.addOne)
router.patch('/books/:id', books.updateOne)
router.patch('/books/cart/add/:id', books.addToCart)
router.patch('/books/cart/remove/:id', books.removeFromCart)
router.delete('/books/:id', books.deleteBook)

// Camera Shop Routes
router.get('/cameras', cameras.getAll)
router.get('/cameras/:id', cameras.getOne)
router.post('/cameras', cameras.addOne)
router.patch('/cameras/:id', cameras.updateOne)
router.delete('/cameras/:id', cameras.deleteBook)

// Reddit clone routes
router.get('/posts', posts.getAll)
router.get('/posts/:id', posts.getOne)
router.post('/posts', posts.addOne)
router.patch('/posts/:id', posts.updateOne)
router.delete('/posts/:id', posts.deleteBook)

router.get('/comments', comments.getAll)
router.get('/comments/:id', comments.getOne)
router.post('/comments', comments.addOne)
router.patch('/comments/:id', comments.updateOne)
router.delete('/comments/:id', comments.deleteBook)

// User Authentication Routes (Router Checkpoint)
router.get('/contacts', contacts.getAll)
router.get('/contacts/:id', contacts.getOne)
router.post('/contacts', contacts.addOne)
router.patch('/contacts/:id', contacts.updateOne)
router.delete('/contacts/:id', contacts.deleteBook)

// React Inbox Routes
router.get('/messages', messages.getAll)
router.get('/messages/:id', messages.getOne)
router.post('/messages', messages.addOne)
router.patch('/messages/:id', messages.updateOne)
router.delete('/messages/:id', messages.deleteBook)

// Shopping Cart Routes
router.get('/products', products.getAll)
router.get('/products/:id', products.getOne)
router.post('/products', products.addOne)
router.patch('/products/:id', products.updateOne)
router.delete('/products/:id', products.deleteBook)

router.get('/items', items.getAll)
router.get('/items/:id', items.getOne)
router.post('/items', items.addOne)
router.patch('/items/:id', items.updateOne)
router.delete('/items/:id', items.deleteBook)

module.exports = router
