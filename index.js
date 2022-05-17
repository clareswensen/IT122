import express from 'express';
//import { getAll, getItem, addItem, deleteItem } from './data.js';
import { Oyster } from './Oysters.js';

const app = express(); // create express app
const port = 3000; // create a variable for the port

app.set('view engine', 'ejs'); // set the view engine to ejs

app.use(express.static('./public')); // set location for static files
app.use(express.urlencoded({ extended: true })); //Parse URL-encoded bodies
app.use(express.json()); //parses json bodies

app.get('/', (req, res, next) => {
	Oyster.find({}).lean()
		.then((oysters) => {
			res.render('home', { oysters });
		})
		.catch((err) => next(err));
});

app.get('/detail', (req, res) => {
	Oyster.findOne({ name: req.query.name })
		.lean()
		.then((oyster) => {
			res.render('details', { result: oyster });
		});
});

app.get('/delete', (req, res) => {
	Oyster.deleteOne({ name: req.query.name }).then((oyster) => {
		console.log("Oyster Deleted");
    res.redirect('/');
	});
});

// send plain text response
app.get('/about', (req, res) => {
	res.type('text/plain');
	res.send('About page');
});

// define 404 handler, must put at end
app.use((req, res) => {
	res.type('text/plain');
	res.status(404);
	res.send('404 - Not found');
});

app.listen(port, () => {
	console.log(`Express server listening on port ${port}`);
});
