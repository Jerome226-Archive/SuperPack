//priority: 1500

events.listen('recipes', function (event) {

    //-----------------------------------------------------
    //Create
    //-----------------------------------------------------

    //Easy Dough
    event.remove({output: 'create:crafting/appliances/dough'})

    //Use Create Chocolate in recipes
    event.replaceInput({}, 'neapolitan:chocolate_bar', 'create:bar_of_chocolate')
    
    //Create Andesite Casing
    event.remove({output: 'create:andesite_casing'})
    event.shaped(Item.of('create:andesite_casing', 2), ['ATA', 'TWT', 'ATA'], {
        A: 'create:andesite_alloy',
        W: '#minecraft:logs',
        T: '#forge:treated_wood'
    }),

    //Mechanical Piston
    event.remove({output: 'create:mechanical_piston'})
    event.shaped('create:mechanical_piston', [' P ', 'ICI', ' A '], {
        C: 'create:andesite_casing',
        A: 'create:piston_extension_pole',
        P: 'minecraft:piston',
        I: 'create:cogwheel'
    }),

    //Create Andesite Alloy
    event.remove({output: 'create:andesite_alloy'})
    event.recipes.create.mixing('create:andesite_alloy', [
        'superpackutils:cupronickel_nugget',
        'minecraft:andesite'
    ]),

    event.recipes.immersiveengineering.alloy('create:andesite_alloy', Item.of('minecraft:andesite', 2), Item.of('superpackutils:cupronickel_nugget', 2))
    
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

    //Create Shadow Casing
    event.remove({output: 'create:shadow_steel_casing'})
    event.shaped('create:shadow_steel_casing', ['CTC', 'TWT', 'CTC'], {
        C: 'create:shadow_steel',
        W: 'thermal:enderium_glass',
        T: 'thermal:enderium_plate'
    }),

    //Create Radiant Casing
    event.remove({output: 'create:refined_radiance_casing'})
    event.shaped('create:refined_radiance_casing', ['CTC', 'TWT', 'CTC'], {
        C: 'create:refined_radiance',
        W: 'thermal:lumium_glass',
        T: 'thermal:lumium_plate'
    }),

    //Create Cogwheel
    event.remove({output: 'create:cogwheel'})
    event.shaped(Item.of('create:cogwheel', 6), ['STS', 'TAT', 'STS'], {
        A: 'create:andesite_alloy',
        T: '#minecraft:planks',
        S: '#forge:rods/wooden'
    }),

    //Create Large Cogwheel
    event.remove({output: 'create:large_cogwheel'})
    event.shaped(Item.of('create:large_cogwheel', 3), ['WTW', 'TCT', 'WTW'], {
        C: 'create:andesite_alloy',
        T: '#minecraft:planks',
        W: '#minecraft:logs'
    }),

    //Waterwheel
    event.remove({output: 'create:water_wheel'})
    event.shaped('create:water_wheel', [' T ', 'TAT', ' T '], {
        A: 'create:large_cogwheel',
        T: 'immersiveengineering:waterwheel_segment'
    }),

    //Windmill
    event.remove({output: 'create:windmill_bearing'})
    event.shaped('create:windmill_bearing', [' T ', 'BAB', ' P '], {
        A: 'create:andesite_casing',
        P: '#forge:plates/iron',
        T: 'create:turntable',
        B: 'immersiveengineering:windmill_blade'
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

    //Create Mechanical Plough
    event.remove({output: 'create:mechanical_plough'})
    event.shaped('create:mechanical_plough', [' A ', 'WCW', ' E '], {
        C: 'create:andesite_casing',
        W: 'create:cogwheel',
        A: 'create:andesite_alloy',
        E: 'superpackutils:plough'
    }),

    //Superpack Plough
    event.remove({output: 'superpackutils:plough'})
    event.shaped('superpackutils:plough', ['PPP', 'AAA', 'III'], {
        P: '#forge:plates/iron',
        I: 'immersiveengineering:stick_iron',
        A: 'create:andesite_alloy'
    }),

    //Create Mechanical Harvester
    event.remove({output: 'create:mechanical_harvester'})
    event.shaped('create:mechanical_harvester', [' A ', 'WCW', ' E '], {
        C: 'create:andesite_casing',
        W: 'create:cogwheel',
        A: 'create:andesite_alloy',
        E: 'superpackutils:harvesting_wheel'
    }),

    //Superpack Harvesting Wheel
    event.remove({output: 'superpackutils:harvesting_wheel'})
    event.shaped('superpackutils:harvesting_wheel', ['APA', 'APA', 'III'], {
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
    event.remove({output: 'superpackutils:integrated_circuit'})
    event.recipes.create.mechanical_crafting('superpackutils:integrated_circuit', [
        '  L  ',
        'ZCECZ',
        ' BBB '
    ], {
        L: '#forge:plates/lapis_lazuli',
        B: '#forge:plates/brass',
        C: 'youmatter:compute_module',
        Z: '#forge:ingots/zinc',
        E: 'create:electron_tube'
    }),

    //White Sail
    event.remove({output: 'create:white_sail'})
    event.shaped(Item.of('create:white_sail', 8), ['PPP', 'PCP', 'PPP'], {
        P: 'create:sail_frame',
        C: 'immersiveengineering:windmill_sail'
    }),

    //Chromatic Compound
    event.remove({id: 'create:mixing/chromatic_compound'})
    event.recipes.create.mixing('create:chromatic_compound', ['create:polished_rose_quartz', 'astralsorcery:stardust', 'botania:elementium_ingot']).superheated()
    
    //Blaze Cake
    event.remove({id: 'create:filling/blaze_cake'})
    event.custom({
        "type": "pneumaticcraft:thermo_plant",
        "item_input": {
          "item": "create:blaze_cake_base"
        },
        "fluid_input": {
          "type": "pneumaticcraft:fluid",
          "tag": "tconstruct:blazing_blood",
          "amount": 250
        },
        "item_output": {
          "item": "create:blaze_cake"
        },
        "temperature": {
          "min_temp": 525
        },
        "pressure": 3.5,
        "exothermic": false
    })
    
    //Create Electron Tube
    event.remove({output: 'create:electron_tube'})
    event.custom({"type":"immersiveengineering:blueprint","inputs":[{"count":1,"base_ingredient":{"item":"immersiveengineering:electron_tube"}},{"count":1,"base_ingredient":{"item":"create:polished_rose_quartz"}},{"count":1,"base_ingredient":{"item":"minecraft:redstone"}},{"count":1,"base_ingredient":{"item":"mekanism:ingot_steel"}}],"category":"components","result":{"item":"create:electron_tube","count":1}})

});