import createProductEntity from "../entity/productCreate.js";
import {
  create,
  deleteProduct,
  getAll,
  getById,
  update,
} from "../data-access/query.js";

export async function postUsecase(data) {
  //   let validatedData = await createProductEntity(data);
  //   console.log(validatedData);
  //   info = {
  //     name: info.getName(),
  //     color: info.getColor(),
  //     price: info.getPrice(),
  //   };
  // const res = await sqlCreate()

  // sqlCreate = () => {
  const res = await create(data);
  return res;
}

export async function getAllUsecase(page) {
  const res = await getAll(page);
  //   console.log(res);
  return res;
}

export async function getByIdUsecase(id) {
  const res = await getById(id);
  //   console.log(res);
  return res;
}

export async function updateUsecase(data, id) {
  const res = await update(data, id);
  return res;
}

export async function deleteUsecase(id) {
  const res = await deleteProduct(id);
  //   console.log(res);
  return res;
}
