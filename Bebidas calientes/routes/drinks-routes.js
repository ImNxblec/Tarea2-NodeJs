const express = require("express");
const router = express.Router();

const bebidasController = require("../controllers/hotDrinks-controllers");

router.get("/", bebidasController.getAllDrinks);

router.get("/:pid", bebidasController.getidDrinks);

router.get("/ingredientes/:uid", bebidasController.getNameDrinks);

router.post("/", bebidasController.saveDrinks);

router.patch("/:pid", bebidasController.updateDrinks);

router.delete("/:pid", bebidasController.deletedrinks);

module.exports = router;
