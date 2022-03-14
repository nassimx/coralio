import mongoose from 'mongoose';

const serviceSchema = new mongoose.Schema({
  title: String,
  name: String,
  description: String,
  icon: String,
  subtitle: String,
  to: String,
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

var ServiceSection = mongoose.model('ServiceSection', serviceSchema);

export default ServiceSection;
