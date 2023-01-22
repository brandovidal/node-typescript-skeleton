import { Router } from 'express'

import { create, find, remove, update } from './controller'

const router = Router()

router.get('/', find)
router.post('/', create)
router.put('/:id', update)
router.delete('/:id', remove)

// module.exports = router
export default router
