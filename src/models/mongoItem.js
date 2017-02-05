import mongoose from 'mongoose'

var Schema = mongoose.Schema;

var ItemSchema = new Schema({
  text: String,
  listId: String,
  itemId: String,
  clicks: Number,
})

export default mongoose.model('MongoItem', ItemSchema);
