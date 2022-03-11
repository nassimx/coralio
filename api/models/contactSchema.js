import mongoose from 'mongoose';

const contactSchema = new mongoose.Schema({
  title: String,
  subtitle: String,
  description: String,
  buttonLabel: String,
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

var ConstactSec = mongoose.model('ContactSec', contactSchema);

export default ConstactSec;
