//priority: 1500

events.listen('recipes', function (event) { 

    //-----------------------------------------------------
    //Minecraft
    //-----------------------------------------------------

    //Smithing Table
    event.remove({output: 'minecraft:smithing_table'})
    event.shaped('minecraft:smithing_table', ['LLL', 'WHS', 'TTT'], {
        T: '#forge:treated_wood',
        L: '#forge:sheetmetals/lead',
        S: 'immersiveengineering:screwdriver',
        W: 'immersiveengineering:wirecutter',
        H: 'immersiveengineering:hammer'
    }),

    //Bucket
    event.remove({output: 'minecraft:bucket'})
    event.shaped('minecraft:bucket', ['P P', ' P '], {
        C: '#forge:plates/iron',
    }),

    //Glowstone Pre-Nether
    event.recipes.create.filling('minecraft:glowstone_dust', ['minecraft:gunpowder', fluid.of('astralsorcery:liquid_starlight', 250)]),

    //Soul Lantern
    event.remove({id: 'tconstruct:smeltery/casting/soul_lantern'})
    event.recipes.create.filling('minecraft:soul_lantern', ['minecraft:soul_torch', fluid.of('tconstruct:molten_iron', 128)]),

    //Lantern
    event.remove({id: 'tconstruct:smeltery/casting/lantern'})
    event.recipes.create.filling('minecraft:lantern', ['minecraft:torch', fluid.of('tconstruct:molten_iron', 128)]),

    //Golden Apple
    event.remove({id: 'tconstruct:smeltery/casting/golden_apple'})
    event.recipes.create.filling('minecraft:golden_apple', ['minecraft:apple', fluid.of('tconstruct:molten_gold', 1152)]),

    //Golden Carrot
    event.remove({id: 'tconstruct:smeltery/casting/golden_carrot'})
    event.recipes.create.filling('minecraft:golden_carrot', ['minecraft:carrot', fluid.of('tconstruct:molten_gold', 128)]),

    //Glistering melon
    event.remove({id: 'tconstruct:smeltery/casting/glistering_melon_slice'})
    event.recipes.create.filling('minecraft:glistering_melon_slice', ['minecraft:melon_slice', fluid.of('tconstruct:molten_gold', 128)]),

    //Ender Chest
    event.remove({id: 'tconstruct:smeltery/casting/ender_chest'})
    event.recipes.create.filling('minecraft:ender_chest', ['minecraft:ender_eye', fluid.of('tconstruct:molten_obsidian', 8000)]),

    //Compass
    event.remove({id: 'tconstruct:smeltery/casting/compass'})
    event.recipes.create.filling('minecraft:compass', ['minecraft:redstone', fluid.of('tconstruct:molten_iron', 576)]),

    //Clock
    event.remove({id: 'tconstruct:smeltery/casting/clock'})
    event.recipes.create.filling('minecraft:clock', ['minecraft:redstone', fluid.of('tconstruct:molten_gold', 576)])

    //Remove Soup
    event.remove({id: 'minecraft:beetroot_soup'})

});