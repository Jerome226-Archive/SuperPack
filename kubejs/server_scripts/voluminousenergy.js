//priority: 1500

events.listen('recipes', function (event) {

    //Aluminum Shell
    event.remove({output: 'voluminousenergy:aluminum_shell'})
    event.recipes.create.mechanical_crafting('voluminousenergy:aluminum_shell', ['SCS', 'ABA', 'SCS'], {
        S: '#immersiveengineering:scaffoldings/aluminum',
        C: 'advgenerators:controller',
        A: 'immersiveengineering:plate_aluminum',
        B: 'immersiveengineering:heavy_engineering'
    })
});