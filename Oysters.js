import mongoose from 'mongoose';
const { Schema } = mongoose;
import {connectionString} from './credentials.js'

mongoose.connect(connectionString, {
    dbName: 'it122database',
    useNewUrlParser: true,
    useUnifiedTopology: true
});

mongoose.connection.on('open', () => {
  console.log('Mongoose connected.');
});

// define data model as JSON key/value pairs
// values indicate the data type of each key
const oysterSchema = new Schema({
 name: { type: String, required: true },
 scientificName: String,
 origin: String,
 flavor: String
});

export const Oyster = mongoose.model('Oyster', oysterSchema);
