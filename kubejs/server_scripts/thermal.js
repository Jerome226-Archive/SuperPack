//priority: 1500

events.listen('recipes', function (event) { 

    //-----------------------------------------------------
    //Early Thermal
    //-----------------------------------------------------

    //Cured Rubber
    event.remove({id: 'thermal:smelting/cured_rubber_from_smelting'})
    event.remove({id: 'thermal:machine/smelter/smelter_cured_rubber'})
    event.custom({"type":"mekanism:purifying","itemInput":{"ingredient":{"item":"thermal:rubber"}},"gasInput":{"amount":1,"gas":"mekanism:oxygen"},"output":{"item":"thermal:cured_rubber"}})

    //Thermal Arboreal Extractor
    event.remove({output: 'thermal:device_tree_extractor'})
    event.shaped('thermal:device_tree_extractor', ['TDT', 'BCB', 'TST'], {
        T: '#forge:treated_wood',
        C: 'create:andesite_casing',
        B: 'minecraft:bucket',
        D: 'minecraft:dispenser', //Will probably be replaced with custom treetap later
        S: 'thermal:iron_plate'
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
        R: 'minecraft:shears',
        N: '#forge:plates/nickel',
        D: 'minecraft:dispenser',
        S: 'thermal:iron_plate'
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
        B: 'minecraft:iron_pickaxe',
        O: 'thermal:drill_head'
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
    }),

    //Energetic Infuser
    event.remove({output: 'thermal:charge_bench'})
    event.shaped('thermal:charge_bench', ['ECE', 'PBP', 'LRL'], {
        E: '#forge:sheetmetals/electrum',
        C: 'immersiveengineering:charging_station',
        P: '#forge:plates/copper',
        B: 'create:brass_casing',
        L: '#forge:sheetmetals/lead',
        R: 'createaddition:capacitor'
    }),

    //Decoctive Diffuser
    event.remove({output: 'thermal:device_potion_diffuser'})
    event.shaped('thermal:device_potion_diffuser', ['ECE', 'PBP', 'LRL'], {
        E: '#forge:sheetmetals/lead',
        C: 'minecraft:glass_bottle',
        P: '#forge:plates/silver',
        B: 'create:andesite_casing',
        L: '#forge:sheetmetals/aluminum',
        R: 'minecraft:dropper'
    }),

    //Tinker's Workbench
    event.remove({output: 'thermal:tinker_bench'})
    event.shaped('thermal:tinker_bench', ['LML', 'TAT', 'TCT'], {
        A: 'create:andesite_casing',
        L: '#forge:sheetmetals/lead',
        C: 'createaddition:capacitor',
        M: 'engineersdecor:metal_crafting_table',
        T: '#forge:treated_wood'
    }),

    //Rich Slag
    event.recipes.create.filling('thermal:rich_slag', ['thermal:slag', fluid.of('immersivepetroleum:napalm', 35)]),

    //Redstone Flux Coil
    event.remove({id: 'thermal:rf_coil'})
    event.recipes.mekanism.metallurgic_infusing('thermal:rf_coil', 'immersiveengineering:coil_mv', 'mekanism:redstone', 160),

    //Redstone Servo
    event.remove({id: 'thermal:redstone_servo'})
    event.recipes.mekanism.metallurgic_infusing('thermal:redstone_servo', 'immersiveengineering:component_iron', 'mekanism:redstone', 160),

    //Rubber
    event.remove({id: 'thermal:rubber_from_vine'})
    event.remove({id: 'thermal:rubber_3'})
    event.remove({id: 'thermal:rubber_from_dandelion'})
    event.recipes.create.compacting(Item.of('thermal:rubber', 3), [fluid.of('thermal:latex', 1000)]),

    //Ingot Cast
    event.remove({output: 'thermal:chiller_ingot_cast'})
    event.shaped('thermal:chiller_ingot_cast', [' C ', 'CIC', ' C '], {
        C: '#forge:plates/bronze',
        I: '#forge:ingots'
    }),

    //Rod Cast
    event.remove({output: 'thermal:chiller_rod_cast'})
    event.shaped('thermal:chiller_rod_cast', [' C ', 'CIC', ' C '], {
        C: '#forge:plates/bronze',
        I: '#forge:rods'
    }),

    //Coal Coke
    event.remove({id: 'thermal:machine/pyrolyzer/pyrolyzer_logs'})
    event.custom({
        "type": "thermal:pyrolyzer",
        "ingredient": {
          "tag": "minecraft:logs"
        },
        "result": [
          {
            "item": "minecraft:charcoal"
          },
          {
            "fluid": "immersiveengineering:creosote",
            "amount": 250
          }
        ],
        "experience": 0.15
    }),

    event.remove({id: 'thermal:machine/pyrolyzer/pyrolyzer_coal'})
    event.custom({
        "type": "thermal:pyrolyzer",
        "ingredient": {
          "item": "minecraft:coal"
        },
        "result": [
          {
            "item": "thermal:coal_coke"
          },
          {
            "item": "thermal:tar",
            "chance": 0.25
          },
          {
            "fluid": "immersiveengineering:creosote",
            "amount": 500
          }
        ],
        "experience": 0.15
    })

});