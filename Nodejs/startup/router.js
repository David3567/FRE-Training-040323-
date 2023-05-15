const todos = require('../routers/todos');

module.exports = function(app) {
  app.use('/todos', todos);
} 