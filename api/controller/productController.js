import util from "util";
import mysql from "mysql";
import db from "../db.js";
import {
  postUsecase,
  getAllUsecase,
  getByIdUsecase,
  updateUsecase,
  deleteUsecase,
} from "../use-case/productUsecase.js";

export async function postController(req, res) {
  const data = req.body;
  try {
    await postUsecase(data);
    res.json({ message: "insert success", data });
  } catch (e) {
    console.log("error:", e);
  }
}

export async function getAllController(req, res) {
  const page = req.query.page;
  try {
    const data = await getAllUsecase(page);
    // console.log(data);
    res.json({ message: "get all success", data });
  } catch (e) {
    console.log("error:", e);
  }
}

export async function getByIdController(req, res) {
  try {
    const id = req.params.productId;
    const data = await getByIdUsecase(id);
    // console.log(data);
    res.json({ message: "get one success", data });
  } catch (e) {
    console.log("error:", e);
  }
}

export async function updateController(req, res) {
  const data = req.body;
  const id = req.params.productId;
  try {
    await updateUsecase(data, id);
    res.json({ message: "update success", data });
  } catch (e) {
    console.log("error:", e);
  }
}

export async function deleteController(req, res) {
  try {
    const id = req.params.productId;
    await deleteUsecase(id);
    // console.log(data);
    res.json({ message: "delete success" });
  } catch (e) {
    console.log("error:", e);
  }
}
