db.produtos.updateMany(
    { $ne: { nome: "McChicken" } },
    {
        $addToSet: {
            ingredientes: "ketchup",
        },
    },
);