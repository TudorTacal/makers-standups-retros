import mongoose from 'mongoose'

var Schema = mongoose.Schema;

var MongoItemSchema = new Schema({
  text: String,
  clicks: Number
});

export default mongoose.model('MongoItem', MongoItemSchema);
