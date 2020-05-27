const express = require("express");

const db = require("../data/dbConfig.js");

const router = express.Router();

router.get("/", (req, res) => {
    db.select("*")
      .from("accounts")
      .then((accounts) => {
        res.status(200).json(accounts);
      })
      .catch((error) => {
        console.log(error);
        res.status(500).json({
          error: "failed to get list of accounts",
        });
      });
  });

router.post("/", (req, res) => {
    db("accounts").insert(req.body)
    .then(ids => {
        const id = ids[0];
        db("accounts").where({ id }).first()
        .then(account => {
            res.status(201).json({ data: account })
        })
    })
    .catch(error => {
        console.log(error);
        res.status(500).json(error)
    })
})

module.exports = router;