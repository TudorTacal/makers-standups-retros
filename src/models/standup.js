import mongoose from 'mongoose'

var Schema = mongoose.Schema;

var StandupSchema = new Schema({
  board: String
});

export default mongoose.model('Standup', StandupSchema);
