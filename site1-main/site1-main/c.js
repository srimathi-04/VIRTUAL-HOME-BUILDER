const User = require('./User'); // Adjust the path if needed
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// Login function
exports.login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ error: 'User not found' });

    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) return res.status(400).json({ error: 'Invalid credentials' });

    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.json({ status: 'ok', token });
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};
