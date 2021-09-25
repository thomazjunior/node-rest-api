const mongoose = require("mongoose");
const User = require("../models/User");

const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      require: true,
      min: 3,
      max: 20,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      max: 50,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      min: 6,
    },
    profilePicture: {
      type: String,
      defalt: "",
    },
    coverPicture: {
      type: String,
      defalt: "",
    },
    followers: {
      type: Array,
      default: [],
    },
    followins: {
      type: Array,
      defalt: [],
    },
    isAdmin: {
      type: Boolean,
      defalt: false,
    },
  },
  { timestamps: true }
);


module.exports = mongoose.model("User", UserSchema);
