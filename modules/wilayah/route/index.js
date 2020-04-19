const WilayahController = require("../controller");
const express = require("express");

const router = new express.Router();
const wilayahController = new WilayahController();

router.get('/provinsi/:id', wilayahController.getProvinsi);
router.get('/kabupaten/:id', wilayahController.getKabupaten);
router.get('/kecamatan/:id', wilayahController.getKecamatan);
router.get('/desa/:id', wilayahController.getDesa);


module.exports = router;