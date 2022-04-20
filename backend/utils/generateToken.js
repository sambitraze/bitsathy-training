import jwt from 'jsonwebtoken'

const generateToken = (id) => {
  return jwt.sign({ id }, "codebuggedai", {
    expiresIn: '30d',
  })
}

export default generateToken