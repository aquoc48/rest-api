import db from "../db.js";

export function create(data) {
  const sql = `INSERT INTO products SET ?`;
  db.query(sql, [data], (err, response) => {
    if (err) throw err;
  });
}
