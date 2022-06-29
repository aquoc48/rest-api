import util from "util";
import mysql from "mysql";
import db from "../db.js";
import { postUsecase } from "../use-case/productUsecase.js";

export async function postController(req, res) {
  const data = req.body;
  try {
    await postUsecase(data);
    res.json({ message: "insert success", data });
  } catch (e) {
    console.log("error:", e);
  }
}
