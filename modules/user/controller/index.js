const bcrypt = require('bcryptjs')
const UserModel = require('../model')

class UserController{
    constructor(){
        this.userModel = new UserModel();
        this.login = this.login.bind(this);
        this.register = this.register.bind(this);
    }

    async register({body}, res){
        try {
            const result = await this.userModel.addUser(body);
            
            if (!result) {
                return res.status(404).send({
                    code:505,
                    status:'failed'
                })
            }
            res.status(200).send({
                code:200,
                status:'success'
            })

        } catch (error) {
            console.log(error)
        }
    }

    async login({ body }, res){

        try {
            const {password, hp} = body;
            const data = await this.userModel.getUser(hp);
    
            if (data.length<1) {
                return res.status(404).send({
                    code:404,
                    status:'failed'
                })
            }
            
            const isMatch = await bcrypt.compare(password, data[0].password);
            if (!isMatch) {
                return res.status(403).send({
                    code:403,
                    status:'failed'
                })
            }
    
            res.status(200).send({
                code:200,
                status:'success',
                data:data
            })

        } catch (error) {
            console.log(error)            
        }
    }    
}

module.exports = UserController;