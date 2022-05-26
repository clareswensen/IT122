import express from 'express';
import cors from 'cors';
//import { getAll, getItem, addItem, deleteItem } from './data.js';
import { Oyster } from './Oysters.js';

const app = express(); // create express app
const port = 3000; // create a variable for the port

app.set('view engine', 'ejs'); // set the view engine to ejs

app.use(express.static('./public')); // set location for static files
app.use(express.urlencoded({ extended: true })); //Parse URL-encoded bodies
app.use(express.json()); //parses json bodies
app.use('/api', cors()); // set Access-Control-Allow-Origin header for api route

// HTTP Routes
app.get('/', (req, res, next) => {
	Oyster.find({}).lean()
		.then((oysters) => {
			res.render('home', { oysters });
		})
		.catch((err) => next(err));
}); 

app.get('/detail', (req, res) => {
	Oyster.findOne({ name:req.query.name }).lean()
		.then((oyster) => {
			if (oyster) {
				res.render('details', {result: oyster});
			}
			else {
				res.send('OOPS! Oyster not found!');
			}
		})
		.catch((err) => next(err));
});

app.get('/delete', (req, res) => {
	Oyster.deleteOne({ name: req.query.name }).then((oyster) => {
		console.log("Oyster Deleted");
    	res.redirect('/');
	})
});

// send plain text response
app.get('/about', (req, res) => {
	res.type('text/plain');
	res.send('About page');
});

// API Routes

// get all items
app.get('/api/oysters', (req, res) => {
	Oyster.find({}).lean()
	   .then((oysters) => {
		   if (oysters) {
			   res.json({ result: 'Return oyster list, Successfull!', oysters: oysters });
		   } else {
			   res.status(500).send('Database error occurred!');
		   }
	   })
	   .catch((err) => next(err));
});

// get a single item
app.get('/api/oysters/:name', (req, res) => {
	Oyster.findOne({ name: req.params.name }).lean()
		.then((oyster) => {
			if (oyster) {
				res.json({result: 'Return requested oyster, Sucessfull', oyster: oyster});
			} else {
				res.status(500).send('Fail, oyster not found!');;
			}
		})
		.catch((err) => console.log(err));
});

// delete an item
app.get('/api/delete/:name', (req,res) => {
	let result = req.params.name;
	Oyster.deleteOne({name: result})
	.then((oyster) => {
		if (oyster) {
			res.send(`Found and Deleted: ${result}`);
		} else {
			res.status(500).send(`Failed to find and delete: ${result}`)
		}
	})
	.catch((err) => console.log(err));
});

// add an item
app.post('/api/add', (res,req) => {
	const newOyster = {'name': req.body.name, 'scientificName': req.body.scientificName, 'origin': req.body.origin, 'flavor': req.body.origin}
	Oyster.updateOne({'name': req.body.name}, newOyster, {upsert:true}, (err, result) => {
		if (err) return next(err);
		console.log(result);
		res.send(req.body.name + "oyster added");
	});
});

// default , define 404 handler, must put at end
app.use((req, res) => {
	res.type('text/plain');
	res.status(404);
	res.send('404 - Not found');
});

app.listen(port, () => {
	console.log(`Express server listening on port ${port}`);
});
