import { response } from "express";
import db from "../db.js";

export async function create(data) {
  const sql = `INSERT INTO products SET ?`;
  db.query(sql, [data], (err, response) => {
    if (err) throw err;
  });
}

export async function getAll(page) {
  const limit = 3;
  const offset = (page - 1) * limit;
  const res = await new Promise((resolve) => {
    const sql = `SELECT * FROM products LIMIT ${limit} OFFSET ${offset}`;
    db.query(sql, (err, response) => {
      if (err) resolve(err);
      resolve(response);
      // console.log(response);
    });
  });
  //   console.log(res);
  return res;
}

export async function getById(id) {
  const res = await new Promise((resolve) => {
    const params = [id];
    const sql = "SELECT * FROM products WHERE id = ?";
    db.query(sql, params, (err, response) => {
      if (err) resolve(err);
      resolve(response);
      // console.log(response);
    });
  });
  //   console.log(res);
  return res;
}

export async function update(data, id) {
  const res = await new Promise((resolve) => {
    const body = [data, id];
    const sql = `UPDATE products SET ? WHERE id = ?`;
    db.query(sql, body, (err, response) => {
      if (err) resolve(err);
      resolve(response);
    });
  });
  //   console.log(res);
  return res;
}

export async function deleteProduct(id) {
  let sql = "DELETE FROM products WHERE id = ?";
  db.query(sql, [id], (err) => {
    if (err) throw err;
  });
}
