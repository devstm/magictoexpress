const {{model}} = require('../models');

function getAll{{model}}(req, res) {
  // Implementation for getting all {{name}}
}

function get{{model}}ById(req, res) {
  // Implementation for getting a {{name}} by ID
}

function create{{model}}(req, res) {
  // Implementation for creating a new {{name}}
}

function update{{model}}(req, res) {
  // Implementation for updating a {{name}} by ID
}

function delete{{model}}(req, res) {
  // Implementation for deleting a {{name}} by ID
}

// Export controller methods
module.exports = {
  getAll{{model}},
  get{{model}}ById,
  create{{model}},
  update{{model}},
  delete{{model}},
};
