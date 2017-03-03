'use strict';
const mongoose = require('mongoose');
const service = require('feathers-mongoose');
const mes = require('./mes-model');
const hooks = require('./hooks');

// Tell mongoose to use native promises
// See http://mongoosejs.com/docs/promises.html
mongoose.Promise = global.Promise;
// Connect to your MongoDB instance(s)
mongoose.connect('mongodb://localhost:27017/feathers');

module.exports = function() {
  const app = this;

  const options = {
    Model: mes,
    paginate: {
      default: 5,
      max: 25
    }
  };

  // Initialize our service with any options it requires
  app.use('/mes', service(options));

  // Get our initialize service to that we can bind hooks
  const mesService = app.service('/mes');

  // Set up our before hooks
  mesService.before(hooks.before);

  // Set up our after hooks
  mesService.after(hooks.after);
};
