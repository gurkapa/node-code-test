'use strict';
let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let Revision = new Schema({
    created: {
        type: Date
    },
    prev: {
        type: Schema.Types.Mixed
    },
    new: {
        type: Schema.Types.Mixed
    }
})

let Job = new Schema({
  title: {
    type: String
  },
  excerpt: {
    type: String
  },
  content: {
    type: String  
  },
  created: {
    type: Date
  },
  updated: {
    type: Date
  },
  revisions: [ Revision ]
});

Job.pre('save', function(next) {
  let now = new Date();
  if (this.created === undefined) {
    this.created = now;
  }
  this.updated = now;

  next();
});

module.exports = mongoose.model('Job', Job);
