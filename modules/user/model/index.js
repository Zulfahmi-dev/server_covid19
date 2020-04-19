const db = require('../../../config/db');
const bcrypt = require('bcryptjs');

class UserModel{
    constructor(){
        this.tbl_name = 'tbl_user';
    }

    async getUser(hp){
        const result = await db.query(`select * from ${this.tbl_name} where hp=${hp}`);
        // console.log(`select * from ${this.tbl_name} where hp=${data.hp}`);
        
        return result.rows;
    }    

    async addUser({email, username, hp, password}){
        let password_hash = await bcrypt.hash(password, 10);

        let {rowCount, rows} = await db.query('select id_user from tbl_user order by id_user desc limit 1');
        let id_user = rowCount > 0 ? rows[0].id_user+1 : 1;

        const result = await db.query(`insert into tbl_user values('${username}', '${email}', '${hp}', '${password_hash}', ${id_user})`);

        return result.rowCount;
    }
}

module.exports = UserModel;