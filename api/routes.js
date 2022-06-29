import { postController} from './controller/productController.js'

export default function(app) {
    app.post('/products', postController)
}