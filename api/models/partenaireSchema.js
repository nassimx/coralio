import mongoose from 'mongoose';

const partenaireSchema = new mongoose.Schema({
  title: String,
  subtitle: String,
  description: String,
  buttonLabel: String,
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

var PartenaireSec = mongoose.model('PartenaireSec', partenaireSchema);

export default PartenaireSec;
