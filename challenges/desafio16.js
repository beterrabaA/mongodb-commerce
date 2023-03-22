db.produtos.updateOne(
    { nome: 'Big Mac' },
    {
        $currentDate: { ultimaModificacao: true }
    }
)

db.produtos.find({},
    {
        nome: 1,
        ultimaModificacao: { $exists: true },
        _id: 0
    })