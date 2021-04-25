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

    //Transistor
    event.remove({output: 'youmatter:transistor_raw'})
    event.shaped('youmatter:transistor_raw', ['CCC', 'SPS', 'CCC'], {
        S: '#forge:ingots/steel',
        P: 'createaddition:gold_wire',
        C: '#forge:nuggets/gold'
    })

    //Compute Module
    event.remove({output: 'youmatter:compute_module'})
    event.shaped('youmatter:compute_module', [' GP', 'TRT', 'GP '], {
        T: 'youmatter:transistor',
        G: '#forge:rods/gold',
        R: 'immersiveengineering:insulating_glass',
        P: '#forge:plates/brass'
    })

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
    event.recipes.create.filling('buzzier_bees:glazed_porkchop', ['minecraft:cooked_porkchop', fluid.of('create:honey', 250)]),
    
    //-----------------------------------------------------
    //Create Additions
    //-----------------------------------------------------
    
    //Capacitor
    event.remove({output: 'createaddition:capacitor'})
    event.shaped('createaddition:capacitor', [' S ', 'PCP', 'PMP'], {
        S: '#forge:plates/zinc',
        P: '#forge:plates/iron',
        C: 'superpackutils:compressed_steel_ingot',
        M: 'immersiveengineering:component_steel'
    })

    //Alternator
    event.remove({id: 'createaddition:mechanical_crafting/alternator'})
    event.recipes.create.mechanical_crafting('createaddition:alternator', [
        ' PWP ',
        'PLELP',
        'WLBLW',
        'PRRRP',
        ' PWP '
      ], {
        P: '#forge:plates/invar',
        W: '#forge:plates/electrum',
        R: 'immersiveengineering:wirecoil_electrum',
        L: 'immersiveengineering:wirecoil_copper',
        B: '#forge:rods/brass',
        E: 'create:integrated_circuit'
    })

    //Electric Motor
    event.remove({id: 'createaddition:mechanical_crafting/electric_motor'})
    event.recipes.create.mechanical_crafting('createaddition:electric_motor', [
        '  B  ',
        ' BEB ',
        'BWRWB',
        ' BWB ',
        '  C  '
      ], {
        B: '#forge:plates/brass',
        C: 'createaddition:capacitor',
        W: 'immersiveengineering:wirecoil_electrum',
        R: '#forge:rods/iron',
        E: 'create:integrated_circuit'
    })

});