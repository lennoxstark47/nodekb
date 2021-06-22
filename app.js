const express = require('express');
const path = require('path');

const app = express();

//view engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

//home route
app.get('/', (req, res) => {
	let articles = [
		{
			id: 1,
			title: 'Article One',
			author: 'Twisam Stark',
			body: 'This is article one',
		},
		{
			id: 2,
			title: 'Article Two',
			author: 'Twisam Stark',
			body: 'This is article two',
		},
		{
			id: 3,
			title: 'Article Three',
			author: 'Twisam Stark',
			body: 'This is article three',
		},
	];
	res.render('index', {
		title: 'Articles',
		articles: articles,
	});
});

//add route
app.get('/articles/add', (req, res) => {
	res.render('add_articles', {
		title: 'Add articles',
	});
});

app.listen(3000, () => {
	console.log('App is running on port 3000');
});
