
const express = require('express');
const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const userSchema = new Schema({
  username:String,
  email:String,
  password:String,
  consent:Boolean
});

const User = mongoose.model('User', userSchema);

const app = express();

mongoose.connect('mongodb://localhost/registration.aatrzhn.mongodb.net', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

app.post('register', async ()=>{
  const{username, email, password, consent} = req.body;

  const user = new User({
    username,
    email,
    password,
    consent
  });
  try {
    await user.save();
    res.send('User registered successfully!')
  } catch(error){
    console.error(error);
    res.send('Error: User registration failed.')
  }
});

app.listen(3000, () => {
  console.log('Server listening on port 3000')
})