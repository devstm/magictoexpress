const express = require('express');

const router = express.Router();
const {{model}}Controller = require('../controllers/{{model}}Controller'); // Replace with the appropriate controller file

// Route to get all {{model}}
router.get('/', {{model}}Controller.getAll{{model}});

// Route to get a specific {{model}} by ID
router.get('/:id', {{model}}Controller.get{{model}}ById);

// Route to create a new {{model}}
router.post('/', {{model}}Controller.create{{model}});

// Route to update a specific {{model}} by ID
router.put('/:id', {{model}}Controller.update{{model}});

// Route to delete a specific {{model}} by ID
router.delete('/:id', {{model}}Controller.delete{{model}});

module.exports = router;
