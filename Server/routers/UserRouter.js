import { Router } from "express";
import db from "../database/Connection.js";
import bcrypt from "bcrypt";
import { encryptPassword } from "../util/encryption.js";
const router = Router();

router.post("/signin", async (req, res) => {
  const { mail, password } = req.body;
  const [rows, fields] = await db.execute(
    `SELECT * FROM users WHERE mail = ?`,
    [mail]
  );
  const encryptedPassword = rows[0].password;
  const compare = await bcrypt.compare(password, encryptedPassword);
  if (compare) {
    const user = rows[0];
    req.session.admin = !!user.admin;
    req.session.userid = user.id;
    req.session.isLoggedin = true;
    res.send({
      data: {
        id: user.id,
        mail: user.mail,
        username: user.user_name,
        admin: user.admin,
      },
    });
  } else {
    res.status(500).send({ message: "Failed login" });
  }
});

router.post("/hjort", (req, res) => {
  req.body;
  console.log(req.body);
  if (req.body && req.body.admin === 1){
    res.send("hej");
  }
  res.send("Nope");
});

router.post("/signout", (req, res) => {
  try {
    req.session.destroy();
    res.status(200).send("You have successfully signed up");
  } catch {
    res.status(500).send("There is a server issue");
  }
});

router.post("/signup", async (req, res) => {
  const { mail, username, password } = req.body;
  try {
    const [response, _] = await db.execute(
      `INSERT INTO users(mail,user_name,password,admin) VALUES(?, ?, ?, ?);`,
      [mail, username, await encryptPassword(password), false]
    );

    // Socket
    const [users] = await db.execute(`SELECT * FROM users WHERE users.id=?;`, [
      response.insertId,
    ]);

    const io = req.app.get("io");
    users.forEach((user) => {
      list.push({
        id: user.id,
        username: user.user_name,
        mail: user.mail,
        admin: user.admin,
      });
    });
    io.emit(`users`, users);

    // Socket slut
    
    res.status(200).send({ message: "OK" });
  } catch (err) {
    return res
      .status(500)
      .send({ message: "Internal Server Error" + err.message });
  }
});

//Middleware
function adminCheck(req, res, next) {
  if (req.session.admin !== true) {
    res.status(401).send("Authorization");
  }
  next();
}

function loggedinCheck(req, res, next) {
  if (req.session.isLoggedin !== true) {
    res.status(401).send("Login error");
  }
  next();
}

export default router;
