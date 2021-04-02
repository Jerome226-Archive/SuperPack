//priority: 1500

events.listen('recipes', function (event) {

    //-----------------------------------------------------
    //Create
    //-----------------------------------------------------

    //Create Andesite Casing
    event.remove({output: 'create:andesite_casing'})
    event.shaped(Item.of('create:andesite_casing', 2), ['ATA', 'TWT', 'ATA'], {
        A: 'create:andesite_alloy',
        W: '#minecraft:logs',
        T: '#forge:treated_wood'
    }),

    //Create Andesite Alloy
    event.remove({output: 'create:andesite_alloy'})
    event.shaped('create:andesite_alloy', ['NA', 'AN'], {
        N: '#forge:nuggets/zinc',
        A: 'minecraft:andesite'
    }),

    event.recipes.create.mixing('create:andesite_alloy', [
        '#forge:nuggets/zinc',
        'minecraft:andesite'
    ])
    
    //Create Copper Casing
    event.remove({output: 'create:copper_casing'})
    event.shaped(Item.of('create:copper_casing', 2), ['CTC', 'TWT', 'CTC'], {
        C: '#forge:plates/copper',
        W: '#minecraft:logs',
        T: '#forge:treated_wood'
    }),

    //Create Brass Casing
    event.remove({output: 'create:brass_casing'})
    event.shaped(Item.of('create:brass_casing', 2), ['BTB', 'TWT', 'BTB'], {
        B: '#forge:plates/brass',
        W: '#minecraft:logs',
        T: '#forge:treated_wood'
    }),

    //Create Cogwheel
    event.remove({output: 'create:cogwheel'})
    event.shaped(Item.of('create:cogwheel', 6), ['STS', 'TAT', 'STS'], {
        A: 'create:andesite_alloy',
        T: '#forge:treated_wood',
        S: 'immersiveengineering:stick_treated'
    }),

    //Create Large Cogwheel
    event.remove({output: 'create:large_cogwheel'})
    event.shaped(Item.of('create:large_cogwheel', 3), ['WTW', 'TCT', 'WTW'], {
        C: 'create:andesite_alloy',
        T: '#forge:treated_wood',
        W: '#minecraft:logs'
    }),

    //Create Mechanical Drill
    event.remove({output: 'create:mechanical_drill'})
    event.shaped('create:mechanical_drill', [' A ', 'WCW', ' E '], {
        C: 'create:andesite_casing',
        W: 'create:cogwheel',
        A: 'create:andesite_alloy',
        E: 'thermal:drill_head'
    }),

    //Thermal Drill Head
    event.remove({output: 'thermal:drill_head'})
    event.shaped('thermal:drill_head', [' P ', 'PIP', 'PAP'], {
        P: '#forge:plates/iron',
        I: '#forge:ingots/iron',
        A: 'create:andesite_alloy'
    }),

    //Create Mechanical Saw
    event.remove({output: 'create:mechanical_saw'})
    event.shaped('create:mechanical_saw', [' A ', 'WCW', ' E '], {
        C: 'create:andesite_casing',
        W: 'create:cogwheel',
        A: 'create:andesite_alloy',
        E: 'thermal:saw_blade'
    }),

    //Thermal Saw Blade
    event.remove({output: 'thermal:saw_blade'})
    event.shaped('thermal:saw_blade', ['PIP', 'IAI', 'PIP'], {
        P: '#forge:plates/iron',
        I: '#forge:ingots/iron',
        A: 'create:andesite_alloy'
    }),
    
    //Create Depot
    event.remove({output: 'create:depot'})
    event.shaped('create:depot', ['AWA'], {
        A: 'create:andesite_alloy',
        W: 'create:andesite_casing'
    }),

    //Create Basin
    event.remove({output: 'create:basin'})
    event.shaped('create:basin', ['A A', 'AAA', ' C '], {
        A: 'create:andesite_alloy',
        C: 'create:andesite_casing'
    }),

    //Create Integrated Circuit
    event.remove({output: 'create:integrated_circuit'})
    event.recipes.create.mechanical_crafting('create:integrated_circuit', [
        '  L  ',
        'ZCECZ',
        ' BBB '
    ], {
        L: '#forge:plates/lapis_lazuli',
        B: '#forge:plates/brass',
        C: 'immersiveengineering:circuit_board',
        Z: 'minecraft:barrier', //Need to replace with custom Bio Plastic
        E: 'create:electron_tube'
    }),

    //-----------------------------------------------------
    //Immersive Engineering
    //-----------------------------------------------------

    //IE Coke Brick
    event.remove({output: 'immersiveengineering:cokebrick'})
    event.shaped(Item.of('immersiveengineering:cokebrick', 3), ['ATA', 'TWT', 'ATA'], {
        A: 'tconstruct:seared_brick',
        W: '#forge:storage_blocks/clay',
        T: '#forge:ingots/brick'
    }),

    //IE Blast Brick
    event.remove({output: 'immersiveengineering:blastbrick'})
    event.shaped(Item.of('immersiveengineering:blastbrick', 3), ['ATA', 'TWT', 'ATA'], {
        A: '#forge:ingots/nether_brick',
        W: 'minecraft:blaze_powder',
        T: '#forge:ingots/brick'
    }),

    //IE Cloche
    event.remove({output: 'immersiveengineering:cloche'})
    event.recipes.create.mechanical_crafting('immersiveengineering:cloche', [
        ' C ',
        'CSC',
        'C C',
        'ZMZ',
        'ZYZ'
    ], {
        S: 'immersiveengineering:electron_tube',
        C: '#forge:glass/colorless',
        Y: 'immersiveengineering:component_steel',
        Z: '#forge:treated_wood',
        M: 'create:integrated_circuit'
    }),

    //-----------------------------------------------------
    //Early Thermal
    //-----------------------------------------------------
    
    //Thermal Arboreal Extractor
    event.remove({output: 'thermal:device_tree_extractor'})
    event.shaped('thermal:device_tree_extractor', ['TDT', 'BCB', 'TST'], {
        T: '#forge:treated_wood',
        C: 'create:andesite_casing',
        B: 'minecraft:bucket',
        D: 'minecraft:dispenser', //Will probably be replaced with custom treetap later
        S: 'thermal:redstone_servo'
    }),

    //Thermal Aqueous Accumulator
    event.remove({output: 'thermal:device_water_gen'})
    event.shaped('thermal:device_water_gen', ['TDT', 'BCB', 'TST'], {
        T: '#forge:sheetmetals/lead',
        C: 'create:copper_casing',
        B: '#forge:ingots/copper',
        D: '#create:valve_handles', 
        S: 'create:hose_pulley'
    }),

    //Thermal Hive Hopper
    event.remove({output: 'thermal:device_hive_extractor'})
    event.shaped('thermal:device_hive_extractor', ['TNT', 'RCD', 'TST'], {
        T: '#forge:treated_wood',
        C: 'create:andesite_casing',
        R: '#forge:shears',
        N: '#forge:plates/nickel',
        D: 'minecraft:dispenser',
        S: 'thermal:redstone_servo'
    }),

    //Thermal Nullifier
    event.remove({output: 'thermal:device_nullifier'})
    event.shaped('thermal:device_nullifier', ['LBL', 'PCP', 'AOA'], {
        C: 'create:andesite_casing',
        A: '#forge:sheetmetals/aluminum',
        L: '#forge:sheetmetals/lead',
        P: '#forge:plates/aluminum',
        B: 'minecraft:lava_bucket',
        O: '#forge:obsidian'
    }),

    //Thermal Igneous Extruder
    event.remove({output: 'thermal:device_rock_gen'})
    event.shaped('thermal:device_rock_gen', ['LBL', 'PCP', 'AOA'], {
        C: 'create:andesite_casing',
        A: '#forge:sheetmetals/aluminum',
        L: '#forge:sheetmetals/lead',
        P: '#forge:plates/invar',
        B: '#forge:tools/pickaxes',
        O: 'thermal:redstone_servo'
    }),

    //Thermal Vacuumulator
    event.remove({output: 'thermal:device_collector'})
    event.shaped('thermal:device_collector', ['LBL', 'PCP', 'AOA'], {
        C: 'create:andesite_casing',
        A: '#forge:sheetmetals/aluminum',
        L: '#forge:sheetmetals/lead',
        P: '#forge:plates/lead',
        B: 'minecraft:hopper',
        O: 'botania:mana_pearl'
    })

});