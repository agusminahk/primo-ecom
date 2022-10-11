import { CategoryService } from '../services/Category.service';
import { ExpressMiddleware } from '../shared/types/ExpressMiddleware';

export class CategoriesController {
  private categoryService = new CategoryService();

  getFullCategories: ExpressMiddleware = async (req, res, next) => {
    const { data, error, status } = await this.categoryService.getFullCategories(req.query);

    return error ? res.status(status).json({ data, error }) : res.json({ data });
  };

  getOneCategory: ExpressMiddleware = async (req, res, next) => {
    const { data, error, status } = await this.categoryService.getOneCategory(
      req.params.id,
      req.query,
    );

    return error ? res.status(status).json({ data, error }) : res.json({ data });
  };

  createCategory: ExpressMiddleware = async (req, res, next) => {
    const { data, error, status } = await this.categoryService.createCategory(req.body, req.query);

    return error ? res.status(status).json({ data, error }) : res.json({ data });
  };

  editCategory: ExpressMiddleware = async (req, res, next) => {
    const { data, error, status } = await this.categoryService.editCategory(
      req.params.id,
      req.body,
      req.query,
    );

    return error ? res.status(status).json({ data, error }) : res.json({ data });
  };

  removeCategory: ExpressMiddleware = async (req, res, next) => {
    const { data, error, status } = await this.categoryService.removeCategory(
      req.params.id,
      req.query,
    );

    return error ? res.status(status).json({ data, error }) : res.json({ data });
  };
}
