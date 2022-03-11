import mongoose from 'mongoose';

const serviceSchema = new mongoose.Schema({
  title: String,
  subtitle: String,
  description: String,
  buttonLabel: String,
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

var ServiceSection = mongoose.model('ServiceSection', serviceSchema );

export default ServiceSection;
