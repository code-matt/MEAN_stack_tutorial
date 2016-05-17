'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Create a schema for the Todo object
var todoSchema = new _mongoose2.default.Schema({
  text: String
});
// Expose the model so that it can be imported and used in the controller (to search, delete, etc)
// src/models/Todo.js
exports.default = _mongoose2.default.model('Todo', todoSchema);