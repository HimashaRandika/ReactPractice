

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Assignment = new Schema({
  course: {
    type: String,
  },
  assignment_name: {
    type: String,
  },
  deadline: {
    type: String,
    required: true
  }
}, {
  collection: 'assignment' // Naming convention for collections
});

module.exports = mongoose.model('Assignment', Assignment);
