const db = require('../../../config/db');

class ScreeningModel{
    constructor(){
        this.tbl_name = 'tbl_identitas';
    }

    async getIdentitas(key){
        const result = await db.query(`select * from ${this.tbl_name}`);
        
        return result.rows;
    }    

    async addIdentitas({no_identitas, jenis_identitas, nama, jenis_kelamin, negara, provinsi, kabupaten, kecamatan, desa, dusun, rt_rw, id_screening}){

        const result = await db.query(`insert into ${this.tbl_name} values(${no_identitas}, '${jenis_identitas}', '${nama}', '${jenis_kelamin}', '${negara}', '${provinsi}','${kabupaten}','${kecamatan}','${desa}','${dusun}', '${rt_rw}', '${id_screening}')`);

        return result.rowCount;
    }

    async deleteIdentitas(key){
        const result = await db.query(`delete from ${this.tbl_name} where no_identitas=${key}`);
        
        return result.rowCount;
    }
}

module.exports = ScreeningModel;