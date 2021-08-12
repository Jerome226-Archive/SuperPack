//priority: 1500

events.listen('recipes', function (event) {

    //Quartz Multiplier
    event.remove({output: 'voluminousenergy:quartz_multiplier'})
    event.shaped('voluminousenergy:quartz_multiplier', ['CCC', 'I I'], {
        C: 'refinedstorage:quartz_enriched_iron',
        I: 'superpackutils:purified_certus_quartz'
    }),

    //Biofuel
    event.remove({id: 'voluminousenergy:aqueoulizing/biofuel'})
    event.custom({"type":"immersiveengineering:mixer","inputs":[{"item":"mekanism:bio_fuel"}],"result":{"fluid":"voluminousenergy:biofuel","amount":100},"fluid":{"tag":"minecraft:water","amount":100},"energy":3200}),

    //Silicon
    event.remove({id: 'voluminousenergy:vanilla_smelting/silicon'})

    //Aluminum Shell
    event.remove({output: 'voluminousenergy:aluminum_shell'})
    event.recipes.create.mechanical_crafting('voluminousenergy:aluminum_shell', ['SCS', 'ABA', 'SCS'], {
        S: 'pneumaticcraft:plastic',
        C: 'superpackutils:antimony_ingot',
        A: 'superpackutils:thermionic_valve',
        B: 'immersiveengineering:heavy_engineering'
    })
});