//priority: 1500

events.listen('recipes', function (event) {    
    
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

    //IE Light Engineering Block
    event.remove({output: 'immersiveengineering:light_engineering'})
    event.shaped(Item.of('immersiveengineering:light_engineering', 4), ['SCS', 'IBI', 'SCS'], {
        S: '#forge:sheetmetals/aluminum',
        C: 'immersiveengineering:component_iron',
        B: 'create:andesite_casing',
        I: '#forge:ingots/electrum'
    }),

    //IE Heavy Engineering Block
    event.remove({output: 'immersiveengineering:heavy_engineering'})
    event.recipes.create.mechanical_crafting(Item.of('immersiveengineering:heavy_engineering', 2), ['SCS', 'IBI', 'SCS'], {
        S: 'superpackutils:compressed_steel_ingot',
        C: 'immersiveengineering:component_steel',
        B: 'create:brass_casing',
        I: 'immersiveengineering:slag'
    }),

    //IE Redstone Engineering Block
    event.remove({output: 'immersiveengineering:rs_engineering'})
    event.shaped(Item.of('immersiveengineering:rs_engineering', 2), ['SCS', 'IBI', 'SCS'], {
        S: '#forge:sheetmetals/constantan',
        C: 'immersiveengineering:circuit_board',
        B: 'create:copper_casing',
        I: '#forge:ingots/constantan'
    }),

    //Thermoelectric Generator
    event.remove({output: 'immersiveengineering:thermoelectric_generator'})
    event.shaped('immersiveengineering:thermoelectric_generator', ['CCC', 'PLP', 'PPP'], {
        C: 'superpackutils:compressed_steel_ingot',
        L: 'immersiveengineering:coil_lv',
        P: '#forge:plates/constantan'
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

    //Treated Wood
    event.recipes.create.filling('immersiveengineering:treated_wood_horizontal', ['#minecraft:planks', fluid.of('immersiveengineering:creosote', 100)]),

    //Bio Slag
    event.custom({"type":"immersiveengineering:bottling_machine","result":{"item":"immersiveengineering:slag"},"input":{"item":"thermal:slag"},"fluid":{"tag":"pneumaticcraft:yeast_culture","amount":150}})

    //Waterwheel Segment
    event.remove({output: 'immersiveengineering:waterwheel_segment'})
    event.shaped(Item.of('immersiveengineering:waterwheel_segment', 2), ['TAT', 'ATA', ' A '], {
        A: '#forge:rods/treated_wood',
        T: '#forge:treated_wood'
    }),

    //LV Wire
    event.remove({output: 'immersiveengineering:wirecoil_copper'})
    event.shaped(Item.of('immersiveengineering:wirecoil_copper', 4), [' I ', 'ICI', ' I '], {
        C: 'createaddition:spool',
        I: '#forge:wires/copper'
    }),
    
    //MV Wire
    event.remove({output: 'immersiveengineering:wirecoil_electrum'})
    event.shaped(Item.of('immersiveengineering:wirecoil_electrum', 4), [' I ', 'ICI', ' I '], {
        C: 'createaddition:spool',
        I: '#forge:wires/electrum'
    }),

    //HV Wire
    event.remove({output: 'immersiveengineering:wirecoil_steel'})
    event.shaped(Item.of('immersiveengineering:wirecoil_steel', 4), [' I ', 'JCJ', ' I '], {
        C: 'createaddition:spool',
        J: '#forge:wires/aluminum',
        I: '#forge:wires/steel'
    }),

    //Redstone Wire
    event.remove({output: 'immersiveengineering:wirecoil_redstone'})
    event.shaped(Item.of('immersiveengineering:wirecoil_redstone', 4), [' I ', 'JCJ', ' I '], {
        C: 'createaddition:spool',
        J: '#forge:wires/aluminum',
        I: 'minecraft:redstone'
    }),

    //Fluid Pipe
    event.remove({output: 'immersiveengineering:fluid_pipe'})
    event.shaped(Item.of('immersiveengineering:fluid_pipe', 8), ['CPC'], {
        P: '#forge:ingots/iron',
        C: '#forge:plates/iron'
    }),

    //IE Steel Block
    event.remove({output: 'immersiveengineering:storage_steel'})
    event.shaped(Item.of('immersiveengineering:storage_steel', 3), ['CSC', 'SBS', 'CSC'], {
        C: 'immersiveengineering:component_steel',
        S: 'immersiveengineering:sheetmetal_steel',
        B: 'mekanism:block_steel'
    })

});