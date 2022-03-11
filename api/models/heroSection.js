import mongoose from 'mongoose';

const herosectionSchema = new mongoose.Schema({
  title: String,
  subtitle: String,
  description: String,
  buttonLabel: String,
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

var HeroSection = mongoose.model('HeroSection', herosectionSchema);

export default HeroSection;
