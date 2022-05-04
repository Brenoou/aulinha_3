const mongoose = require('mongoose')

const conexao = async() => {
    //conexao local
    //var bdlocal = await mongoose.connect('mongodb://localhost/ac1tri')
    //conexao atlas
    var atlas = await mongoose.connect('mongodb+srv://userAdm:mobile45@fiaptecnico.f3tko.mongodb.net/test')
}

module.exports = conexao
