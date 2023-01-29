const express = require("express");
const Breed = require("../models/breed.models");
const { Router } = require("express");
const fsPromises = require("fs/promises");
const validator = require("../middlewares/validator");
const records = require("../middlewares/records");

const router = Router();

router.get("/", async (req, res) => {
  try {
    const data = await Breed.find();
    return res.status(200).send(data);
  } catch (err) {
    return res.status(500).send(err.message);
  }
});

router.post("/", validator, async (req, res) => {
  try {
    const data = await Breed.create(req.body);
    return res.status(200).send(data);
  } catch (err) {
    return res.status(500).send(err.message);
  }
});

router.patch("/:id",records , async (req, res) => {
  try {
    const data = await Breed.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    return res.status(200).send(data);
  } catch (err) {
    return res.status(500).send(err.message);
  }
});

router.delete("/:id", records, async (req, res) => {
  try {
    const data = await Breed.findByIdAndDelete(req.params.id);
    return res.status(200).send(data);
  } catch (err) {
    return res.status(500).send(err.message);
  }
});

module.exports = router;
