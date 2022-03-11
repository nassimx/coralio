import mongoose from 'mongoose';

const clientsecSchema = new mongoose.Schema({
  title: String,
  subtitle: String,
  description: String,
  buttonLabel: String,
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

var ClientSec = mongoose.model('ClientSec', clientsecSchema);

export default ClientSec;
