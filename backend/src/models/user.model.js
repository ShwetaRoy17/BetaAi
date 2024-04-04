import mongoose from 'mongoose'

const UserSchema = new mongoose.Schema({
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    points: {
      type: Number,
      default: 0,
    },
    prediction: {
      type: Object,
      default: {},
    },
    premiumUser: {
      type: Boolean,
      default: false,
    },
    password: { // Optional field if you want password-based login
      type: String,
    },
  });

  const User = mongoose.model('User',UserSchema);
  export  {User};

