const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  try {
    // 1. Get token from header
    const token = req.header('Authorization')?.replace('Bearer ', '');
    
    if (!token) {
      return res.status(401).json({ error: 'Authentication required' });
    }

    // 2. Verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    
    // 3. Attach user to request
    req.user = decoded;
    
    next();
  } catch (err) {
    return res.status(401).json({ error: 'Invalid token' });
  }
};