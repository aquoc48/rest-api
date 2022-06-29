// import createProductEntity from '../entity/productCreate.js'
import { create } from "../data-access/query.js";

export async function postUsecase(data) {
  // let info = await createProductEntity(data)

  // info = {
  //     name: data.getName(),
  //     color: data.getColor(),
  //     price: data.getPrice()
  // };
  // const res = await sqlCreate()

  // sqlCreate = () => {
  const res = await create(data);
  return res;
}
