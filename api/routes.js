import {
  deleteController,
  getAllController,
  getByIdController,
  postController,
  updateController,
} from "./controller/productController.js";

export default function (app) {
  app.post("/products", postController);
  app.get("/products", getAllController);
  app.get("/products/:productId", getByIdController);
  app.put("/products/:productId", updateController);
  app.delete("/products/:productId", deleteController);
}
