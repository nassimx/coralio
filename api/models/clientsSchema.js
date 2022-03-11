import mongoose from 'mongoose';

const clientsSchema = new mongoose.Schema({
  title: String,
  subtitle: String,
  description: String,
  buttonLabel: String,
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

var ClientS = mongoose.model('ClientS', clientsSchema);

export default ClientS;
