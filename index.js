import express from 'express';
import { getAll, getItem } from './data.js';

const app = express(); // create express app
const port = 3000; // create a variable for the port

app.set('view engine', 'ejs'); // set the view engine to ejs

app.get('/', (req,res) => {
  res.render('home', { oysters: getAll()});
 });

app.get('/detail', (req,res) => {
  let result = getItem(req.query.name);
  res.render('details', {oysters: req.query.name, result: result });
 });
 
 // send plain text response
 app.get('/about', (req,res) => {
  res.type('text/plain');
  res.send('About page');
 });
 
 // define 404 handler, must put at end
 app.use((req,res) => {
  res.type('text/plain');
  res.status(404);
  res.send('404 - Not found');
 });

 app.listen(port, () => {
   console.log(`Express server listening on port ${port}`);
 })
