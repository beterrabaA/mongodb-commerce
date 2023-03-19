db.produtos.deleteMany({ cutidas: { $lt: 50 } })
db.produtos.find({}, { nome: 1, _id: 0 })