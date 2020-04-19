const axios = require('axios')

class WilayahController{
    constructor(){
        this.token_api;
        this.getProvinsi = this.getProvinsi.bind(this);
        this.getKabupaten = this.getKabupaten.bind(this);
        this.getKecamatan = this.getKecamatan.bind(this);
        this.getDesa = this.getDesa.bind(this);
    }

    async getProvinsi(req, res){
        const {data} = await axios.get('https://x.rajaapi.com/poe')
        this.token_api = data.token;

        const response = await axios.get(`https://x.rajaapi.com/MeP7c5ne${this.token_api}/m/wilayah/provinsi`)
        
        if (!response.data.success) {
            return res.send({
                code:404,
                status:'failed'
            })
        }

        let provinsi = response.data.data.map(item =>{
            return {
                label:item.name,
                value:item.id+'-'+item.name
            }
        })

        res.send({
            code:200,
            status:'success',
            data:provinsi
        })

    }

    async getKabupaten(req, res){
        const idProvinsi = req.params.id.split('-')[0];
        const response = await axios.get(`https://x.rajaapi.com/MeP7c5ne${this.token_api}/m/wilayah/kabupaten?idpropinsi=${idProvinsi}`)
        
        if (!response.data.success) {
            return res.status(404).send({
                code:404,
                status:'failed'
            })
        }

        let kabupaten = response.data.data.map(item =>{
            return {
                label:item.name,
                value:item.id+'-'+item.name
            }
        })

        res.status(200).send({
            code:200,
            status:'success',
            data:kabupaten
        })

    }

    async getKecamatan(req, res){
        const idKabupaten = req.params.id.split('-')[0];
        const response = await axios.get(`https://x.rajaapi.com/MeP7c5ne${this.token_api}/m/wilayah/kecamatan?idkabupaten=${idKabupaten}`)
        
        if (!response.data.success) {
            return res.status(404).send({
                code:404,
                status:'failed'
            })
        }

        let kabupaten = response.data.data.map(item =>{
            return {
                label:item.name,
                value:item.id+'-'+item.name
            }
        })

        res.status(200).send({
            code:200,
            status:'success',
            data:kabupaten
        })

    }

    async getDesa(req, res){
        const idKecamatan = req.params.id.split('-')[0];
        const response = await axios.get(`https://x.rajaapi.com/MeP7c5ne${this.token_api}/m/wilayah/kelurahan?idkecamatan=${idKecamatan}`)
        
        if (!response.data.success) {
            return res.status(404).send({
                code:404,
                status:'failed'
            })
        }

        let kabupaten = response.data.data.map(item =>{
            return {
                label:item.name,
                value:item.id+'-'+item.name
            }
        })

        res.status(200).send({
            code:200,
            status:'success',
            data:kabupaten
        })
    }
}

module.exports = WilayahController;