import mongoose from 'mongoose';

const offreSchema = new mongoose.Schema({
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

var RecrutementSection = mongoose.model('RecrutementSection', offreSchema);

export default RecrutementSection;
