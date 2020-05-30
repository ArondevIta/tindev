const express = require('express')
const bodyparser = require('body-parser')

const DevController = require('./controllers/DevController')
const LikeController = require('./controllers/LikeController')
const DislikeController = require('./controllers/DislikeController')

const routes = express.Router()

const jsonParser = bodyparser.json()

routes.get('/devs',DevController.index)
routes.post('/devs', jsonParser, DevController.store)
routes.post('/devs/:devId/likes', jsonParser, LikeController.store)
routes.post('/devs/:devId/dislikes', jsonParser, DislikeController.store)

module.exports = routes
