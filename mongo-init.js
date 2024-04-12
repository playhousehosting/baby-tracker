import mongoose from 'mongoose';

const uri = 'mongodb://localhost:27017/baby-tracker';
mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
});

const User = mongoose.model('User', new mongoose.Schema({ username: String, password: String }));

const createUser = async () => {
  try {
    const user = new User({ username: 'server', password: 'secure-password' });
    await user.save();
    console.log('User created:', user);
  } catch (error) {
    console.error('Error creating user:', error);
  }
};

createUser();
