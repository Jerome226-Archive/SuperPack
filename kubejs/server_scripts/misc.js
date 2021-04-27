//priority: 1500

events.listen('recipes', function (event) { 

    //-----------------------------------------------------
    //Misc
    //-----------------------------------------------------

    //Natures Compass
    event.remove({output: 'naturescompass:naturescompass'})
    event.shaped('naturescompass:naturescompass', ['TWT', 'WAW', 'TWT'], {
        A: 'minecraft:compass',
        W: '#minecraft:logs',
        T: '#botania:runes/earth'
    }),

    //Raw Transistor
    event.remove({output: 'youmatter:transistor_raw'})
    event.shaped('youmatter:transistor_raw', ['CCC', 'SPS', 'CCC'], {
        S: '#forge:ingots/steel',
        P: 'createaddition:gold_wire',
        C: '#forge:nuggets/gold'
    })

    //Drawer Controller
    event.remove({output: 'storagedrawers:controller'})
    event.shaped('storagedrawers:controller', ['SPS', 'ICI', 'SPS'], {
        S: 'minecraft:smooth_stone',
        I: '#forge:plates/invar',
        P: 'create:mechanical_press',
        C: 'create:integrated_circuit'
    })
    
    //Drawer Controller Slave
    event.remove({output: 'storagedrawers:controller_slave'})
    event.shaped('storagedrawers:controller_slave', ['SMS', 'I I', 'SPS'], {
        S: 'minecraft:smooth_stone',
        I: 'minecraft:comparator',
        P: 'create:piston_extension_pole',
        M: 'create:mechanical_press'
    })

    //Transistor
    event.remove({id: 'youmatter:transistor'})
    event.recipes.create.splashing(['youmatter:transistor'], 'youmatter:transistor_raw')

    //Compute Module
    event.remove({output: 'youmatter:compute_module'})
    event.recipes.create.mechanical_crafting(Item.of('youmatter:compute_module', 2), [' LE', 'RTR', 'PGP'], {
        T: 'youmatter:transistor',
        G: '#forge:rods/gold',
        E: 'immersiveengineering:electron_tube',
        L: '#forge:plates/electrum',
        R: 'immersiveengineering:insulating_glass',
        P: '#forge:plates/brass'
    })

    //Field Projector
    event.remove({output: 'compactcrafting:field_projector'})
    event.shaped(Item.of('compactcrafting:field_projector', 4), ['DMD', 'PSA', 'DMD'], {
        S: 'mekanism:steel_casing',
        P: 'immersivepetroleum:projector',
        A: 'mekanism:basic_control_circuit',
        M: 'botania:mana_glass',
        D: 'mekanism:pressure_disperser'
    })

    //Machine Casing
    event.remove({output: 'youmatter:machine_casing'})
    event.recipes.immersiveengineering.metal_press('youmatter:machine_casing', 'immersiveengineering:component_iron', 'immersiveengineering:mold_plate')

    //Portable Black Hole
    event.remove({output: 'youmatter:black_hole'})
    event.recipes.mekanism.combining('youmatter:black_hole', 'botania:ender_air_bottle', Item.of('mythicbotany:alfsteel_ingot', 1))

    //Golden Frog Leg
    event.recipes.create.filling('quark:golden_frog_leg', ['quark:frog_leg', fluid.of('tconstruct:molten_gold', 128)]),

    //Golden Habanera
    event.recipes.create.filling('simplefarming:golden_habanero', ['simplefarming:habanero', fluid.of('tconstruct:molten_gold', 128)]),

    //Honey Bread
    event.remove({output: 'buzzier_bees:honey_bread'})
    event.recipes.create.filling('buzzier_bees:honey_bread', ['minecraft:bread', fluid.of('create:honey', 250)]),

    //Glazed Porkchop
    event.remove({output: 'buzzier_bees:glazed_porkchop'})
    event.recipes.create.filling('buzzier_bees:glazed_porkchop', ['minecraft:cooked_porkchop', fluid.of('create:honey', 250)])

});