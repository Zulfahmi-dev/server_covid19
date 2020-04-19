const pool = require('../config/db');
const {UserRouter} =  require("../modules/user");
const {WilayahRouter} =  require("../modules/wilayah");
const {ScreeningRouter} =  require("../modules/screening");

module.exports = (app) => {
    app.use('/user', UserRouter)
    app.use('/wilayah', WilayahRouter)
    app.use('/screening', ScreeningRouter)
}