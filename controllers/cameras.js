const knex = require('../db/knex')

module.exports = {
  getAll(req, res) {
    knex('cameras').then(cameras => res.json(cameras))
  },
  getOne(req, res) {
    knex('cameras')
      .where('id', req.params.id)
      .then(camera => res.json(camera))
  },
  addOne(req, res) {
    knex('cameras')
      .insert(req.body)
      .returning('*')
      .then(newCamera => res.json(newCamera))
  },
  updateOne(req, res) {
    knex('cameras')
      .where('id', req.params.id)
      .update(req.body)
      .returning('*')
      .then(updatedCamera => res.json(updatedCamera))
  },
  deleteBook(req, res) {
    knex('cameras')
      .where('id', req.params.id)
      .del()
      .returning('*')
      .then(deletedCamera => res.json(deletedCamera))
  }
}
