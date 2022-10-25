import { ProductService } from '../services/Product.service';
import { ExpressMiddleware } from '../shared/types/ExpressMiddleware';

export class ProductController {
  private productService = new ProductService();

  getAll: ExpressMiddleware = async (req, res) => {
    const { data, error, status } = await this.productService.getAll(req.query);
    return error ? res.status(status).json({ data, error }) : res.status(status).json({ data });
  };

  getOne: ExpressMiddleware = async (req, res) => {
    const { data, error, status } = await this.productService.getOne(req.params.id);
    return error ? res.status(status).json({ data, error }) : res.status(status).json({ data });
  };

  createOne: ExpressMiddleware = async (req, res) => {
    const { data, error, status } = await this.productService.createOne(req.body);
    return error ? res.status(status).json({ data, error }) : res.status(status).json({ data });
  };

  updateOne: ExpressMiddleware = async (req, res) => {
    const { data, error, status } = await this.productService.updateOne(req.params.id, req.body);
    return error ? res.status(status).json({ data, error }) : res.status(status).json({ data });
  };

  removeOne: ExpressMiddleware = async (req, res) => {
    const { data, error, status } = await this.productService.removeOne(req.params.id);
    return error ? res.status(status).json({ data, error }) : res.status(status).json({ data });
  };
}
