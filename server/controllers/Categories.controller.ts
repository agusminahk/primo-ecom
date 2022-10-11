import { CategoriesService } from '../services/Categories.service';
import { ExpressMiddleware } from '../shared/types/ExpressMiddleware';

export class CategoriesController {
  private categoriesService = new CategoriesService();

  getFullCategories: ExpressMiddleware = async (req, res, next) => {
    const { data, error, status } = await this.categoriesService.getFullCategories(req.query);

    return error ? res.status(status).json({ data, error }) : res.json({ data });
  };

  getOneCategory: ExpressMiddleware = async (req, res, next) => {
    const { data, error, status } = await this.categoriesService.getOneCategory(
      req.params.id,
      req.query,
    );

    return error ? res.status(status).json({ data, error }) : res.json({ data });
  };

  createCategory: ExpressMiddleware = async (req, res, next) => {
    const { data, error, status } = await this.categoriesService.createCategory(
      req.body,
      req.query,
    );

    return error ? res.status(status).json({ data, error }) : res.json({ data });
  };

  editCategory: ExpressMiddleware = async (req, res, next) => {
    const { data, error, status } = await this.categoriesService.editCategory(
      req.params.id,
      req.body,
      req.query,
    );

    return error ? res.status(status).json({ data, error }) : res.json({ data });
  };

  removeCategory: ExpressMiddleware = async (req, res, next) => {
    const { data, error, status } = await this.categoriesService.removeCategory(
      req.params.id,
      req.query,
    );

    return error ? res.status(status).json({ data, error }) : res.json({ data });
  };
}
