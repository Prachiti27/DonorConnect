import jwt from 'jsonwebtoken'

const requireAuth = (req, res, next) => {
  const token = req.cookies.token

  if (!token) {
    return res.status(401).json({ success: false, message: 'Unauthorized: No token provided' })
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET)
    req.user = decoded
    next()
  } catch (err) {
    return res.status(401).json({ success: false, message: 'Unauthorized: Invalid token' })
  }
}

export default requireAuth
