const { default:mongoose } = require("mongoose");

const userSchema  = mongoose.Schema({
  film:{
    type: String,
    require: true
  },
  replik:{
    type: String,
    require: true
  },
  ekleyen:{
    type: String,
    require: true
  },
  kalp:{
    type: String,
    require: true
  }
});

const veri = mongoose.model("User ",userSchema);

module.exports = veri ;
