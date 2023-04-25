import { use, Middleware } from 'next-api-route-middleware'
import { GetAllCategoriesService } from '../modules/categories/services/get-all-categories.service'
import { CreateCategoryService } from '../modules/categories/services/create-category.service'
import {
  AuthMiddleware,
  IAuthReq,
} from '../modules/auth/middleware/auth.middleware'
import { CreateCategoryDto } from '../modules/categories/interfaces/dtos/create-category.dto'

const getAllCategoriesService = new GetAllCategoriesService()
const createCategoryService = new CreateCategoryService()

const handler: Middleware<IAuthReq> = async (req, res) => {
  if (req.method === 'GET') {
    try {
      const user = await getAllCategoriesService.execute(req.user.id)
      res.status(200).json(user)
    } catch (error) {
      if (error instanceof Error) {
        res.status(400).json({ error: error.message })
      }
    }
  }

  if (req.method === 'POST') {
    try {
      const data = req.body as CreateCategoryDto
      const user = await createCategoryService.execute({
        ...data,
        user_id: req.user.id,
      })
      res.status(201).json(user)
    } catch (error) {
      if (error instanceof Error) {
        res.status(400).json({ error: error.message })
      }
    }
  }
}

export default use(AuthMiddleware(), handler)