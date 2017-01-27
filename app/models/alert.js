// app/models/nerd.js
// grab the mongoose module
var mongoose = require('mongoose');

// define our nerd model
// module.exports allows us to pass this to other files when it is called
module.exports = mongoose.model('Alert', {
  alertId: { type: Integer },
  name : { type : String, default: '' }
});

module.exports = mongoose.model('Condition', {
	alertId: { type : Integer },
	variable: { type: String },
	value: { type : Integer }
})

