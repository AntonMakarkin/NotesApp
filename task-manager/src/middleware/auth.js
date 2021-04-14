import jwt from 'jsonwebtoken'
import User from '../models/user.js'

const auth = async (req, res, next) => {
    try {
        const token = req.header('Authorization').replace('Bearer ', '') //remove Bearer
        const decoded = jwt.verify(token, 'thisismynewcourse')
        const user = await User.findOne({ _id: decoded._id, 'tokens.token': token })

        if (!user) {
            throw new Error()
        }

        req.token = token //send token to the root handler
        req.user = user //send information to the root handler
        next()
    } catch (e) {
        res.status(401).send({ error: 'Please authenticate' })
    }
}

export default auth