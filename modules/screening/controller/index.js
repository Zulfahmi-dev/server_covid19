const bcrypt = require('bcryptjs')
const ScreeningModel = require('../model')

class ScreeningController{
    constructor(){
        this.screeningModel = new ScreeningModel();
        this.addIdentitas = this.addIdentitas.bind(this);
        this.getIdentitas = this.getIdentitas.bind(this);
        this.deleteIdentitas = this.deleteIdentitas.bind(this);
    }
    async getIdentitas(req, res){
        try {    
            const key = req.query.id;
            const data = await this.screeningModel.getIdentitas(key);
            
            if (data.length<1) {
                return res.status(500).send({
                    code:500,
                    status:'failed'
                })
            }

            res.status(200).send({
                code:200,
                status:'success',
                data:data[0]
            })
            
        } catch (error) {
            res.status(500).send({})
        }
    }

    async addIdentitas({body}, res){

        try {
            const result = await this.screeningModel.addIdentitas(body);
        
            if (!result) {
                return res.status(500).send({
                    code:500,
                    status:'failed'
                })
            }

            res.status(200).send({
                code:200,
                status:'success'
            })
        } catch (error) {
            res.status(500).send({})
        }
    }

    async deleteIdentitas(req, res){

        try {
            const id = req.query.id
            const result = await this.screeningModel.deleteIdentitas(id);
            
            if (!result) {
                return res.status(500).send({
                    code:500,
                    status:'failed'
                })
            }

            res.status(200).send({
                code:200,
                status:'success'
            })
        } catch (error) {
            res.status(500).send({})
        }
    }


}

module.exports = ScreeningController;