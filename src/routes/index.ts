import express from 'express'

import userRouter from '../components/user/routes'
const router = express.Router()

router.use('/user', userRouter)

router.get('/', function (req, res) {
  res.send('Node API is running!')
})

export { router }
