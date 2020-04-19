const ScreeningController = require("../controller");
const express = require("express");

const router = new express.Router();
const screeningController = new ScreeningController();

router.get('/', screeningController.getIdentitas)
      .post('/', screeningController.addIdentitas)
      .delete('/', screeningController.deleteIdentitas)


module.exports = router;