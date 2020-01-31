const express = require('express')
const router = express.Router()
const knex = require('../db/knex')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index')
})

/* GET bookstore routes */
router.get('/api-checkpoint/docs', function(req, res, next) {
  res.render('api-checkpoint-routes')
})

/* GET camera shop routes */
router.get('/camera-shop/docs', function(req, res, next) {
  res.render('camera-shop-routes')
})

/* GET reddit clone routes */
router.get('/redux-checkpoint/docs', function(req, res, next) {
  res.render('redux-checkpoint-routes')
})

/* GET router checkpoint. */
router.get('/router-checkpoint/docs', function(req, res, next) {
  res.render('router-checkpoint-routes')
})

/* GET router checkpoint. */
router.get('/components-checkpoint/docs', function(req, res, next) {
  res.render('components-checkpoint-routes')
})

module.exports = router
