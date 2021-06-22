const mongoose = require('mongoose');

//Article schema
const articleSchema = mongoose.Schema({
	title: {
		type: String,
		reuired: true,
	},
	author: {
		type: String,
		reuired: true,
	},
	body: {
		type: String,
		reuired: true,
	},
});

module.exports = Article = mongoose.model(
	'Article',
	articleSchema
);
