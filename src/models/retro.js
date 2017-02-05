import mongoose from 'mongoose'

var Schema = mongoose.Schema;

var RetroSchema = new Schema({
  board: String
});

export default mongoose.model('Retro', RetroSchema);
