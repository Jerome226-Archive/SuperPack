//priority: 1500

events.listen('recipes', function (event) { 

    //-----------------------------------------------------
    //Misc
    //-----------------------------------------------------

    //Invalid Tags
    event.remove({id: 'byg:gray_dye'})
    event.remove({id: 'platforms:wrench_alt'})

    //Raw Transistor
    event.remove({output: 'youmatter:transistor_raw'})
    event.custom({"type":"immersiveengineering:blueprint","inputs":[{"count":1,"base_ingredient":{"item":"immersiveengineering:hemp_fiber"}},{"count":1,"base_ingredient":{"item":"immersiveengineering:ingot_aluminum"}},{"count":1,"base_ingredient":{"item":"create:brass_sheet"}}],"category":"components","result":{"item":"youmatter:transistor_raw","count":1}})

    //Metal Crafting Table
    event.remove({output: 'engineersdecor:metal_crafting_table'})
    event.shaped('engineersdecor:metal_crafting_table', ['PCP'], {
        P: 'superpackutils:compressed_steel_ingot',
        C: 'immersiveengineering:craftingtable'
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

    //Stabilizer Condensatrator
    event.custom({"type":"mekanism:rotary","fluidInput":{"amount":1,"tag":"forge:stabilizer"},"gasOutput":{"gas":"superpackutils:stabilizer","amount":1},"gasInput":{"amount":1,"gas":"superpackutils:stabilizer"},"fluidOutput":{"fluid":"youmatter:stabilizer","amount":1}})

    //Stabilizer Bucket
    event.remove({id: 'youmatter:stabilizer_bucket'})

    //Transistor
    event.remove({id: 'youmatter:transistor'})
    event.recipes.create.splashing(['youmatter:transistor'], 'youmatter:transistor_raw')

    //Compute Module
    event.remove({output: 'youmatter:compute_module'})
    event.recipes.create.mechanical_crafting(Item.of('youmatter:compute_module', 1), [' LE', 'RTR', 'PGP'], {
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

    //Golden Frog
    event.recipes.create.filling('quark:golden_frog_leg', ['quark:frog_leg', fluid.of('tconstruct:molten_gold', 128)]),

    //Honey Bread
    event.remove({output: 'buzzier_bees:honey_bread'})
    event.recipes.create.filling('buzzier_bees:honey_bread', ['minecraft:bread', fluid.of('create:honey', 250)]),

    //Glazed Porkchop
    event.remove({output: 'buzzier_bees:glazed_porkchop'})
    event.recipes.create.filling('buzzier_bees:glazed_porkchop', ['minecraft:cooked_porkchop', fluid.of('create:honey', 250)])

    //Sap Bottle
    event.remove({output: 'autumnity:sap_bottle'})
    event.recipes.create.filling('autumnity:sap_bottle', ['minecraft:glass_bottle', fluid.of('thermal:sap', 250)])

    //Syrup Bottle
    event.remove({output: 'autumnity:syrup_bottle'})
    event.recipes.create.filling('autumnity:syrup_bottle', ['minecraft:glass_bottle', fluid.of('thermal:syrup', 250)])

});